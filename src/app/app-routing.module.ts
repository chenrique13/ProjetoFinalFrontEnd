import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProdutosComponent } from './views/produtos/produtos.component';
import { CriarProdutoComponent } from './components/produto/criar-produto/criar-produto.component';
import { EditarProdutoComponent } from './components/produto/editar-produto/editar-produto.component';
import { CategoriasComponent } from './views/categorias/categorias.component';
import { CriarCategoriaComponent } from './components/categoria/criar-categoria/criar-categoria.component';
import { EditarCategoriaComponent } from './components/categoria/editar-categoria/editar-categoria.component';
import { MarcasComponent } from './views/marcas/marcas.component';
import { CriarMarcaComponent } from './components/marca/criar-marca/criar-marca.component';
import { EditarMarcaComponent } from './components/marca/editar-marca/editar-marca.component';
import { FormaPagamentoComponent } from './views/forma-pagamento/forma-pagamento.component';
import { CriarFormaPagamentoComponent } from './components/formaPagamento/criar-forma-pagamento/criar-forma-pagamento.component';
import { EditarFormaPagamentoComponent } from './components/formaPagamento/editar-forma-pagamento/editar-forma-pagamento.component';
import { FornecedoresComponent } from './views/fornecedores/fornecedores.component';
import { CriarFornecedorComponent } from './components/fornecedor/criar-fornecedor/criar-fornecedor.component';
import { EditarFornecedorComponent } from './components/fornecedor/editar-fornecedor/editar-fornecedor.component';
import { EditarClienteComponent } from './components/cliente/editar-cliente/editar-cliente.component';
import { CriarClienteComponent } from './components/cliente/criar-cliente/criar-cliente.component';
import { ClientesComponent } from './views/clientes/clientes.component';
import { FaqsComponent } from './views/faqs/faqs.component';
import { CriarFaqComponent } from './components/faq/criar-faq/criar-faq.component';
import { EditarFaqComponent } from './components/faq/editar-faq/editar-faq.component';
import { VendasComponent } from './views/vendas/vendas.component';
import { CriarVendaComponent } from './components/venda/criar-venda/criar-venda.component';
import { ItensVendasComponent } from './views/itens-vendas/itens-vendas.component';
import { CriarItensVendaComponent } from './components/itensVenda/criar-itens-venda/criar-itens-venda.component';
import { EditarItensVendaComponent } from './components/itensVenda/editar-itens-venda/editar-itens-venda.component';
import { DeletarCategoriaComponent } from './components/categoria/deletar-categoria/deletar-categoria.component';
import { DeletarClienteComponent } from './components/cliente/deletar-cliente/deletar-cliente.component';
import { DeletarFaqComponent } from './components/faq/deletar-faq/deletar-faq.component';
import { DeletarFormaPagamentoComponent } from './components/formaPagamento/deletar-forma-pagamento/deletar-forma-pagamento.component';
import { DeletarFornecedorComponent } from './components/fornecedor/deletar-fornecedor/deletar-fornecedor.component';
import { DeletarMarcaComponent } from './components/marca/deletar-marca/deletar-marca.component';
import { DeletarProdutoComponent } from './components/produto/deletar-produto/deletar-produto.component';
import { DeletarItensVendaComponent } from './components/itensVenda/deletar-itens-venda/deletar-itens-venda.component';
import { DeletarVendaComponent } from './components/venda/deletar-venda/deletar-venda.component';
import { LerUmaVendaComponent } from './components/venda/ler-uma-venda/ler-uma-venda.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "produtos",
    component: ProdutosComponent
  }, {
    path: "produtos/criar",
    component: CriarProdutoComponent
  },
  {
    path: "produtos/editar/:id",
    component: EditarProdutoComponent
  },
  {
    path: "produtos/deletar/:id",
    component: DeletarProdutoComponent
  },
  {
    path: "categorias",
    component: CategoriasComponent
  },
  {
    path: "categorias/criar",
    component: CriarCategoriaComponent
  },
  {
    path: "categorias/editar/:id",
    component: EditarCategoriaComponent
  },
  {
    path: "categorias/deletar/:id",
    component: DeletarCategoriaComponent
  },
  {
    path: "marcas",
    component: MarcasComponent
  },
  {
    path: "marcas/criar",
    component: CriarMarcaComponent
  },
  {
    path: "marcas/editar/:id",
    component: EditarMarcaComponent
  },
  {
    path: "marcas/deletar/:id",
    component:DeletarMarcaComponent
  },
  {
    path: "formaspagamento",
    component: FormaPagamentoComponent
  },
  {
    path: "formaspagamento/criar",
    component: CriarFormaPagamentoComponent
  },
  {
    path: "formaspagamento/editar/:id",
    component: EditarFormaPagamentoComponent
  },
  {
    path: "formaspagamento/deletar/:id",
    component: DeletarFormaPagamentoComponent
  },
  {
    path: "fornecedores",
    component: FornecedoresComponent
  },
  {
    path: "fornecedores/criar",
    component: CriarFornecedorComponent
  },
  {
    path: "fornecedores/editar/:id",
    component: EditarFornecedorComponent
  },
  {
    path: "fornecedores/deletar/:id",
    component: DeletarFornecedorComponent
  },
  {
    path: "clientes",
    component: ClientesComponent
  },
  {
    path: "clientes/criar",
    component: CriarClienteComponent
  },
  {
    path: "clientes/editar/:id",
    component: EditarClienteComponent
  },
  {
    path: "clientes/deletar/:id",
    component: DeletarClienteComponent
  },
  {
    path: "faqs",
    component: FaqsComponent
  },
  {
    path: "faqs/criar",
    component: CriarFaqComponent
  },
  {
    path: "faqs/editar/:id",
    component: EditarFaqComponent
  },
  {
    path: "faqs/deletar/:id",
    component: DeletarFaqComponent
  },
  {
    path: "vendas",
    component: VendasComponent
  },
  {
    path: "vendas/criar",
    component: CriarVendaComponent
  },
  {
    path: "vendas/deletar/:id",
    component: DeletarVendaComponent
  },
  {
    path: "vendas/visualizar/:id",
    component: LerUmaVendaComponent
  },
  {
    path: "itensvendas",
    component: ItensVendasComponent
  },
  {
    path: "itensvendas/criar",
    component: CriarItensVendaComponent
  },
  {
    path: "itensvendas/editar/:id",
    component: EditarItensVendaComponent
  },
  {
    path: "itensvendas/deletar/:id",
    component: DeletarItensVendaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
