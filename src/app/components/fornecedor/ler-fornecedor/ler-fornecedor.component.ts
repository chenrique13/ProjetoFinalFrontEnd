import { Component, OnInit } from '@angular/core';
import { Fornecedor } from '../fornecedor.model';
import { FornecedorService } from '../fornecedor.service';

@Component({
  selector: 'app-ler-fornecedor',
  templateUrl: './ler-fornecedor.component.html',
  styleUrls: ['./ler-fornecedor.component.css']
})
export class LerFornecedorComponent implements OnInit {

  fornecedores: Fornecedor[]
  displayedColumns = ['nome', 'endereco', 'telefone', 'cnpj', 'email','acoes'];

  constructor(private fornecedorService: FornecedorService) { }

  ngOnInit(): void {
    this.fornecedorService.ler().subscribe(fornecedores => {
      this.fornecedores = fornecedores
    })
  }

}
