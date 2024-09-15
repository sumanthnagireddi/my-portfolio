import { NgFor, NgIf } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { PortfolioService } from '../../../services/portfolio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interview-sidebar',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './interview-sidebar.component.html',
  styleUrl: './interview-sidebar.component.css',
})
export class InterviewSidebarComponent {
  questions: any = input('questions');
  constructor(
    private portfolioService: PortfolioService,
    private router: Router
  ) {}

  ngOnInit() {}
  navigateToQuestion(question: any) {
    this.router.navigate(['/interview-questions-answers', question]);
  }
}
