import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './share/material/material.module';

import { AppComponent } from './app.component';
import { CoordenadoriaComponent } from './coordenadoria/coordenadoria.component';
import { DescricaodaacaoComponent } from './descricaodaacao/descricaodaacao.component';
import { ProdutoagricolaComponent } from './produtoagricola/produtoagricola.component';
import { EnvolvidosComponent } from './envolvidos/envolvidos.component';

//import { ThemePalette } from '@angular/material/core';
import { FiscalizadoComponent } from './fiscalizado/fiscalizado.component';
import { HttpService } from './Services/http.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ThemeService } from './core/services/theme.service';
import { StoreModule } from '@ngrx/store';
import { DialogErrorsComponent } from './modal/dialog-errors/dialog-errors.component';


@NgModule({
  declarations: [
    AppComponent,
    CoordenadoriaComponent,
    DescricaodaacaoComponent,
    ProdutoagricolaComponent,
    EnvolvidosComponent,
    FiscalizadoComponent,
    ToolbarComponent,
    DialogErrorsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    MaterialModule,
    StoreModule.forRoot({}, {})   
  ],
  providers: [HttpService,ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
