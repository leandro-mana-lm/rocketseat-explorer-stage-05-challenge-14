import * as elements from './elements.js';
import * as sounds from './sounds.js';

import state from './state.js';

const deactivateSound = () => {
  if (state.sound && !state.sound.paused) state.sound.pause();
};

export const updateSound = ([key, button]) => {
  const isSelected = button.classList.toggle('selected');

  deactivateSound();

  state.sound = isSelected ? sounds[key] : null;
};

const updateControls = () => {
  state.running = elements.controls.play.classList.toggle('hide');

  elements.controls.pause.classList.toggle('hide');
};

const updateMinutes = (minutes) => {
  elements.time.minutes.textContent = minutes.toString().padStart(2, '0');
};

const updateSeconds = (seconds) => {
  elements.time.seconds.textContent = seconds.toString().padStart(2, '0');
};

export const updateDisplay = ({ minutes, seconds }) => {
  updateMinutes(minutes);
  updateSeconds(seconds);
};

const countdown = () => {
  clearTimeout(state.countdownId);

  if (!state.running) {
    deactivateSound();
    return;
  }

  if (state.sound && state.sound.paused) state.sound.play();

  let minutes = Number(elements.time.minutes.textContent);
  let seconds = Number(elements.time.seconds.textContent);

  if (seconds === 0) {
    if (minutes === 0) {
      sounds.timer.play();

      updateControls();
      updateDisplay(state);
      deactivateSound();

      return;
    }

    seconds = 60;
    minutes--;
  }

  seconds--;

  updateDisplay({ minutes, seconds });

  state.countdownId = setTimeout(() => countdown(), 1000);
};

export const play = () => {
  updateControls();
  countdown();
};

export const pause = () => {
  updateControls();
  deactivateSound();
};

export const stop = () => {
  if (state.running) updateControls();

  updateDisplay(state);
  deactivateSound();
};

export const plus = () => {
  updateMinutes(Number(elements.time.minutes.textContent) + 5);
};

export const minus = () => {
  let result = Number(elements.time.minutes.textContent) - 5;
  result = result < 0 ? 0 : result;

  updateMinutes(result);
};
