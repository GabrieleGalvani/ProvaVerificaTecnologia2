import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  macchine: string[]; //Creiamo il nostro vettore di stringhe 
  constructor() { 
     this.macchine = ['Ruspa', 'Gru', 'Bulldozer', 'Rullo','Pals','Escavatore', 'Terna', 'Trivella','.','..']; //Riempiamo il vettore
  }


  ngOnInit(): void {
  }

}
