import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Marca } from './marca.model';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  urlInicial = "http://localhost:8080/marcas"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  mensagem(msg: string){
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

  ler(): Observable<Marca[]>{
    return this.http.get<Marca[]>(this.urlInicial)
  }

  criar(marca: Marca): Observable<Marca>{
    return this.http.post<Marca>(this.urlInicial, marca)
  }

  lerPorId(id: string): Observable <Marca>{
    const url= `${this.urlInicial}/${id}`
    return this.http.get<Marca>(url)
  }

  editar(marca: Marca): Observable<Marca>{
    const url= `${this.urlInicial}/${marca.id}`
    return this.http.put<Marca>(url, marca)
  }

  deletar(id: number): Observable <Marca>{
    const url= `${this.urlInicial}/${id}`
    return this.http.delete<Marca>(url)
  }
}
