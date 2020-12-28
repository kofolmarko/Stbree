import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';// pridobimo trenutno pot v okviru komponente
import { User } from '../../classes/user';
import { ProfilService } from '../../services/profil.service'
import { switchMap } from 'rxjs/operators'; //za pridobitev vrednosti iz URL parametrov ter uporabi pri API klicu
import { AuthenticationService } from 'src/app/common/services/authentication.service';
import { NavigationEnd, Router } from '@angular/router';

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
    private authenticationService: AuthenticationService
    ) { }

  public sporocilo: string = "";

  public uporabnik: User;

  public isLoggedIn: boolean = this.authenticationService.isLoggedIn();

  public editState: boolean = false;
  
  public isAdmin: boolean = false;

  public signedStatus: boolean = false;

  // let currentUserEmail = this.authenticationService.getCurrentUser().email
  //     await this.authenticationService.getUser(currentUserEmail)

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

  editUserInfo(): void {
    this.editCSS(true);
    this.editState = true;
  }

  saveUserInfo(): void {
    this.editCSS(false);
    this.editState = false;
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
          this.sporocilo = "Dogodek uspešno izbrisan."
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

  ngOnInit(): void {
    this.getUserInfo();
    this.isSignedUp();
  }

}