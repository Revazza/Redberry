import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './main/welcome/welcome.component';
import { MainComponent } from './main/main.component';
import { CoordinatesComponent } from './main/coordinates/coordinates.component';
import { PaginationComponent } from './main/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    MainComponent,
    CoordinatesComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
