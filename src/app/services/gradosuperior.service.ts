import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ciclos } from '../ciclos';

@Injectable({
  providedIn: 'root'
})
export class GradosuperiorService {

  constructor(private http:HttpClient) { }

  retornarJson(){
    return this.http.get<Ciclos[]>("../../assets/json/ciclos.json");
  }
}
