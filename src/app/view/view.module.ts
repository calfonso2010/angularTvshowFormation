import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import { ShowFullComponent } from './show-full/show-full.component';
import {SharedModule} from '../shared/shared.module';
import { EpisodesComponent } from './episodes/episodes.component';

@NgModule({
  declarations: [ShowFullComponent, EpisodesComponent],
  imports: [
    CommonModule,
    ViewRoutingModule,
    SharedModule
  ]
})
export class ViewModule { }
