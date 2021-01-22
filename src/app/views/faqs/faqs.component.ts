import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  criarFaq(): void {
    this.router.navigate(['/faqs/criar'])
  }
}
