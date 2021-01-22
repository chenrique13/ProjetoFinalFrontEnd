import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormaPagamento } from '../forma-pagamento.model';
import { FormaPagamentoService } from '../forma-pagamento.service';

@Component({
  selector: 'app-deletar-forma-pagamento',
  templateUrl: './deletar-forma-pagamento.component.html',
  styleUrls: ['./deletar-forma-pagamento.component.css']
})
export class DeletarFormaPagamentoComponent implements OnInit {

  formaPagamento : FormaPagamento

  constructor(private formaPagamentoService: FormaPagamentoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.formaPagamentoService.lerPorId(id).subscribe(formaPagamento => {
      this.formaPagamento = formaPagamento
    })
  }

  deletar(): void {
    this.formaPagamentoService.deletar(this.formaPagamento.id).subscribe(() => {
      this.formaPagamentoService.mensagem('Forma de Pagamento Deletada com sucesso!')
      this.router.navigate(['/formaspagamento'])
    })
  }

  cancelar(): void {
    this.router.navigate(['/formaspagamento'])
  }

}

