import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Marca } from '../marca.model';
import { MarcaService } from '../marca.service';

@Component({
  selector: 'app-deletar-marca',
  templateUrl: './deletar-marca.component.html',
  styleUrls: ['./deletar-marca.component.css']
})
export class DeletarMarcaComponent implements OnInit {

  marca : Marca

  constructor(private marcaService: MarcaService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.marcaService.lerPorId(id).subscribe(marca => {
      this.marca = marca
    })
  }

  deletar(): void {
    this.marcaService.deletar(this.marca.id).subscribe(() => {
      this.marcaService.mensagem('Marca Deletada com sucesso!')
      this.router.navigate(['/marcas'])
    })
  }

  cancelar(): void {
    this.router.navigate(['/marcas'])
  }

}
