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

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    MainComponent,
    CoordinatesComponent,
    PaginationComponent,
    SkillsComponent,
    CovidStuffComponent
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
