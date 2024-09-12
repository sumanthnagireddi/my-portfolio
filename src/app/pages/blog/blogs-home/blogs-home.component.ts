import { Component } from '@angular/core';
import { BlogCardComponent } from '../../../components/blog-card/blog-card.component';
import { BLOGS } from './consts';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-blogs-home',
  standalone: true,
  imports: [BlogCardComponent,NgFor,NgIf],
  templateUrl: './blogs-home.component.html',
  styleUrl: './blogs-home.component.css'
})
export class BlogsHomeComponent {
  blogs:any=BLOGS
}
