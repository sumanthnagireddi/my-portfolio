import { WordsReducerPipe } from './words-reducer.pipe';

describe('WordsReducerPipe', () => {
  it('create an instance', () => {
    const pipe = new WordsReducerPipe();
    expect(pipe).toBeTruthy();
  });
});
