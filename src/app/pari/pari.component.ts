import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pari',
  templateUrl: './pari.component.html',
  styleUrls: ['./pari.component.css']
})
export class PariComponent implements OnInit {

  @Input() numPari: number = 0;

  constructor() { }

  ngOnInit() {
  }

}