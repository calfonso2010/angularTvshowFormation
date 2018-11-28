import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';
import {ViewModule} from './view/view.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    ViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
