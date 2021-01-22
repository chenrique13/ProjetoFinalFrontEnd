import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../../categoria/categoria.model';
import { CategoriaService } from '../../categoria/categoria.service';
import { Fornecedor } from '../../fornecedor/fornecedor.model';
import { FornecedorService } from '../../fornecedor/fornecedor.service';
import { Marca } from '../../marca/marca.model';
import { MarcaService } from '../../marca/marca.service';
import { Produto } from '../produto.model';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.css']
})
export class EditarProdutoComponent implements OnInit {

  produto: Produto
  categorias: Categoria[]
  marcas: Marca[]
  fornecedores: Fornecedor[]

  constructor(private produtoService: ProdutoService, private categoriaService: CategoriaService, private fornecedorService:FornecedorService, private marcaService:MarcaService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.produtoService.lerPorId(id).subscribe(produto => {
      this.produto = produto
    })
    this.categoriaService.ler().subscribe(categorias => {
      this.categorias = categorias
    })
    this.marcaService.ler().subscribe(marcas => {
      this.marcas = marcas
    })
    this.fornecedorService.ler().subscribe(fornecedores => {
      this.fornecedores = fornecedores
    })
  }

  editar(): void {
    this.produtoService.editar(this.produto).subscribe(() => {
      this.produtoService.mensagem('Produto Atualizado com sucesso!')
      this.router.navigate(['/produtos'])
    })
  }

  cancelar(): void {
    this.router.navigate(['/produtos'])
  }
}
