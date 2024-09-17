import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'], standalone:true
})
export class HeroComponent {
  openLink(id:any){
    
  }
  currentExperience:any
  ngOnInit(){
    this.currentExperience=this.calculateExperience()
  }
  calculateExperience(): number {
    const startDate = new Date('2021-11-22');
    const endDate = new Date();

    const millisecondsDifference = endDate.getTime() - startDate.getTime();
    const daysDifference = Math.floor(millisecondsDifference / (1000 * 60 * 60 * 24));
    const yearsExperience = Math.floor(daysDifference / 365);
    const monthsExperience = Math.floor((daysDifference % 365) / 30);

    const totalExperience= yearsExperience + (monthsExperience / 12);
    return parseFloat(totalExperience.toFixed(2))
  }
}
