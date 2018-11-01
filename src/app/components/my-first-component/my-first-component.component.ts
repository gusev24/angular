import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-my-first-component',
  templateUrl: './my-first-component.component.html',
  styleUrls: ['./my-first-component.component.scss']
})
export class MyFirstComponentComponent implements OnInit {
  title = 'lel';
  users = [
    {
      id: 1,
      name: 'Vasya',
      role: 'admin',
      birsday: new Date()
    },
    {
      id: 2,
      name: 'Petya',
      role: 'user',
      birsday: new Date()
    },
    {
      id: 3,
      name: 'Grisgha',
      role: 'moder',
      birsday: new Date()
    },
    {
      id: 4,
      name: 'Oleg',
      role: 'user',
      birsday: new Date()
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }


}
