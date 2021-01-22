import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../../produto/produto.model';
import { ProdutoService } from '../../produto/produto.service';
import { Faq } from '../Faq.model';
import { FaqService } from '../faq.service';

@Component({
  selector: 'app-editar-faq',
  templateUrl: './editar-faq.component.html',
  styleUrls: ['./editar-faq.component.css']
})
export class EditarFaqComponent implements OnInit {

  faq:Faq
  produtos: Produto[]

  constructor(private faqService: FaqService, private produtoService: ProdutoService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.faqService.lerPorId(id).subscribe(faq => {
      this.faq = faq
    })
    this.produtoService.ler().subscribe(produto => {
      this.produtos = produto
    })
  }
  editar(): void {
    this.faqService.editar(this.faq).subscribe(() => {
      this.faqService.mensagem('Faq Atualizado com sucesso!')
      this.router.navigate(['/faqs'])
    })
  }

  cancelar(): void {
    this.router.navigate(['/faqs'])
  }
}
