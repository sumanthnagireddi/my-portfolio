import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestimonialsComponent } from "./components/testimonials/testimonials.component";
import { ContactComponent } from "./components/contact/contact.component";
import { ExperienceComponent } from "./components/experience/experience.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { AboutComponent } from "./components/about/about.component";
import { HeroComponent } from "./components/hero/hero.component";
import { HeaderComponent } from "./components/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestimonialsComponent, ContactComponent, ExperienceComponent, SkillsComponent, AboutComponent, HeroComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-portfolio';
  currentYear:any;
  ngOnInit(){
    let date=new Date();
    this.currentYear=date.getFullYear();
  }
  fileContent: string = '';

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.fileContent = e.target.result;
        const jsonData = this.parseQuestionsToJson(this.fileContent);
        console.log(jsonData); // Output the JSON
      };
      reader.readAsText(file);
    }
  }

  parseQuestionsToJson(html: any): any[] {
    const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  const listItems = doc.querySelectorAll('ol > li');
  const result :any= [];

  listItems.forEach((li:any) => {
    const question = li.querySelector('h3').textContent.trim();
    const answerParts = li.querySelectorAll('p, pre');
    
    let answer = '';
    answerParts.forEach((part:any) => {
      answer += part.textContent.trim() + '\n';
    });

    result.push({
      question: question,
      answer: answer.trim()
    });
  });

  return result;
  }
}
