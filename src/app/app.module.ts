import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule} from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './views/home/home.component';
import { ProdutosComponent } from './views/produtos/produtos.component';
import { CriarProdutoComponent } from './components/produto/criar-produto/criar-produto.component';
import { LerProdutoComponent } from './components/produto/ler-produto/ler-produto.component';
import { CategoriasComponent } from './views/categorias/categorias.component';
import { CriarCategoriaComponent } from './components/categoria/criar-categoria/criar-categoria.component';
import { LerCategoriaComponent } from './components/categoria/ler-categoria/ler-categoria.component';
import { MarcasComponent } from './views/marcas/marcas.component';
import { CriarMarcaComponent } from './components/marca/criar-marca/criar-marca.component';
import { LerMarcaComponent } from './components/marca/ler-marca/ler-marca.component';
import { FormaPagamentoComponent } from './views/forma-pagamento/forma-pagamento.component';
import { CriarFormaPagamentoComponent } from './components/formaPagamento/criar-forma-pagamento/criar-forma-pagamento.component';
import { LerFormaPagamentoComponent } from './components/formaPagamento/ler-forma-pagamento/ler-forma-pagamento.component';
import { EditarCategoriaComponent } from './components/categoria/editar-categoria/editar-categoria.component';
import { EditarProdutoComponent } from './components/produto/editar-produto/editar-produto.component';
import { EditarFormaPagamentoComponent } from './components/formaPagamento/editar-forma-pagamento/editar-forma-pagamento.component';
import { EditarMarcaComponent } from './components/marca/editar-marca/editar-marca.component';
import { CriarFornecedorComponent } from './components/fornecedor/criar-fornecedor/criar-fornecedor.component';
import { LerFornecedorComponent } from './components/fornecedor/ler-fornecedor/ler-fornecedor.component';
import { EditarFornecedorComponent } from './components/fornecedor/editar-fornecedor/editar-fornecedor.component';
import { FornecedoresComponent } from './views/fornecedores/fornecedores.component';
import { ClientesComponent } from './views/clientes/clientes.component';
import { CriarClienteComponent } from './components/cliente/criar-cliente/criar-cliente.component';
import { LerClienteComponent } from './components/cliente/ler-cliente/ler-cliente.component';
import { EditarClienteComponent } from './components/cliente/editar-cliente/editar-cliente.component';
import { FaqsComponent } from './views/faqs/faqs.component';
import { CriarFaqComponent } from './components/faq/criar-faq/criar-faq.component';
import { LerFaqComponent } from './components/faq/ler-faq/ler-faq.component';
import { EditarFaqComponent } from './components/faq/editar-faq/editar-faq.component';
import { VendasComponent } from './views/vendas/vendas.component';
import { CriarVendaComponent } from './components/venda/criar-venda/criar-venda.component';
import { LerVendaComponent } from './components/venda/ler-venda/ler-venda.component';
import { ItensVendasComponent } from './views/itens-vendas/itens-vendas.component';
import { CriarItensVendaComponent } from './components/itensVenda/criar-itens-venda/criar-itens-venda.component';
import { LerItensVendaComponent } from './components/itensVenda/ler-itens-venda/ler-itens-venda.component';
import { EditarItensVendaComponent } from './components/itensVenda/editar-itens-venda/editar-itens-venda.component';
import { DeletarCategoriaComponent } from './components/categoria/deletar-categoria/deletar-categoria.component';
import { DeletarClienteComponent } from './components/cliente/deletar-cliente/deletar-cliente.component';
import { DeletarFaqComponent } from './components/faq/deletar-faq/deletar-faq.component';
import { DeletarFormaPagamentoComponent } from './components/formaPagamento/deletar-forma-pagamento/deletar-forma-pagamento.component';
import { DeletarFornecedorComponent } from './components/fornecedor/deletar-fornecedor/deletar-fornecedor.component';
import { DeletarMarcaComponent } from './components/marca/deletar-marca/deletar-marca.component';
import { DeletarProdutoComponent } from './components/produto/deletar-produto/deletar-produto.component';
import { DeletarVendaComponent } from './components/venda/deletar-venda/deletar-venda.component';
import { DeletarItensVendaComponent } from './components/itensVenda/deletar-itens-venda/deletar-itens-venda.component';

import {MatDatepickerModule} from '@angular/material/datepicker';
import { LerUmaVendaComponent } from './components/venda/ler-uma-venda/ler-uma-venda.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProdutosComponent,
    CriarProdutoComponent,
    LerProdutoComponent,
    CategoriasComponent,
    CriarCategoriaComponent,
    LerCategoriaComponent,
    MarcasComponent,
    CriarMarcaComponent,
    LerMarcaComponent,
    FormaPagamentoComponent,
    CriarFormaPagamentoComponent,
    LerFormaPagamentoComponent,
    EditarCategoriaComponent,
    EditarProdutoComponent,
    EditarFormaPagamentoComponent,
    EditarMarcaComponent,
    CriarFornecedorComponent,
    LerFornecedorComponent,
    EditarFornecedorComponent,
    FornecedoresComponent,
    ClientesComponent,
    CriarClienteComponent,
    LerClienteComponent,
    EditarClienteComponent,
    FaqsComponent,
    CriarFaqComponent,
    LerFaqComponent,
    EditarFaqComponent,
    VendasComponent,
    CriarVendaComponent,
    LerVendaComponent,
    ItensVendasComponent,
    CriarItensVendaComponent,
    LerItensVendaComponent,
    EditarItensVendaComponent,
    DeletarCategoriaComponent,
    DeletarClienteComponent,
    DeletarFaqComponent,
    DeletarFormaPagamentoComponent,
    DeletarFornecedorComponent,
    DeletarMarcaComponent,
    DeletarProdutoComponent,
    DeletarVendaComponent,
    DeletarItensVendaComponent,
    LerUmaVendaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    AppRoutingModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatGridListModule,
    MatTableModule,
    MatDatepickerModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
