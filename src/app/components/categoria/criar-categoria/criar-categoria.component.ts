import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from '../categoria.model';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-criar-categoria',
  templateUrl: './criar-categoria.component.html',
  styleUrls: ['./criar-categoria.component.css']
})
export class CriarCategoriaComponent implements OnInit {

  categoria: Categoria = {
    nome: '',
    ativo: null
  }

  constructor(private categoriaService: CategoriaService, private router: Router) { }

  ngOnInit(): void {
  }

  criar(): void {
    this.categoriaService.criar(this.categoria).subscribe(() => {
      this.categoriaService.mensagem("Categoria criada!")
      this.router.navigate(['/categorias'])
    })

  }

  cancelar(): void {
    this.router.navigate(['/categorias'])
  }

}
