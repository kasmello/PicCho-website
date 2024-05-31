import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CareerComponent } from './career/career.component';
import { ContactComponent } from './contact/contact.component';
import { LocationTimeComponent } from './location-time/location-time.component';
import { CollaboratorsComponent } from './collaborators/collaborators.component';
import { OurStoreComponent } from './our-store/our-store.component';
import { HomeTilesComponent } from './home-tiles/home-tiles.component';
import {MatIconModule} from '@angular/material/icon'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HowToUseComponent } from './how-to-use/how-to-use.component';
import { CostumesStylesComponent } from './costumes-styles/costumes-styles.component';
import { GroupOrderComponent } from './group-order/group-order.component';
import { EventsComponent } from './events/events.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CareerComponent,
    ContactComponent,
    LocationTimeComponent,
    CollaboratorsComponent,
    OurStoreComponent,
    HomeTilesComponent,
    HowToUseComponent,
    CostumesStylesComponent,
    GroupOrderComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
