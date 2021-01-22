import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-ler-cliente',
  templateUrl: './ler-cliente.component.html',
  styleUrls: ['./ler-cliente.component.css']
})
export class LerClienteComponent implements OnInit {

clientes: Cliente[]
displayedColumns = ['nome','cpf', 'email', 'dataNascimento', 'sexo', 'nomeSocial', 'apelido', 'telefone', 'acoes'];

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteService.ler().subscribe(clientes => {
      this.clientes = clientes
    })
  }

}
