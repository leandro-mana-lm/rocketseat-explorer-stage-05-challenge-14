import * as actions from './actions.js';
import * as elements from './elements.js';
import * as sounds from './sounds.js';

Object.entries(elements.controls).forEach(([key, button]) => {
  button.addEventListener('click', () => {
    actions[key]();
    sounds.buttonPress.play();
  });
});

Object.entries(elements.sounds).forEach(([key, button]) => {
  button.addEventListener('click', ({ currentTarget }) => {
    if (currentTarget.classList.contains('selected')) {
      actions.updateSound([null, button]);
      return;
    }

    Object.entries(elements.sounds)
      .filter(([, element]) => element.classList.contains('selected'))
      .filter(([name]) => name !== key)
      .forEach(([, element]) => actions.updateSound([null, element]));

    actions.updateSound([key, button]);
  });
});
