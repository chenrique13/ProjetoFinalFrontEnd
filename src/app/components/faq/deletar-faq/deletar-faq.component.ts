import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../../produto/produto.model';
import { ProdutoService } from '../../produto/produto.service';
import { Faq } from '../Faq.model';
import { FaqService } from '../faq.service';

@Component({
  selector: 'app-deletar-faq',
  templateUrl: './deletar-faq.component.html',
  styleUrls: ['./deletar-faq.component.css']
})
export class DeletarFaqComponent implements OnInit {

  faq:Faq
  produtos: Produto[]

  constructor(private faqService: FaqService,  private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.faqService.lerPorId(id).subscribe(faq => {
      this.faq = faq
    })
  }
  deletar(): void {
    this.faqService.deletar(this.faq.id).subscribe(() => {
      this.faqService.mensagem('Faq Deletado com sucesso!')
      this.router.navigate(['/faqs'])
    })
  }

  cancelar(): void {
    this.router.navigate(['/faqs'])
  }

}
