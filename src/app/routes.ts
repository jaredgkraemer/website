import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { PageNotFoundComponent } from './component/error/error.component';
import { GalleryPageComponent } from './component/gallery-page/gallery-page.component';
import { MotionComponent } from './component/motion/motion.component';
import { ContactComponent } from './component/contact/contact.component';
import { EventsComponent } from './component/events/events.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { page: 'Home'} },
  { path: 'nature', component: GalleryPageComponent, data: { page: 'Nature'} },
  { path: 'urban', component: GalleryPageComponent, data: { page: 'Urban'} },
  { path: 'human', component: GalleryPageComponent, data: { page: 'Human'} },
  { path: 'events', component: EventsComponent, data: { page: 'Events'} },
  { path: 'motion', component: MotionComponent, data: { page: 'Motion'} },
  { path: 'about', component: AboutComponent, data: { page: 'About'} },
  { path: 'contact', component: ContactComponent, data: { page: 'Contact'} },
  { path: '', redirectTo: '/home', pathMatch: 'full', data: { page: 'Home'} },
  { path: '**', component: PageNotFoundComponent, data: { page: 'Error'} }
];
