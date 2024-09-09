import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css'], standalone:true,imports:[NgFor]
})
export class TestimonialsComponent {
  portfolioService=inject(PortfolioService);
  testimonials:any=[]
  ngOnInit(){
    this.portfolioService.getTestimonials().subscribe(data=>{
      this.testimonials = data
    })
  }
}
