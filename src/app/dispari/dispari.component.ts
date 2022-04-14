import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dispari',
  templateUrl: './dispari.component.html',
  styleUrls: ['./dispari.component.css']
})
export class DispariComponent implements OnInit {

  @Input() numDispari: number; // ottengo questo valore da un componente esterno, game-control.component

  constructor() { }

  ngOnInit() {
  }

}