import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fornecedor } from '../fornecedor.model';
import { FornecedorService } from '../fornecedor.service';

@Component({
  selector: 'app-deletar-fornecedor',
  templateUrl: './deletar-fornecedor.component.html',
  styleUrls: ['./deletar-fornecedor.component.css']
})
export class DeletarFornecedorComponent implements OnInit {

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

    deletar(): void {
      this.fornecedorService.deletar(this.fornecedor.id).subscribe(() => {
        this.fornecedorService.mensagem('Fornecedor Deletado com sucesso!')
        this.router.navigate(['/fornecedores'])
      })
    }

    cancelar(): void {
      this.router.navigate(['/fornecedores'])
    }

}
