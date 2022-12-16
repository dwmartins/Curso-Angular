import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss']
})
export class DataBidingComponent implements OnInit {
  
  public nome: string = "Douglas";
  public idade: number = 24;

  public checkedDisabled: boolean = false;
  public imgSrc: string = "https://cdn.pixabay.com/photo/2018/07/31/22/08/lion-3576045__480.jpg";
  public imgTitle: string = "Property Binding";

  constructor() {}

  ngOnInit(): void {
  }
}
