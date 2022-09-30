import { PlatformLocation } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
})
export class FirstComponentComponent implements OnInit {
  name: string = 'Marcos';
  age: number = 44;
  job = 'Programador';
  hobbies = ['Correr', 'Jogar', 'Estudar', ' Programar'];
  car = {
    name: 'Polo',
    year: '2019',
  };

  constructor() {}

  ngOnInit(): void {}
}
