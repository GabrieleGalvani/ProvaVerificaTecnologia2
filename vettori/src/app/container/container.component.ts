import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  constructionMachinery: string[];
  constructor() {
    this.constructionMachinery = ['Escavatori', 'Terne', 'Pale', 'Minipale', 'Dumpers', 'Bulldozer', 'Motolivellatrici', 'Rulli compattatori', 'Luigi', 'Cricchetto',]
  }

  ngOnInit(): void {
  }

}
