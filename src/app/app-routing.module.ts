import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './MyComponent/about/about.component';
import { HeadComponent } from './MyComponent/head/head.component';
import { MapsNMarkerComponent } from './MyComponent/maps-n-marker/maps-n-marker.component';

const routes: Routes = [
  { path: '', component: HeadComponent },
  { path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
