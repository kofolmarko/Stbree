import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';// pridobimo trenutno pot v okviru komponente
import { User } from '../../classes/user';
import { Job } from '../../classes/job';
import { InstructionsEvent } from '../../classes/event';
import { ProfilService } from '../../services/profil.service'
import { switchMap } from 'rxjs/operators'; //za pridobitev vrednosti iz URL parametrov ter uporabi pri API klicu
import { AuthenticationService } from 'src/app/common/services/authentication.service';
import { NavigationEnd, Router } from '@angular/router';
import { InstructionsService } from '../../services/instructions.service';
import { JobsService } from '../../services/jobs.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-profile',// we can make this as an attribute, '[app-profile]' and then in html refference it as such ex. <div app-profile></div>
  //or we can select as class ec '.app-profile' and in html say <div class='app-profile'></div>, but you cant select by id sadly, not supported in Angular
  templateUrl: './profile.component.html', //lahko tudi tukaj notr (in-line) das vsebino html datoteke ampak je prevelika, bi mesali poslovno logiko...zaradi obvladovanje kompleksnosti
  styleUrls: ['./profile.component.css']//but in that case we have to use just template, not templateUrl (pointing to somewhere else) and you can use `` to write it with new lines etc, just like you would in .html
})//why is styleUrls an array? we can refference multiple stylesheets here. ex.  styleUrls: ['./profile.component.css', './notProfile.component.css'], also OR styles: [``], you can chose one method (inline or external), not combine both
export class ProfileComponent implements OnInit {

  constructor(
    private profileService: ProfilService,
    private route: ActivatedRoute,
    private router: Router,
    private jobsService: JobsService,
    private instructionsService: InstructionsService,
    private authenticationService: AuthenticationService,
    private modalService: NgbModal
  ) { }

  closeResult = '';

  public sporocilo: string = "";

  public uporabnik: User;

  public isLoggedIn: boolean = this.authenticationService.isLoggedIn();

  public editState: boolean = false;

  public viewResponsibilities: boolean = false;

  public isAdmin: boolean = false;

  public signedStatus: boolean = false;

  public featuredEvents: InstructionsEvent[] = this.getFeatured("events");

  public featuredOffers: Job[] = this.getFeatured("offers");

  private getUserInfo(): void {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          let emailUporabnika = params.get('emailUporabnika');
          return this.authenticationService.getUser(emailUporabnika);
        })
      )
      .subscribe(async (user: User) => {
        this.uporabnik = user;
        if (this.authenticationService.isLoggedIn()) {
          if (this.uporabnik.email === this.authenticationService.getCurrentUser().email) {
            this.isAdmin = true;
          }
        }
        this.sporocilo = user ? "" : "Uporabnik ne obstaja :(";
      });
  }

  private getFeatured(type: string): any[] {
    let featured: any[] = [];
    switch (type) {
      case 'events': {
        this.instructionsService.getEvents()
          .then(events => {
            for (let i = 1; i < 50; i++) {
              if (events[events.length - i]) {
                featured.push(events[events.length - i]);
              }
            }
          })
          .catch(error => console.log(error));
        break;
      }
      case 'offers': {
        this.jobsService.getJobs()
          .then(offers => {
            for (let i = 1; i < 50; i++) {
              if (offers[offers.length - i]) {
                featured.push(offers[offers.length - i]);
              }
            }
          })
          .catch(error => console.log(error));
        break;
      }
    }
    console.log(featured);
    return featured;
  }

  //DOSREDI
  openCity(evt, cityName): void {
    this.viewResponsibilities = true;
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    if (evt)
      evt.currentTarget.className += " active";
  }

  editUserInfo(): void {
    this.editCSS(true);
    this.editState = true;
  }

  saveUserInfo(): void {
    this.editCSS(false);
    this.editState = false;
    if (this.isInstructor() && !this.uporabnik.statusInstruktorja) {
      alert("Če še vedno imate prihajajoče dogodke, jih prosimo dokončajte ali ustrezno izbrišite. Odjavite se in se znova prijavite, da izgubite pravico do ustvarjanja dogodkov");
    } else if (!this.isInstructor() && this.uporabnik.statusInstruktorja) {
      alert("Če želite začeti ustvarjati dogodke, se prosimo odjavite in znova prijavite!");
    }
    this.profileService.editUserInfo(this.uporabnik)
      .then(user => {
        user ? this.uporabnik = user : this.sporocilo = "Napaka pri posdabljanju uporabnika."
      })
      .catch(error => {
        this.sporocilo = "Napaka API-ja pri posodabljanju uporabnika."
        //console.error(error);
      });
  }

  private editCSS(isEdit): void {
    if (isEdit) {
      document.getElementById("edit-btn").classList.remove("d-ilblock");
      document.getElementById("edit-btn").classList.add("d-none");
      document.getElementById("save-btn").classList.remove("d-none");
      document.getElementById("save-btn").classList.add("d-ilblock");
    } else {
      document.getElementById("edit-btn").classList.remove("d-none");
      document.getElementById("edit-btn").classList.add("d-ilblock");
      document.getElementById("save-btn").classList.remove("d-ilblock");
      document.getElementById("save-btn").classList.add("d-none");
    }
  }

  deleteUser() {
    let userEmail = this.route.snapshot.paramMap.get('emailUporabnika');
    this.profileService.deleteUser(userEmail)
      .subscribe(
        () => {
          this.signedStatus = false;
          this.uporabnik = null;
          this.authenticationService.logout();
          this.router.navigateByUrl('/');
          //this.sporocilo = "Uporabnik uspešno izbrisan."
          alert("Uporabnik uspešno izbrisan.")
        },
        (error) => this.sporocilo = "Napaka API-ja pri brisanju dogodka."
        //console.error(error)
      );
  }

  private async isSignedUp(): Promise<void> {
    if (this.isLoggedIn) {
      let currentUserEmail = this.authenticationService.getCurrentUser().email
      await this.authenticationService.getUser(currentUserEmail)
        .then(user => this.signedStatus = true)
        .catch(error => console.log(error));
    }
  }

  public isInstructor(): boolean {
    if (this.getCurrentUser().statusInstruktorja) {
      return true;
    } else {
      return false;
    }
  }

  public getCurrentUser(): User {
    return (this.authenticationService.getCurrentUser());
  }

  ngOnInit(): void {
    this.getUserInfo();
    this.isSignedUp();
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  assure(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.deleteUser();
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}