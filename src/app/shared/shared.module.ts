import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowComponent } from './show/show.component';

@NgModule({
  declarations: [ShowComponent],
  exports: [ShowComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
