import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from '../../categoria/categoria.model';
import { CategoriaService } from '../../categoria/categoria.service';
import { Fornecedor } from '../../fornecedor/fornecedor.model';
import { FornecedorService } from '../../fornecedor/fornecedor.service';
import { Marca } from '../../marca/marca.model';
import { MarcaService } from '../../marca/marca.service';
import { Produto } from '../produto.model';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-criar-produto',
  templateUrl: './criar-produto.component.html',
  styleUrls: ['./criar-produto.component.css']
})
export class CriarProdutoComponent implements OnInit {

  produto: Produto = {
    id: null,
    nome: '',
    descricao: '',
    imgUrl: '',
    preco: null,
    unidade: null,
    categoria: {
      id: null,
      nome: '',
      ativo: null
    },
    marca: {
      id: null,
      nome: '',
      descricao: ''
    },
    fornecedor: {
      id: null,
      nome: '',
      endereco: '',
      telefone: '',
      cnpj: '',
      email: ''
    }
  }
  categorias: Categoria[]
  marcas: Marca[]
  fornecedores: Fornecedor[]

  constructor(private produtoService: ProdutoService, private categoriaService: CategoriaService, private fornecedorService: FornecedorService, private marcaService: MarcaService, private router: Router) { }

  ngOnInit(): void {
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

  criar(): void {
    this.produtoService.criar(this.produto).subscribe(() => {
      this.produtoService.mensagem("Produto criado!")
      this.router.navigate(['/produtos'])
    })
  }

  cancelar(): void {
    this.router.navigate(['/produtos'])
  }

}
