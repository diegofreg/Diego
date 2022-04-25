import { Component, OnInit } from '@angular/core';
import { ImcFaixaIdadeService } from '../service/imc-faixa-idade.service'

@Component({
  selector: 'imc-por-faixa-idade',
  templateUrl: './imc-por-faixa-idade.component.html',
  styleUrls: ['./imc-por-faixa-idade.component.scss']
})
export class ImcPorFaixaIdadeComponent implements OnInit {

  candidatos: Array<any>;


  constructor(private imcFaixaIdadeService :ImcFaixaIdadeService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.imcFaixaIdadeService.listar().subscribe(dados => this.candidatos = dados);
  }

}
