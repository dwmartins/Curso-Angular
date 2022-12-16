import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturaris',
  templateUrl: './diretivas-estruturaris.component.html',
  styleUrls: ['./diretivas-estruturaris.component.scss']
})
export class DiretivasEstruturarisComponent implements OnInit {
  public condition: boolean = true;
  public conditionClick: boolean = true;

  constructor() {}
  ngOnInit(): void {
    setInterval( ()=>{
      if(this.condition){
        this.condition = false;
      }else{
        this.condition = true;
      }
    },2000 )
  }

  public onCLick() {
    if(this.conditionClick){
      this.conditionClick = false;
    }else{
      this.conditionClick = true;
    }
  }
}
