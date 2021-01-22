import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Venda } from './venda.model';

@Injectable({
  providedIn: 'root'
})
export class VendaService {

  urlInicial = "http://localhost:8080/vendas"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  mensagem(msg: string){
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

  ler(): Observable<Venda[]>{
    return this.http.get<Venda[]>(this.urlInicial)
  }

  criar(venda: Venda): Observable<Venda>{
    return this.http.post<Venda>(this.urlInicial, venda)
  }

  lerPorId(id: string): Observable <Venda>{
    const url= `${this.urlInicial}/${id}`
    return this.http.get<Venda>(url)
  }

  editar(venda: Venda): Observable<Venda>{
    const url= `${this.urlInicial}/${venda.id}`
    return this.http.put<Venda>(url, venda)
  }
  deletar(id: number): Observable <Venda>{
    const url= `${this.urlInicial}/${id}`
    return this.http.delete<Venda>(url)
  }
}
