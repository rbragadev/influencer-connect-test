import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AllPartnerComponent } from './components/pages/partners/all-partner/all-partner.component';
import { EditPartnerComponent } from './components/pages/partners/edit-partner/edit-partner.component';
import { NewPartnerComponent } from './components/pages/partners/new-partner/new-partner.component';
import { PartnerComponent } from './components/pages/partners/partner/partner.component';

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
    path: 'partner',
    component: AllPartnerComponent,
  },
  {
    path: 'partner/:id',
    component: PartnerComponent,
  },
  {
    path: 'partner/edit/:id',
    component: EditPartnerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
