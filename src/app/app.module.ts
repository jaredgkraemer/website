// Angular
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

// Routing
import { AppRoutingModule } from './app-routing.module';

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
import { GalleryPageComponent } from './component/gallery-page/gallery-page.component';
import { GalleryTitleComponent } from './component/gallery-title/gallery-title.component';
import { FooterComponent } from './component/footer/footer.component';
import { MotionComponent } from './component/motion/motion.component';
import { ContactComponent } from './component/contact/contact.component';
import { PortfolioComponent } from './component/portfolio/portfolio.component';
import { CarouselComponent } from './component/carousel/carousel.component';

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
    ContactComponent,
    GalleryPageComponent,
    GalleryTitleComponent,
    PortfolioComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LightboxModule,
    AppRoutingModule
  ],
  providers: [
    Title,
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
