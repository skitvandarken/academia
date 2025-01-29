import { Component } from '@angular/core';

@Component({
  selector: 'app-calendario',
  imports: [],
  templateUrl: './calendario.component.html',
  styleUrl: './calendario.component.css'
})

export class CalendarioComponent {

  
  curso: string = 'Clouds2Africa';
  data: string = '2020-12-31';
  local: string = 'Online';
  preco: number = 100;
  vagas: number = 10;


}
