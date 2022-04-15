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

  // flag che indica se btn deve essere disattivato
  btnStartDisabled: boolean;
  btnStopDisabled: boolean;

  constructor() { }

  ngOnInit() {
    // all'avvio dell'app Start deve essere attivo
    this.btnStartDisabled = false;
    this.btnStopDisabled = true;
  }

  onStartGame() {
    this.interval = setInterval(()=>{this.intervalFired.emit(this.lastNumber + 1); this.lastNumber++}, 1000)
    console.log('start game ci siamo');

    // Disattiva il button Start
    this.btnStartDisabled=true;

    // Attiva il button Stop
    this.btnStopDisabled = false;
  }

  onPauseGame() {
    clearInterval(this.interval);

    // test azzeramento ultimo numero per vedere ripartire da 1 il timer
    // this.lastNumber = 0;
    console.log('pause game ci siamo');

    // attiva il button Start
    this.btnStartDisabled=false;

    // Disattiva il button Stop
    this.btnStopDisabled=true
  }

  actionMethod(event: any) {
    // questa non serve.... collegandola a un button lo attiva o disattivato
    // non va bene qui perchè devo riattivare Start premendo Stop...
    event.target.disabled=true;
  }

}