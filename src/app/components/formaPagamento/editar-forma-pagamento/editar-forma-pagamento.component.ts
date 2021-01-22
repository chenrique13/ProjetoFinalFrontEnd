import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormaPagamentoService } from '../forma-pagamento.service';
import { FormaPagamento } from '../forma-pagamento.model';

@Component({
  selector: 'app-editar-forma-pagamento',
  templateUrl: './editar-forma-pagamento.component.html',
  styleUrls: ['./editar-forma-pagamento.component.css']
})
export class EditarFormaPagamentoComponent implements OnInit {

  formaPagamento: FormaPagamento

  constructor(private formaPagamentoService: FormaPagamentoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.formaPagamentoService.lerPorId(id).subscribe(formaPagamento => {
      this.formaPagamento = formaPagamento
    })
  }

  editar(): void {
    this.formaPagamentoService.editar(this.formaPagamento).subscribe(() => {
      this.formaPagamentoService.mensagem('Forma de Pagamento Atualizada com sucesso!')
      this.router.navigate(["/formaspagamento"])
    })
  }

  cancelar(): void {
    this.router.navigate(['/formaspagamento'])
  }
}
