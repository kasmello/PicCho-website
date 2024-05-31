import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CareerComponent } from './career/career.component';
import { CollaboratorsComponent } from './collaborators/collaborators.component';
import { ContactComponent } from './contact/contact.component';
import { LocationTimeComponent } from './location-time/location-time.component';
import { OurStoreComponent } from './our-store/our-store.component';
import { HowToUseComponent } from './how-to-use/how-to-use.component';
import { EventsComponent } from './events/events.component';
import { GroupOrderComponent } from './group-order/group-order.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'career', component: CareerComponent },
  { path: 'collaborators', component: CollaboratorsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'location-times', component: LocationTimeComponent },
  { path: 'our-store', component: OurStoreComponent },
  { path: 'how-to-use', component: HowToUseComponent },
  { path: 'events', component: EventsComponent },
  { path: 'group-order', component: GroupOrderComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
