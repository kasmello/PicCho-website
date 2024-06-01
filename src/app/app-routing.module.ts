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
  { path: 'news', component: HomeComponent },
  { path: 'faq', component: AboutComponent },
  { path: 'career', component: CareerComponent },
  { path: 'collaborators', component: CollaboratorsComponent },
  { path: 'socials', component: ContactComponent },
  { path: 'location-times', component: LocationTimeComponent },
  { path: 'prices', component: OurStoreComponent },
  { path: 'booth-guide', component: HowToUseComponent },
  { path: 'events', component: EventsComponent },
  { path: 'group-order', component: GroupOrderComponent },
  { path: '', redirectTo: 'news', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
