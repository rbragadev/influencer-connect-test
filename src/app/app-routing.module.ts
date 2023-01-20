import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AllPartnerComponent } from './components/pages/partners/all-partner/all-partner.component';
import { NewPartnerComponent } from './components/pages/partners/new-partner/new-partner.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'new-partner',
    component: NewPartnerComponent,
  },
  {
    path: 'all-partner',
    component: AllPartnerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
