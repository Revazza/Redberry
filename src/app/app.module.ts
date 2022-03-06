import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './main/welcome/welcome.component';
import { MainComponent } from './main/main.component';
import { CoordinatesComponent } from './main/coordinates/coordinates.component';
import { PaginationComponent } from './main/pagination/pagination.component';
import { SkillsComponent } from './main/skills/skills.component';
import { HttpClientModule } from '@angular/common/http';
import { CovidStuffComponent } from './main/covid-stuff/covid-stuff.component';
import { AboutApplicantComponent } from './main/about-applicant/about-applicant.component';
import { SubmitApplicationComponent } from './main/submit-application/submit-application.component';
import { ApplicationsComponent } from './main/applications/applications.component';
import { ApplicantLayoutComponent } from './main/applications/applicant-layout/applicant-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    MainComponent,
    CoordinatesComponent,
    PaginationComponent,
    SkillsComponent,
    CovidStuffComponent,
    AboutApplicantComponent,
    SubmitApplicationComponent,
    ApplicationsComponent,
    ApplicantLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
