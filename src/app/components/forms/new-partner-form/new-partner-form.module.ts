import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewPartnerFormComponent } from './new-partner-form.component';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [NewPartnerFormComponent],
  imports: [CommonModule, ReactiveFormsModule, SharedModule],
  exports: [NewPartnerFormComponent],
})
export class NewPartnerFormModule {}
