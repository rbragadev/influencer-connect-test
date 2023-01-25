import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DebugComponent } from './debug/debug.component';

import { PrimeNgModule } from './prime-ng.module';

@NgModule({
  declarations: [DebugComponent],
  imports: [CommonModule, PrimeNgModule],
  exports: [PrimeNgModule, DebugComponent],
})
export class SharedModule {}
