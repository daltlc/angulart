import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PieceComponent } from './piece/piece.component';

import { AngularFullpageModule } from '@fullpage/angular-fullpage';


@NgModule({
  declarations: [
    AppComponent,
    PieceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFullpageModule //*** added

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
