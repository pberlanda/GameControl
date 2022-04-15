import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>(); // l'evento può essere intercettato dall'esterni del componente
  interval;
  lastNumber: number = 0;

  constructor() { }

  ngOnInit() {
  }

  onStartGame() {
    this.interval = setInterval(()=>{this.intervalFired.emit(this.lastNumber + 1); this.lastNumber++}, 1000)
    console.log('start game ci siamo');
  }

  onPauseGame() {
    clearInterval(this.interval);
    // this.lastNumber = 0; // test azzeramento ultimo numero per vedere ripartire da 1 il timer
    console.log('pause game ci siamo');
  }

}