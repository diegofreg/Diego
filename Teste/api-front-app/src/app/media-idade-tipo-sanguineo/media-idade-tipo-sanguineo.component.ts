import { Component, OnInit } from '@angular/core';
import { MediaEtariaTipoSanguineoService } from '../service/media-etaria-tipo-sanguineo.service'

@Component({
  selector: 'media-idade-tipo-sanguineo',
  templateUrl: './media-idade-tipo-sanguineo.component.html',
  styleUrls: ['./media-idade-tipo-sanguineo.component.scss']
})
export class MediaIdadeTipoSanguineoComponent implements OnInit {

  candidatos: Array<any>;


  constructor(private mediaEtariaTipoSanguineoService :MediaEtariaTipoSanguineoService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.mediaEtariaTipoSanguineoService.listar().subscribe(dados => this.candidatos = dados);
  }

}
