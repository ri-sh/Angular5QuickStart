import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { FlexLayoutModule } from "@angular/flex-layout";
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { Tab } from './tab';
import { SegmentsComponent } from './segments/segments.component';

@NgModule({
  declarations:[
    AppComponent,
    HomePageComponent,
    MenuBarComponent,
    SegmentsComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MatIconModule,
    AppRoutingModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
