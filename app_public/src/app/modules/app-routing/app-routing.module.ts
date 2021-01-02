import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from '../../common/components/landing/landing.component';
import { LoginComponent } from 'src/app/common/components/login/login.component';
import { RegisterComponent } from 'src/app/common/components/register/register.component';
import { DashboardComponent } from 'src/app/common/components/dashboard/dashboard.component';
import { InstructorsComponent } from 'src/app/common/components/instructions/instructors/instructors.component';
import { EventsComponent } from 'src/app/common/components/instructions/events/events.component';
import { EventInfoComponent } from 'src/app/common/components/instructions/event-info/event-info.component';
import { OffersComponent } from 'src/app/common/components/jobs/offers/offers.component';
import { OfferInfoComponent } from 'src/app/common/components/jobs/offer-info/offer-info.component';
import { ProfileComponent } from 'src/app/common/components/profile/profile.component';
import { EventNewComponent } from 'src/app/common/components/instructions/event-new/event-new.component';
import { MessagingComponent } from 'src/app/common/components/messaging/messaging.component';
import { OfferNewComponent } from 'src/app/common/components/jobs/offer-new/offer-new.component';
import { KontaktiComponent } from 'src/app/common/components/chat/kontakti/kontakti.component';
import { DbComponent } from 'src/app/common/components/db/db.component';

const poti: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'prijava',
    component: LoginComponent
  },
  {
    path: 'registracija',
    component: RegisterComponent
  },
  {
    path: 'my',
    component: DashboardComponent
  },
  {
    path: 'instruktorji',
    component: InstructorsComponent
  },
  {
    path: 'instrukcije-dogodki',
    component: EventsComponent
  },
  {
    path: 'instrukcije-dogodki/dogodek/:idDogodka',
    component: EventInfoComponent
  },
  {
    path: 'instrukcije-dogodki/dodaj',
    component: EventNewComponent
  },
  {
    path: 'ponudba-del',
    component: OffersComponent
  },
  {
    path: 'ponudba-del/delo/:idDela',
    component: OfferInfoComponent
  },
  {
    path: 'ponudba-del/dodaj',
    component: OfferNewComponent
  },
  {
    path: 'profil/:emailUporabnika',
    component: ProfileComponent
  },
  {
    path: 'sporocanje',
    component: KontaktiComponent
  },
  {
    path: 'db',
    component: DbComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(poti)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }