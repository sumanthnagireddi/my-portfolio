import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { InterviewSidebarComponent } from './interview-sidebar/interview-sidebar.component';
import { PortfolioService } from '../../services/portfolio.service';
import { InterviewQuestionsComponent } from "./interview-questions/interview-questions.component";

@Component({
  selector: 'app-interview',
  standalone: true,
  imports: [RouterOutlet, InterviewSidebarComponent, InterviewQuestionsComponent],
  templateUrl: './interview.component.html',
  styleUrl: './interview.component.css'
})
export class InterviewComponent {
  courses: any = []
  portfolioService=inject(PortfolioService);
  router=inject(Router)

  ngOnInit(){
    this.portfolioService.getInterviews().subscribe(data=>{
      console.log(data);
      
      this.courses=data;
      // this.router.navigate(['interview-questions-answers',this.courses[0].id])
    })
  }
}
