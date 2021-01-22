import { Component, OnInit } from '@angular/core';
import { FormaPagamentoService } from '../forma-pagamento.service';
import { FormaPagamento } from '../forma-pagamento.model';

@Component({
  selector: 'app-ler-forma-pagamento',
  templateUrl: './ler-forma-pagamento.component.html',
  styleUrls: ['./ler-forma-pagamento.component.css']
})

export class LerFormaPagamentoComponent implements OnInit {

  formasPagamento: FormaPagamento[]
  displayedColumns = ['forma', 'descricao', 'ativo', 'acoes'];

  constructor(private formaPagamentoService: FormaPagamentoService) { }

  ngOnInit(): void {
    this.formaPagamentoService.ler().subscribe(formaPagamento => {
      this.formasPagamento = formaPagamento
    })
  }

}
