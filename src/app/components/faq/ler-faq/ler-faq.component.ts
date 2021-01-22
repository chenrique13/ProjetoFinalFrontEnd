import { Component, OnInit } from '@angular/core';
import { Faq } from '../Faq.model';
import { FaqService } from '../faq.service';

@Component({
  selector: 'app-ler-faq',
  templateUrl: './ler-faq.component.html',
  styleUrls: ['./ler-faq.component.css']
})
export class LerFaqComponent implements OnInit {

  faqs: Faq[]

  constructor(private faqService: FaqService) { }

  ngOnInit(): void {
    this.faqService.ler().subscribe(faqs => {
      this.faqs = faqs
    })
  }

}
