import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  standalone: true,
})
export class HeroComponent {
  openLink(id: any) {}
  currentExperience: any;
  ngOnInit() {
    this.currentExperience = this.calculateExperience();
  }
  calculateExperience(): number {
    const startDate = new Date('2021-11-22');
    const endDate = new Date();

    // Get the difference in years, months, and days
    let yearsExperience = endDate.getFullYear() - startDate.getFullYear();
    let monthsExperience = endDate.getMonth() - startDate.getMonth();
    let daysExperience = endDate.getDate() - startDate.getDate();

    // Adjust for negative values
    if (daysExperience < 0) {
      monthsExperience--;
      // Calculate days in the previous month
      const previousMonth = new Date(
        endDate.getFullYear(),
        endDate.getMonth(),
        0
      );
      daysExperience += previousMonth.getDate(); // Get the last date of the previous month
    }

    if (monthsExperience < 0) {
      yearsExperience--;
      monthsExperience += 12;
    }

    // Calculate total experience in years
    const totalExperience =
      yearsExperience + monthsExperience / 12 + daysExperience / 365;
    return parseFloat(totalExperience.toFixed(2));
  }
}
