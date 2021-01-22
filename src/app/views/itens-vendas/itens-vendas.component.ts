import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-itens-vendas',
  templateUrl: './itens-vendas.component.html',
  styleUrls: ['./itens-vendas.component.css']
})
export class ItensVendasComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  criarItensVenda(): void {
    this.router.navigate(['/itensvendas/criar'])
  }
}
