import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { PageNotFoundComponent } from './component/error/error.component';
import { GalleryPageComponent } from './component/gallery-page/gallery-page.component';
import { MotionComponent } from './component/motion/motion.component';
import { ContactComponent } from './component/contact/contact.component';
import { EventsComponent } from './component/events/events.component';
import { PortfolioComponent } from './component/portfolio/portfolio.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { page: 'Home'} },
  { path: 'nature', component: GalleryPageComponent, data: { page: 'Nature'} },
  { path: 'urban', component: GalleryPageComponent, data: { page: 'Urban'} },
  { path: 'human', component: GalleryPageComponent, data: { page: 'Human'} },
  { path: 'events', component: EventsComponent, data: { page: 'Events'} },
  { path: 'motion', component: MotionComponent, data: { page: 'Motion'} },
  { path: 'about', component: AboutComponent, data: { page: 'About'} },
  { path: 'contact', component: ContactComponent, data: { page: 'Contact'} },
  { path: 'portfolio', component: PortfolioComponent, data: { page: 'Portfolio'} },
  { path: '', redirectTo: '/home', pathMatch: 'full', data: { page: 'Home'} },
  { path: '**', component: PageNotFoundComponent, data: { page: 'Error'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
