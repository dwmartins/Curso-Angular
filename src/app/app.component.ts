import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
    <app-diretivas-estruturaris></app-diretivas-estruturaris>
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}
 
}
