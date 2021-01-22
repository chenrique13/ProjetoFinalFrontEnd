import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../categoria.model';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-deletar-categoria',
  templateUrl: './deletar-categoria.component.html',
  styleUrls: ['./deletar-categoria.component.css']
})
export class DeletarCategoriaComponent implements OnInit {

  categoria: Categoria

  constructor( private categoriaService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.categoriaService.lerPorId(id).subscribe(categoria => {
      this.categoria = categoria
    })
  }

  deletar(): void {
    this.categoriaService.deletar(this.categoria.id).subscribe(() => {
      this.categoriaService.mensagem('Categoria Deletada com sucesso!')
      this.router.navigate(['/categorias'])
    })
  }

  cancelar(): void {
    this.router.navigate(['/categorias'])
  }
}
