import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItensVenda } from '../../itensVenda/itens-venda.model';
import { Venda } from '../venda.model';
import { VendaService } from '../venda.service';

@Component({
  selector: 'app-deletar-venda',
  templateUrl: './deletar-venda.component.html',
  styleUrls: ['./deletar-venda.component.css']
})
export class DeletarVendaComponent implements OnInit {

venda: Venda

  constructor(private vendaService: VendaService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.vendaService.lerPorId(id).subscribe(venda => {
      this.venda = venda
    })
  }

  deletar(): void {
    this.vendaService.deletar(this.venda.id).subscribe(() => {
      this.vendaService.mensagem('venda Deletada com sucesso!')
      this.router.navigate(['/vendas'])
    })
  }

  cancelar(): void {
    this.router.navigate(['/vendas'])
  }

}
