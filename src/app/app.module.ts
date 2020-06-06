import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ExperienceComponent } from './experience/experience.component';

import { AppService } from './app.service';
import { Globals } from './globals';

@NgModule({
  declarations: [
    AppComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [AppService, Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
