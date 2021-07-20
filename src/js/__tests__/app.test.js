import Settings from '../app';

test('should create a correct settingsClass', () => {
  expect(new Settings({ theme: 'cool', difficulty: 'god' }).getSettings()).toEqual(new Map(
    ([['theme', ['dark', 'light', 'gray', 'cool']], ['music', ['trance', 'pop', 'rock', 'chillout', 'off']], ['difficulty', ['easy', 'normal', 'hard', 'nightmare', 'god']]]),
  ));
});
