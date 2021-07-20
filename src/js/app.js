export default class Settings {
  constructor(userSettings) {
    this.default = new Map([['theme', ['dark', 'light', 'gray']], ['music', ['trance', 'pop', 'rock', 'chillout', 'off']], ['difficulty', ['easy', 'normal', 'hard', 'nightmare']]]);
    this.custom = new Map(Object.entries(userSettings));
  }

  getSettings() {
    const jointSettings = new Map();
    for (const element of this.default.keys()) {
      if (this.custom.has(element)) {
        jointSettings.set(element, this.default.get(element).concat(this.custom.get(element)));
      } else {
        jointSettings.set(element, this.default.get(element));
      }
    }
    return jointSettings;
  }
}
