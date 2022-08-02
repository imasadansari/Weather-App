import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapsNMarkerComponent } from './MyComponent/maps-n-marker/maps-n-marker.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { HttpClientModule } from '@angular/common/http';
import { DatetrialComponent } from './MyComponent/datetrial/datetrial.component';
import { AboutComponent } from './MyComponent/about/about.component';
import { HeadComponent } from './MyComponent/head/head.component';

@NgModule({
  declarations: [
    AppComponent,
    MapsNMarkerComponent,
    DatetrialComponent,
    AboutComponent,
    HeadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
