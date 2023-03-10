import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'primeng/api';
import { PrimeNgModule } from './components/shared/prime-ng.module';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';

import { NewPartnerComponent } from './components/pages/partners/new-partner/new-partner.component';
import { AllPartnerComponent } from './components/pages/partners/all-partner/all-partner.component';
import { PartnerComponent } from './components/pages/partners/partner/partner.component';
import { EditPartnerComponent } from './components/pages/partners/edit-partner/edit-partner.component';

import { NewPartnerFormModule } from './components/forms/new-partner-form/new-partner-form.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NewPartnerComponent,
    AllPartnerComponent,
    PartnerComponent,
    EditPartnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    PrimeNgModule,
    NewPartnerFormModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
