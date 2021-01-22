import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fornecedor } from '../fornecedor.model';
import { FornecedorService } from '../fornecedor.service';

@Component({
  selector: 'app-editar-fornecedor',
  templateUrl: './editar-fornecedor.component.html',
  styleUrls: ['./editar-fornecedor.component.css']
})
export class EditarFornecedorComponent implements OnInit {

  fornecedor: Fornecedor

  constructor(private fornecedorService: FornecedorService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.fornecedorService.lerPorId(id).subscribe(fornecedor => {
      this.fornecedor = fornecedor
    })
  }

  editar(): void {
    this.fornecedorService.editar(this.fornecedor).subscribe(() => {
      this.fornecedorService.mensagem('Fornecedor Atualizado com sucesso!')
      this.router.navigate(['/fornecedores'])
    })
  }

  cancelar(): void {
    this.router.navigate(['/fornecedores'])
  }

}
