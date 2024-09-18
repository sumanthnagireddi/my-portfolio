import { Component, effect, inject, input } from '@angular/core';
import { PortfolioService } from '../../../services/portfolio.service';
import { NgFor } from '@angular/common';
import { MarkdownModule, MarkdownService } from 'ngx-markdown';

@Component({
  selector: 'app-interview-questions',
  standalone: true,
  imports: [NgFor,MarkdownModule],
  templateUrl: './interview-questions.component.html',
  styleUrl: './interview-questions.component.css',
  providers:[MarkdownService]
})
export class InterviewQuestionsComponent {
  course = input();

  questions: any = [];
  portfolioService = inject(PortfolioService);
  constructor() {
    effect(
      () =>
        this.portfolioService.getInterviewQuestionswithId(this.course()).subscribe((data: any) => {
          if (data && data.questions) {
            this.questions = data
          } else {
            this.questions = [];
          }
        })
    )
  }
  ngOnInit() {
   
  }
}