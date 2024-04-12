import './events.js';

import * as actions from './actions.js';

import state from './state.js';

export const start = (minutes, seconds) => {
  state.minutes = minutes ?? state.minutes;
  state.seconds = seconds ?? state.seconds;

  actions.updateDisplay(state);
};
