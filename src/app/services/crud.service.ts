import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/placeholder.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
constructor(private http: HttpClient) { }
  public getUsuario(): Observable<any>{
    return this.http.get(`https://localhost:7219/swagger/index.html`);
  }
}
