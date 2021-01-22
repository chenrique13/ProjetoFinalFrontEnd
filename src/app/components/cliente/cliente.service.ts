import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Cliente } from './cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  urlInicial = "http://localhost:8080/clientes"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  mensagem(msg: string){
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

  ler(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.urlInicial)
  }

  criar(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(this.urlInicial, cliente)
  }

  lerPorId(id: string): Observable <Cliente>{
    const url= `${this.urlInicial}/${id}`
    return this.http.get<Cliente>(url)
  }

  editar(cliente: Cliente): Observable<Cliente>{
    const url= `${this.urlInicial}/${cliente.id}`
    return this.http.put<Cliente>(url, cliente)
  }

  deletar(id: number): Observable <Cliente>{
    const url= `${this.urlInicial}/${id}`
    return this.http.delete<Cliente>(url)
  }
}
