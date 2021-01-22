import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Produto } from './produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  urlInicial = "http://localhost:8080/produtos"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  mensagem(msg: string){
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

  ler(): Observable<Produto[]>{
    return this.http.get<Produto[]>(this.urlInicial)
  }

  criar(produto: Produto): Observable<Produto>{
    return this.http.post<Produto>(this.urlInicial, produto)
  }

  lerPorId(id: string): Observable <Produto>{
    const url= `${this.urlInicial}/${id}`
    return this.http.get<Produto>(url)
  }

  editar(produto: Produto): Observable<Produto>{
    const url= `${this.urlInicial}/${produto.id}`
    return this.http.put<Produto>(url, produto)
  }

  deletar(id: number): Observable <Produto>{
    const url= `${this.urlInicial}/${id}`
    return this.http.delete<Produto>(url)
  }
}
