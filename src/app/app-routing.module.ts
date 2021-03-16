import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { WebDesignComponent } from './web-design/web-design.component';
import { AppDesignComponent } from './app-design/app-design.component';
import { GraphicDesignComponent } from './graphic-design/graphic-design.component';
import { ContactComponent } from './contact/contact.component';
import { LocationsComponent } from './locations/locations.component';
const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'webdesign', component: WebDesignComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
