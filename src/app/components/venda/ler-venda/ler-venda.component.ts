import { Component, OnInit, Inject} from '@angular/core';
import { Venda } from '../venda.model';
import { VendaService } from '../venda.service';


@Component({
  selector: 'app-ler-venda',
  templateUrl: './ler-venda.component.html',
  styleUrls: ['./ler-venda.component.css']
})
export class LerVendaComponent implements OnInit {

  vendas: Venda[]

  constructor(private vendaService: VendaService) { }

  ngOnInit(): void {
    this.vendaService.ler().subscribe(vendas => {
      this.vendas = vendas
    })
  }



}
