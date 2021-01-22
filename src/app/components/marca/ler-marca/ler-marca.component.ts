import { Component, OnInit } from '@angular/core';
import { Marca } from '../marca.model';
import { MarcaService } from '../marca.service';

@Component({
  selector: 'app-ler-marca',
  templateUrl: './ler-marca.component.html',
  styleUrls: ['./ler-marca.component.css']
})

export class LerMarcaComponent implements OnInit {

  marcas: Marca[]
  displayedColumns = ['nome', 'descricao', 'acoes'];

  constructor(private marcaService: MarcaService) { }

  ngOnInit(): void {
    this.marcaService.ler().subscribe(marcas => {
      this.marcas = marcas
    })
  }

}
