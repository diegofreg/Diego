import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class HttpService {
  
  post<T>(arg0: string, pessoacpf: string) {
      throw new Error('Method not implemented.');
  }
  constructor(private httpClient: HttpClient) {}

  public get<Type>(url: string): Observable<Type> {
    return this.httpClient.get<Type>(url, { responseType: "json" });
  }

  
}
