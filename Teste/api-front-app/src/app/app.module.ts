import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidatoPorEstadoComponent } from './candidato-por-estado/candidato-por-estado.component';
import { CandidatoEstadoService } from './service/candidato-estado.service';
import { TabComponent } from './tab/tab.component';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PercentualObesidadePorGeneroComponent } from './percentual-obesidade-por-genero/percentual-obesidade-por-genero.component';
import { ImcPorFaixaIdadeComponent } from './imc-por-faixa-idade/imc-por-faixa-idade.component';
import { MediaIdadeTipoSanguineoComponent } from './media-idade-tipo-sanguineo/media-idade-tipo-sanguineo.component';
import { DoadoresTipoSanguineoComponent } from './doadores-tipo-sanguineo/doadores-tipo-sanguineo.component';
import { MatTableModule } from '@angular/material/table' 



@NgModule({
  declarations: [
    AppComponent,
    CandidatoPorEstadoComponent,
    TabComponent,
    PercentualObesidadePorGeneroComponent,
    ImcPorFaixaIdadeComponent,
    MediaIdadeTipoSanguineoComponent,
    DoadoresTipoSanguineoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [CandidatoEstadoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
