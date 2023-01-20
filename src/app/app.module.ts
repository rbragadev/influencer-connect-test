import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'primeng/api';
import { PrimeNgModule } from './components/shared/prime-ng/prime-ng.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule, PrimeNgModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
