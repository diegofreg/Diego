import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataFormService {


  constructor(private http: HttpClient) { }

  storeClient(cpfCnpj: string): Observable<any> {
    
    const helper = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
    }

     
    const headers= new HttpHeaders (helper)

    

     return this.http.get(``)
    
  }


  }

