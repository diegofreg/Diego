import { Component, OnInit } from '@angular/core';
import { PercentualObesidadeGeneroService } from '../service/percentual-obesidade-genero.service';

@Component({
  selector: 'percentual-obesidade-por-genero',
  templateUrl: './percentual-obesidade-por-genero.component.html',
  styleUrls: ['./percentual-obesidade-por-genero.component.scss']
})
export class PercentualObesidadePorGeneroComponent implements OnInit {


  candidatos: Array<any>;


  constructor(private percentualObesidadeGeneroService :PercentualObesidadeGeneroService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.percentualObesidadeGeneroService.listar().subscribe(dados => this.candidatos = dados);
  }

}
