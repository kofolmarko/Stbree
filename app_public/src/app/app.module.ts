import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination'
import { OrderModule } from 'ngx-order-pipe'

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
import { EventNewComponent } from './common/components/instructions/event-new/event-new.component';
import { OffersComponent } from './common/components/jobs/offers/offers.component';
import { OfferInfoComponent } from './common/components/jobs/offer-info/offer-info.component';
import { ProfileComponent } from './common/components/profile/profile.component';
import { GetStartedComponent } from './common/components/get-started/get-started.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

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
    EventNewComponent,
    OffersComponent,
    OfferInfoComponent,
    ProfileComponent,
    GetStartedComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    OrderModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})

export class AppModule { }