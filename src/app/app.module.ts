import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { GameControlComponent } from './game-control/game-control.component';
import { DispariComponent } from './dispari/dispari.component';
import { PariComponent } from './pari/pari.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, GameControlComponent, DispariComponent, PariComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
