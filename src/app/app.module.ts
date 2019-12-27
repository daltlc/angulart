import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PieceComponent } from './piece/piece.component';

import { AngularFullpageModule } from '@fullpage/angular-fullpage';

// import {NgbPopover} from '@ng-bootstrap/ng-bootstrap';
// import {NgbPopoverConfig} from '@ng-bootstrap/ng-bootstrap';





@NgModule({
  declarations: [
    AppComponent,
    PieceComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFullpageModule, //*** added
    // NgbPopover, 
    // NgbPopoverConfig

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
