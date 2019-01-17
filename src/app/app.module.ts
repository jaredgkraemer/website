// Angular
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Routing
import { routes } from './routes';

// Angular Bootstrap
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Lightbox
import { LightboxModule } from 'ngx-lightbox';

// Services
import { OrderService } from './service/order/order.service';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { PageNotFoundComponent } from './component/error/error.component';
import { GalleryComponent } from './component/gallery/gallery.component';
import { FooterComponent } from './component/footer/footer.component';
import { MotionComponent } from './component/motion/motion.component';
import { ContactComponent } from './component/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    PageNotFoundComponent,
    GalleryComponent,
    FooterComponent,
    MotionComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LightboxModule,
    // NgbModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [
    Title,
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
