import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule} from './modules/app-routing/app-routing.module';

import { MainComponent } from './common/components/main/main.component';
import { LandingComponent } from './common/components/landing/landing.component';
import { NavbarComponent } from './common/components/navbar/navbar.component';
import { FooterComponent } from './common/components/footer/footer.component';
import { LoginComponent } from './common/components/login/login.component';
import { RegisterComponent } from './common/components/register/register.component';
import { DashboardComponent } from './common/components/dashboard/dashboard.component';
import { MessagingComponent } from './common/components/messaging/messaging.component';
import { InstructorsComponent } from './common/components/instructions/instructors/instructors.component';
import { EventsComponent } from './common/components/instructions/events/events.component';
import { EventInfoComponent } from './common/components/instructions/event-info/event-info.component';
import { OffersComponent } from './common/components/jobs/offers/offers.component';
import { OfferInfoComponent } from './common/components/jobs/offer-info/offer-info.component';
import { ProfileComponent } from './common/components/profile/profile.component';

@NgModule({
  declarations: [
    MainComponent,
    LandingComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    MessagingComponent,
    InstructorsComponent,
    EventsComponent,
    EventInfoComponent,
    OffersComponent,
    OfferInfoComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})

export class AppModule { }