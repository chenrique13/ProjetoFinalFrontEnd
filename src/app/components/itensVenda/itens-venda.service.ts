import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { ItensVenda } from './itens-venda.model';

@Injectable({
  providedIn: 'root'
})
export class ItensVendaService {

  urlInicial = "http://localhost:8080/itensvendas"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  mensagem(msg: string){
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

  ler(): Observable<ItensVenda[]>{
    return this.http.get<ItensVenda[]>(this.urlInicial)
  }

  criar(itensVenda: ItensVenda): Observable<ItensVenda>{
    return this.http.post<ItensVenda>(this.urlInicial, itensVenda)
  }

  lerPorId(id: string): Observable <ItensVenda>{
    const url= `${this.urlInicial}/${id}`
    return this.http.get<ItensVenda>(url)
  }

  editar(itensVenda: ItensVenda): Observable<ItensVenda>{
    const url= `${this.urlInicial}/${itensVenda.id}`
    return this.http.put<ItensVenda>(url, itensVenda)
  }

  deletar(id: string): Observable <ItensVenda>{
    const url= `${this.urlInicial}/${id}`
    return this.http.delete<ItensVenda>(url)
  }
}
