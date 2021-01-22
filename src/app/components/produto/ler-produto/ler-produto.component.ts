import { CompileShallowModuleMetadata } from '@angular/compiler';
import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { dateInputsHaveChanged } from '@angular/material/datepicker/datepicker-input-base';
import { ItensVenda } from '../../itensVenda/itens-venda.model';
import { ItensVendaService } from '../../itensVenda/itens-venda.service';
import { Venda } from '../../venda/venda.model';
import { VendaService } from '../../venda/venda.service';
import { Produto } from '../produto.model';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-ler-produto',
  templateUrl: './ler-produto.component.html',
  styleUrls: ['./ler-produto.component.css']
})
export class LerProdutoComponent implements OnInit {

  produtos: Produto[]
  total: number
  produtosSelecionados = new Map<number, Produto>()
  venda: Venda = {
    id: null,
    valorTotal: 0,
    dataHora: null,
    cliente: {
      id: 1,
      nome: 'Henrique',
      nomeSocial: '',
      apelido: '',
      dataNascimento: '',
      sexo: '',
      cpf: '',
      email: '',
      telefone: ''
    },
    formaPagamento: {
      id: 1,
      ativo: true,
      descricao: 'Parcelamento em até 12x sem juros',
      forma: 'Fiado'
    }
  }

  itemVenda: ItensVenda = {
    id: null,
    valorUnitario: null,
    quantidade: 1,
    produto: null,
    venda: this.venda
  }


  constructor(private produtoService: ProdutoService, private itensVendaService: ItensVendaService, private vendaService: VendaService) { }

  ngOnInit(): void {
    this.produtoService.ler().subscribe(produtos => {
      this.produtos = produtos
    })
  }

  comprar(): void {
    this.vendaService.criar(this.venda).subscribe(Response => {
      for (let [id, produto] of this.produtosSelecionados) {
        this.itemVenda.venda.id = Response.id
        this.itemVenda.valorUnitario = this.itemVenda.quantidade * this.produtosSelecionados.get(id).preco
        this.itemVenda.produto = produto
        this.itensVendaService.criar(this.itemVenda).subscribe(() => { })
        this.total += this.itemVenda.valorUnitario
      }
      this.venda.valorTotal = this.total
      this.vendaService.editar(this.venda).subscribe(() => { })
    })
  }

  adicionarCarrinho(produto: Produto) {
    this.produtosSelecionados.set(produto.id, produto)
  }

}

