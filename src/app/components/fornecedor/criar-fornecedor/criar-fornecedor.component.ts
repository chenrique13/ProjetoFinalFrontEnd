import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fornecedor } from '../fornecedor.model';
import { FornecedorService } from '../fornecedor.service';

@Component({
  selector: 'app-criar-fornecedor',
  templateUrl: './criar-fornecedor.component.html',
  styleUrls: ['./criar-fornecedor.component.css']
})
export class CriarFornecedorComponent implements OnInit {

  fornecedor: Fornecedor = {
    nome: '',
    endereco: '',
    telefone: '',
    cnpj: '',
    email: ''
  }
  constructor(private fornecedorService: FornecedorService, private router: Router) { }

  ngOnInit(): void {
  }

  criar(): void {
    this.fornecedorService.criar(this.fornecedor).subscribe(() => {
      this.fornecedorService.mensagem("Fornecedor criado!")
      this.router.navigate(['/fornecedores'])
    })

  }

  cancelar(): void {
    this.router.navigate(['/fornecedores'])
  }
}
