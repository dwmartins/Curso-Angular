import { Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnChanges{

  @Input() public title: string = "Bem vindo!";

  constructor() {}

  ngOnInit(): void {
    
  }
  // ngOnInit() -> vai carrer o que estiver nela assim que carregar a pagina!

  ngOnChanges( ): void {
    alert("Foi alterado com sucesso.")
  }
 
}
