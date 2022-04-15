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

  // flag che indica se btn start deve essere disattivato
  btnStartDisabled: boolean;

  constructor() { }

  ngOnInit() {
    // all'avvio dell'app Start deve essere attivo
    this.btnStartDisabled = false;
  }

  onStartGame() {
    this.interval = setInterval(()=>{this.intervalFired.emit(this.lastNumber + 1); this.lastNumber++}, 1000)
    console.log('start game ci siamo');

    // Disattiva il button Start
    this.btnStartDisabled=true;
  }

  onPauseGame() {
    clearInterval(this.interval);

    // test azzeramento ultimo numero per vedere ripartire da 1 il timer
    // this.lastNumber = 0;
    console.log('pause game ci siamo');

    // attiva il button Start
    this.btnStartDisabled=false;
  }

  actionMethod(event: any) {
    // questa non serve.... collegandola a un button lo attiva o disattivato
    // non va bene qui perchè devo riattivare Start premendo Stop...
    event.target.disabled=true;
  }

}