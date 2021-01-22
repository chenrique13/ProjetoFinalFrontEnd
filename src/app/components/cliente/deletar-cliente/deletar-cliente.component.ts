import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-deletar-cliente',
  templateUrl: './deletar-cliente.component.html',
  styleUrls: ['./deletar-cliente.component.css']
})
export class DeletarClienteComponent implements OnInit {

  cliente: Cliente

  constructor(private clienteService: ClienteService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.clienteService.lerPorId(id).subscribe(cliente => {
      this.cliente = cliente
    })
  }

  deletar(): void {
    this.clienteService.deletar(this.cliente.id).subscribe(() => {
      this.clienteService.mensagem('Cliente Deletado com sucesso!')
      this.router.navigate(['/clientes'])
    })
  }

  cancelar(): void {
    this.router.navigate(['/clientes'])
  }

}
