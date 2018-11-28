import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowComponent } from './show/show.component';
import {RouterModule} from '@angular/router';
import { LabelDirective } from './directives/label.directive';
import {EpisodesComponent} from '../view/episodes/episodes.component';
import {Episode} from './model/episode';

@NgModule({
  declarations: [ShowComponent, LabelDirective],
  exports: [ShowComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
