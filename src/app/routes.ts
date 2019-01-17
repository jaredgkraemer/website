import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { PageNotFoundComponent } from './component/error/error.component';
import { GalleryComponent } from './component/gallery/gallery.component';
import { MotionComponent } from './component/motion/motion.component';
import { ContactComponent } from './component/contact/contact.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { page: 'Home'} },
  { path: 'nature', component: GalleryComponent, data: { page: 'Nature'} },
  { path: 'urban', component: GalleryComponent, data: { page: 'Urban'} },
  { path: 'human', component: GalleryComponent, data: { page: 'Human'} },
  { path: 'events', component: GalleryComponent, data: { page: 'Events'} },
  { path: 'motion', component: MotionComponent, data: { page: 'Motion'} },
  { path: 'about', component: AboutComponent, data: { page: 'About'} },
  { path: 'contact', component: ContactComponent, data: { page: 'Contact'} },
  { path: '', redirectTo: '/home', pathMatch: 'full', data: { page: 'Home'} },
  { path: '**', component: PageNotFoundComponent, data: { page: 'Error'} }
];
