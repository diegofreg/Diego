import { Component, OnInit } from '@angular/core';
import { DoadoresTpSanguineoService } from '../service/doadores-tp-sanguineo.service'

@Component({
  selector: 'doadores-tipo-sanguineo',
  templateUrl: './doadores-tipo-sanguineo.component.html',
  styleUrls: ['./doadores-tipo-sanguineo.component.scss']
})
export class DoadoresTipoSanguineoComponent implements OnInit {

  candidatos: Array<any>;


  constructor(private doadoresTpSanguineoService :DoadoresTpSanguineoService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.doadoresTpSanguineoService.listar().subscribe(dados => this.candidatos = dados);
  }

}
