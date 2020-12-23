import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';// pridobimo trenutno pot v okviru komponente
import { User } from '../../classes/user';
import { ProfilService } from '../../services/profil.service'
import { switchMap } from 'rxjs/operators'; //za pridobitev vrednosti iz URL parametrov ter uporabi pri API klicu

@Component({
  selector: 'app-profile',// we can make this as an attribute, '[app-profile]' and then in html refference it as such ex. <div app-profile></div>
  //or we can select as class ec '.app-profile' and in html say <div class='app-profile'></div>, but you cant select by id sadly, not supported in Angular
  templateUrl: './profile.component.html', //lahko tudi tukaj notr (in-line) das vsebino html datoteke ampak je prevelika, bi mesali poslovno logiko...zaradi obvladovanje kompleksnosti
  styleUrls: ['./profile.component.css']//but in that case we have to use just template, not templateUrl (pointing to somewhere else) and you can use `` to write it with new lines etc, just like you would in .html
})//why is styleUrls an array? we can refference multiple stylesheets here. ex.  styleUrls: ['./profile.component.css', './notProfile.component.css'], also OR styles: [``], you can chose one method (inline or external), not combine both
export class ProfileComponent implements OnInit {

  constructor(
    private profilService: ProfilService,
    private route: ActivatedRoute
    ) { }

  public sporocilo: string = "";

  public uporabnik: User;

  private getUserInfo(): void {
    this.route.paramMap
    .pipe(
      switchMap((params: ParamMap) => {
        let idUporabnika = params.get('idUporabnika');
        return this.profilService.getUser(idUporabnika);
      })
    )
    .subscribe((user: User) => {
        this.uporabnik = user;
        this.sporocilo = user ? "" : "Uporabnik ne obstaja :(";
    });
  }

  ngOnInit(): void {
    this.getUserInfo();
  }

}