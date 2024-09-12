import { Component } from '@angular/core';
import { TestimonialsComponent } from "../../components/testimonials/testimonials.component";
import { ContactComponent } from "../../components/contact/contact.component";
import { ExperienceComponent } from "../../components/experience/experience.component";
import { SkillsComponent } from "../../components/skills/skills.component";
import { AboutComponent } from "../../components/about/about.component";
import { HeroComponent } from "../../components/hero/hero.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TestimonialsComponent, ContactComponent, ExperienceComponent, SkillsComponent, AboutComponent, HeroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
