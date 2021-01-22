import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Marca } from '../marca.model';
import { MarcaService } from '../marca.service';

@Component({
  selector: 'app-editar-marca',
  templateUrl: './editar-marca.component.html',
  styleUrls: ['./editar-marca.component.css']
})
export class EditarMarcaComponent implements OnInit {

  marca: Marca

  constructor(private marcaService: MarcaService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.marcaService.lerPorId(id).subscribe(marca => {
      this.marca = marca
    })
  }

  editar(): void {
    this.marcaService.editar(this.marca).subscribe(() => {
      this.marcaService.mensagem('Marca Atualizada com sucesso!')
      this.router.navigate(['/marcas'])
    })
  }

  cancelar(): void {
    this.router.navigate(['/marcas'])
  }
}
