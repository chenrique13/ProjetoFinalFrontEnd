import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Fornecedor } from './fornecedor.model';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {

  urlInicial = "http://localhost:8080/fornecedores"

  constructor(private snackBar: MatSnackBar,private http: HttpClient) { }

  mensagem(msg: string){
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

  ler(): Observable<Fornecedor[]>{
    return this.http.get<Fornecedor[]>(this.urlInicial)
  }

  criar(fornecedor: Fornecedor): Observable<Fornecedor>{
    return this.http.post<Fornecedor>(this.urlInicial, fornecedor)
  }

  lerPorId(id: string): Observable <Fornecedor>{
    const url= `${this.urlInicial}/${id}`
    return this.http.get<Fornecedor>(url)
  }

  editar(fornecedor: Fornecedor): Observable<Fornecedor>{
    const url= `${this.urlInicial}/${fornecedor.id}`
    return this.http.put<Fornecedor>(url, fornecedor)
  }

  deletar(id: number): Observable <Fornecedor>{
    const url= `${this.urlInicial}/${id}`
    return this.http.delete<Fornecedor>(url)
  }
}
