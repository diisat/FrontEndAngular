import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
  export class DiaService {
    private API_SERVER = "http://localhost:4200/dias/";
  
    constructor(private httpClient: HttpClient) { }

    public getNextDay(dia): Observable<any>{
        return this.httpClient.get(this.API_SERVER +dia);
      }
  
   
  
  }