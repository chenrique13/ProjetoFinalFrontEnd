import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormaPagamentoService } from '../forma-pagamento.service';
import { FormaPagamento } from '../forma-pagamento.model';

@Component({
  selector: 'app-criar-forma-pagamento',
  templateUrl: './criar-forma-pagamento.component.html',
  styleUrls: ['./criar-forma-pagamento.component.css']
})
export class CriarFormaPagamentoComponent implements OnInit {

  formaPagamento: FormaPagamento = {
    forma: '',
    descricao: '',
    ativo: null
  }

  constructor(private formaPagamentoService: FormaPagamentoService, private router: Router) { }

  ngOnInit(): void {
  }
  criar(): void {
    this.formaPagamentoService.criar(this.formaPagamento).subscribe(() => {
      this.formaPagamentoService.mensagem("FormaPagamento criada!")
      this.router.navigate(['/formaspagamento'])
    })

  }

  cancelar(): void {
    this.router.navigate(['/formaspagamento'])
  }
}
