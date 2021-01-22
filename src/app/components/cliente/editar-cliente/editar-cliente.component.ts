import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {

  cliente: Cliente

  constructor(private clienteService: ClienteService, private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.clienteService.lerPorId(id).subscribe(cliente => {
      this.cliente = cliente
    })
  }

  editar(): void {
    this.clienteService.editar(this.cliente).subscribe(() => {
      this.clienteService.mensagem('Cliente Atualizado com sucesso!')
      this.router.navigate(['/clientes'])
    })
  }

  cancelar(): void {
    this.router.navigate(['/clientes'])
  }

}
