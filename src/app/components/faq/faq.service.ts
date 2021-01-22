import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Faq } from './Faq.model';

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  urlInicial = "http://localhost:8080/faq"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  mensagem(msg: string){
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

  ler(): Observable<Faq[]>{
    return this.http.get<Faq[]>(this.urlInicial)
  }

  criar(faq: Faq): Observable<Faq>{
    return this.http.post<Faq>(this.urlInicial, faq)
  }

  lerPorId(id: string): Observable <Faq>{
    const url= `${this.urlInicial}/${id}`
    return this.http.get<Faq>(url)
  }

  editar(faq: Faq): Observable<Faq>{
    const url= `${this.urlInicial}/${faq.id}`
    return this.http.put<Faq>(url, faq)
  }

  deletar(id: number): Observable <Faq>{
    const url= `${this.urlInicial}/${id}`
    return this.http.delete<Faq>(url)
  }
}
