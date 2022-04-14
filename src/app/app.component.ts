import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  numeriDispari: number[] = []; // significa che creo un array di numero inizializzato vuoto ( = [] )
  numeriPari: number[] = [];

  onIntervalFired(firedNumebr: number) {
    //console.log('evento intercettato ' + firedNumebr)

    if (firedNumebr % 2 === 0) {
      this.numeriPari.push(firedNumebr);
    } else {
      this.numeriDispari.push(firedNumebr);
    }

  }

}
