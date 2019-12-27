import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PieceComponent } from './piece/piece.component';

import { AngularFullpageModule } from '@fullpage/angular-fullpage';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [
    AppComponent,
    PieceComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFullpageModule, //*** added
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
