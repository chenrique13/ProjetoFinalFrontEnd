import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forma-pagamento',
  templateUrl: './forma-pagamento.component.html',
  styleUrls: ['./forma-pagamento.component.css']
})
export class FormaPagamentoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  criarFormaPagamento(): void {
    this.router.navigate(['/formaspagamento/criar'])
  }

}
