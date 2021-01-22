import { Component, OnInit } from '@angular/core';
import { Categoria } from '../categoria.model';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-ler-categoria',
  templateUrl: './ler-categoria.component.html',
  styleUrls: ['./ler-categoria.component.css']
})

export class LerCategoriaComponent implements OnInit {

  categorias:Categoria[]
  displayedColumns = ['nome', 'ativo','acoes'];

  constructor(private categoriaService:CategoriaService) { }

  ngOnInit(): void {
    this.categoriaService.ler().subscribe(categorias => {
      this.categorias = categorias
    })
  }

}
