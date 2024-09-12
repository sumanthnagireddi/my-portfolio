import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { WordsReducerPipe } from '../../pipes/words-reducer.pipe';

@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [DatePipe,WordsReducerPipe],
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.css'
})
export class BlogCardComponent {
@Input() data:any
}
