import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImcFaixaIdadeService {

  endpoint = 'http://localhost:8080/v1/candidato/imc-por-faixa-idade';

  constructor(private http: HttpClient){}

  listar() {
    return this.http.get<any[]>(`${this.endpoint}`);
  }
}
