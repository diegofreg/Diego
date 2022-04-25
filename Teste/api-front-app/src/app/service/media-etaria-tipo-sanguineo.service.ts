import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MediaEtariaTipoSanguineoService {

  endpoint = 'http://localhost:8080/v1/candidato/media-idade-tipo-sanguineo';

  constructor(private http: HttpClient){}

  listar() {
    return this.http.get<any[]>(`${this.endpoint}`);
  }
}
