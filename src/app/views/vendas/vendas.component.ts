import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.css']
})
export class VendasComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  criarVenda(): void {
    this.router.navigate(['/vendas/criar'])
  }
}
