const color = require('./cjs');

class Color {
  constructor() {
    Object.keys(color).forEach((key) => {
      this[key] = color[key];
    });

    return this;
  }

  static getColorNames() {
    return [
      'red',
      'pink',
      'purple',
      'deepPurple',
      'indigo',
      'blue',
      'lightBlue',
      'cyan',
      'teal',
      'green',
      'lightGreen',
      'lime',
      'yellow',
      'amber',
      'orange',
      'deepOrange',
      'brown',
      'gray',
      'blueGray',
    ];
  }

  static getWeightClass() {
    return [
      '50',
      '100',
      '200',
      '300',
      '400',
      '500',
      '600',
      '700',
      '800',
      '900',
      'A100',
      'A200',
      'A400',
      'A700',
    ];
  }

  getColorSeries(weightClass) {
    if (typeof weightClass === 'number') {
      weightClass = `${weightClass}`;
    }
    if (Color.getWeightClass().includes(weightClass)) {
      let result = {};
      Color.getColorNames().forEach((colorKey) => {
        result[colorKey] = color[colorKey][weightClass] || '';
      });
      return result;
    }
    return null;
  }
}

const colour = new Color();

module.exports = colour;