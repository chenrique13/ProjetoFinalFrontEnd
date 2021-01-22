import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from '../../produto/produto.model';
import { ProdutoService } from '../../produto/produto.service';
import { Faq } from '../Faq.model';
import { FaqService } from '../faq.service';

@Component({
  selector: 'app-criar-faq',
  templateUrl: './criar-faq.component.html',
  styleUrls: ['./criar-faq.component.css']
})
export class CriarFaqComponent implements OnInit {

  faq: Faq={
    data_hora:'',
    texto:'',
    produto:{
      id: null,
      imgUrl:'',
      nome:''
    }
  }

  produtos: Produto[]

  constructor(private faqService: FaqService, private produtoService: ProdutoService, private router: Router) { }

  ngOnInit(): void {
    this.produtoService.ler().subscribe(produtos => {
      this.produtos = produtos
    })
  }

  criar(): void {
    this.faqService.criar(this.faq).subscribe(() => {
      this.faqService.mensagem("Faq criado!")
      this.router.navigate(['/faqs'])
    })

  }

  cancelar(): void {
    this.router.navigate(['/faqs'])
  }

}
