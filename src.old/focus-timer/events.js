import * as actions from './actions.js';
import * as elements from './elements.js';
import * as state from './state.js';

elements.controls.buttons.play.addEventListener('click', () => {
  console.log('play');

  state.isRunning = true;
});

// elements.controls.buttons.stop.addEventListener('click', () => {
//   console.log('stop');
// });

// elements.controls.buttons.plus.addEventListener('click', () => {
//   console.log('plus');
// });

// elements.controls.buttons.minus.addEventListener('click', () => {
//   console.log('minus');
// });

elements.sounds.buttons.forest.addEventListener('click', () => {
  actions.setSound('forest');
});

elements.sounds.buttons.rain.addEventListener('click', () => {
  actions.setSound('rain');
});

elements.sounds.buttons.coffeeShop.addEventListener('click', () => {
  actions.setSound('coffeeShop');
});

elements.sounds.buttons.fireplace.addEventListener('click', () => {
  actions.setSound('fireplace');
});
