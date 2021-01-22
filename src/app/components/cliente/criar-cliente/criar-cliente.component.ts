import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-criar-cliente',
  templateUrl: './criar-cliente.component.html',
  styleUrls: ['./criar-cliente.component.css']
})

export class CriarClienteComponent implements OnInit {

  cliente: Cliente = {
    nome: '',
    cpf:'',
    email:'',
    dataNascimento:'',
    sexo:'',
    nomeSocial:'',
    apelido:'',
    telefone:''
  }

  constructor(private clienteService: ClienteService, private router: Router) { }

  ngOnInit(): void {
  }

  criar(): void {
    this.clienteService.criar(this.cliente).subscribe(() => {
      this.clienteService.mensagem("Cliente criado!")
      this.router.navigate(['/clientes'])
    })

  }

  cancelar(): void {
    this.router.navigate(['/clientes'])
  }
}
