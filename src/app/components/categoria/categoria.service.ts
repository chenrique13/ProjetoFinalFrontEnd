import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from './categoria.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  urlInicial = "http://localhost:8080/categorias"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  mensagem(msg: string){
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

  ler(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this.urlInicial)
  }

  criar(categoria: Categoria): Observable<Categoria>{
    return this.http.post<Categoria>(this.urlInicial, categoria)
  }

  lerPorId(id: string): Observable <Categoria>{
    const url= `${this.urlInicial}/${id}`
    return this.http.get<Categoria>(url)
  }

  editar(categoria: Categoria): Observable<Categoria>{
    const url= `${this.urlInicial}/${categoria.id}`
    return this.http.put<Categoria>(url, categoria)
  }

  deletar(id: number): Observable <Categoria>{
    const url= `${this.urlInicial}/${id}`
    return this.http.delete<Categoria>(url)
  }
}
