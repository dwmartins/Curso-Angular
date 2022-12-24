import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-diretivas-estruturaris',
  templateUrl: './diretivas-estruturaris.component.html',
  styleUrls: ['./diretivas-estruturaris.component.scss']
})
export class DiretivasEstruturarisComponent implements OnInit {
  public condition: boolean = true;
  public conditionClick: boolean = true;
  public list = [{nome: "Douglas Martins", idade: 24}]

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

  public onclickAdd() {
    this.list.push({nome: "Tati", idade: 27});
  }

  public onClickEventList(event: MouseEvent){
    alert(event)
  }
}
