import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../categoria.model';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-editar-categoria',
  templateUrl: './editar-categoria.component.html',
  styleUrls: ['./editar-categoria.component.css']
})
export class EditarCategoriaComponent implements OnInit {

  categoria: Categoria

  constructor(
    private categoriaService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.categoriaService.lerPorId(id).subscribe(categoria => {
      this.categoria = categoria
    })
  }

  editar(): void {
    this.categoriaService.editar(this.categoria).subscribe(() => {
      this.categoriaService.mensagem('Categoria Atualizada com sucesso!')
      this.router.navigate(['/categorias'])
    })
  }

  cancelar(): void {
    this.router.navigate(['/categorias'])
  }
}
