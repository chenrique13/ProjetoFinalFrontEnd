import { Component, OnInit } from'@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.css']
})
export class MarcasComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  criarMarca(): void {
    this.router.navigate(['/marcas/criar'])
  }
}
