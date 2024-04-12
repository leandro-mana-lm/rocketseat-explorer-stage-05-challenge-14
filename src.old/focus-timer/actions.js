import * as elements from './elements.js';
import * as sounds from './sounds.js';

import state from './state.js';

const resetSoundState = () => {
  state.sound.current = null;
  state.sound.last = null;
};

const disableSelectedSound = () => {
  if (!state.sound.last) return;

  const button = elements.sounds.buttons[state.sound.last];

  if (button.classList.contains('selected'))
    button.classList.remove('selected');
};

const markSoundAsSelected = () => {
  const button = elements.sounds.buttons[state.sound.current];

  button.classList.add('selected');
};

const stopSound = () => {
  if (!state.sound.last) return;

  const sound = sounds[state.sound.last];

  sound.pause();
};

const playSound = () => {
  const sound = sounds[state.sound.current];

  sound.play();
};

export const setSound = (name) => {
  if (state.sound.current === name) {
    state.sound.last = name;

    disableSelectedSound();
    stopSound();
    resetSoundState();

    return;
  }

  state.sound.last = state.sound.current;
  state.sound.current = name;

  disableSelectedSound();
  markSoundAsSelected();

  if (state.isRunning) {
    stopSound();
    playSound();
  }
};
