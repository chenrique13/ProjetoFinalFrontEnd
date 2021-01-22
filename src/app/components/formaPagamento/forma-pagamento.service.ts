import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { FormaPagamento } from './forma-pagamento.model';

@Injectable({
  providedIn: 'root'
})
export class FormaPagamentoService {

  urlInicial = "http://localhost:8080/formaspagamento"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  mensagem(msg: string){
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

  ler(): Observable<FormaPagamento[]>{
    return this.http.get<FormaPagamento[]>(this.urlInicial)
  }

  criar(formaPagamento: FormaPagamento): Observable<FormaPagamento>{
    return this.http.post<FormaPagamento>(this.urlInicial, formaPagamento)
  }

  lerPorId(id: string): Observable <FormaPagamento>{
    const url= `${this.urlInicial}/${id}`
    return this.http.get<FormaPagamento>(url)
  }

  editar(formaPagamento: FormaPagamento): Observable<FormaPagamento>{
    const url= `${this.urlInicial}/${formaPagamento.id}`
    return this.http.put<FormaPagamento>(url, formaPagamento)
  }
  deletar(id: number): Observable <FormaPagamento>{
    const url= `${this.urlInicial}/${id}`
    return this.http.delete<FormaPagamento>(url)
  }

}
