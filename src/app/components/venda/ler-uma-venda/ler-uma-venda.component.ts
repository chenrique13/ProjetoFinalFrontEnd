import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Venda } from '../venda.model';
import { VendaService } from '../venda.service';

@Component({
  selector: 'app-ler-uma-venda',
  templateUrl: './ler-uma-venda.component.html',
  styleUrls: ['./ler-uma-venda.component.css']
})
export class LerUmaVendaComponent implements OnInit {

  venda: Venda

  constructor(private vendaService: VendaService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.vendaService.lerPorId(id).subscribe(venda => {
      this.venda = venda
    })
  }
  voltar(): void {
    this.router.navigate(['/vendas'])
  }
}
