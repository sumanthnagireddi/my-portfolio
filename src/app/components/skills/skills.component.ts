import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'], standalone:true,imports:[NgFor]
})
export class SkillsComponent {
  
  portfolioService=inject(PortfolioService);
  skills:any=[]
  ngOnInit(){
    // this.portfolioService.addExperiences()
    this.portfolioService.getSkills().subscribe(data=>{
      console.log(data)
      this.skills = data
    })
  }
}
