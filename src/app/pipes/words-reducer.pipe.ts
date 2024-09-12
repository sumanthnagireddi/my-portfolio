import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordsReducer',
  standalone: true
})
export class WordsReducerPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return `${value?.slice(0,90)}...`
  }

}
