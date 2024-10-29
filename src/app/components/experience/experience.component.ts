import { Component, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'], standalone:true,imports:[NgFor]
})
export class ExperienceComponent {
  experienceService=inject(PortfolioService);
  experiences:any=[]
  ngOnInit(){
    this.experienceService.getExperiences().subscribe(data=>{
      this.experiences = this.sortExperiencesByOrder(data)
    })
  }
  sortExperiencesByOrder(data:any) {
    return data.sort((a:any, b:any) => b.order - a.order);
  }
}
