import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../../cliente/cliente.model';
import { ClienteService } from '../../cliente/cliente.service';
import { FormaPagamento } from '../../formaPagamento/forma-pagamento.model';
import { FormaPagamentoService } from '../../formaPagamento/forma-pagamento.service';
import { ItensVenda } from '../../itensVenda/itens-venda.model';
import { Produto } from '../../produto/produto.model';
import { ProdutoService } from '../../produto/produto.service';
import { Venda } from '../venda.model';
import { VendaService } from '../venda.service';

@Component({
  selector: 'app-criar-venda',
  templateUrl: './criar-venda.component.html',
  styleUrls: ['./criar-venda.component.css']
})
export class CriarVendaComponent implements OnInit {

  venda: Venda = {
    dataHora: '',
    valorTotal: null,
    cliente: {
      id: null,
      nome: '',
      nomeSocial: '',
      apelido: '',
      dataNascimento: '',
      sexo: '',
      cpf: '',
      email: '',
      telefone:''
    },
    formaPagamento: {
      id: null,
      ativo: true,
      descricao: '',
      forma: ''
    }
  }
  clientes: Cliente[]
  formasPagamento: FormaPagamento[]
  itensVendas: ItensVenda[]
  produtos: Produto[]

  constructor(private vendaService: VendaService, private clienteService: ClienteService, private formaPagamentoService: FormaPagamentoService, private produtoService: ProdutoService, private router: Router) { }

  ngOnInit(): void {
    this.clienteService.ler().subscribe(clientes => {
      this.clientes = clientes
    })
    this.formaPagamentoService.ler().subscribe(formasPagamento => {
      this.formasPagamento = formasPagamento
    })
    this.produtoService.ler().subscribe(produtos => {
      this.produtos = produtos
    })
  }
  criar(): void {
    this.vendaService.criar(this.venda).subscribe(() => {
      this.vendaService.mensagem("Venda Realizada!")
      this.router.navigate(['/vendas'])
    })
  }

  cancelar(): void {
    this.router.navigate(['/vendas'])
  }
}
