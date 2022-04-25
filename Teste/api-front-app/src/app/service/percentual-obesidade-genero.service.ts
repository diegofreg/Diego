import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PercentualObesidadeGeneroService {

  endpoint = 'http://localhost:8080/v1/candidato/percentual-obesidade-por-genero';

  constructor(private http: HttpClient){}

  listar() {
    return this.http.get<any[]>(`${this.endpoint}`);
  }
}
