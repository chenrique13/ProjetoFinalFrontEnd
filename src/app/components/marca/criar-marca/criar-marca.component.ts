import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Marca } from '../marca.model';
import { MarcaService } from '../marca.service';

@Component({
  selector: 'app-criar-marca',
  templateUrl: './criar-marca.component.html',
  styleUrls: ['./criar-marca.component.css']
})
export class CriarMarcaComponent implements OnInit {

  marca: Marca = {
    nome: '',
    descricao: ''
  }

  constructor(private marcaService: MarcaService, private router: Router) { }

  ngOnInit(): void {
  }

  criar(): void {
    this.marcaService.criar(this.marca).subscribe(() => {
      this.marcaService.mensagem("Marca criada!")
      this.router.navigate(['/marcas'])
    })

  }

  cancelar(): void {
    this.router.navigate(['/marcas'])
  }

}
