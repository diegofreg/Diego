import { Component, OnInit } from '@angular/core';
import { CandidatoEstadoService } from '../service/candidato-estado.service'

@Component({
  selector: 'candidato-por-estado',
  templateUrl: './candidato-por-estado.component.html',
  styleUrls: ['./candidato-por-estado.component.scss']
})
export class CandidatoPorEstadoComponent implements OnInit {

  candidatos: Array<any>;


  constructor(private candidatoEstadoService :CandidatoEstadoService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.candidatoEstadoService.listar().subscribe(dados => this.candidatos = dados);
  }

}
