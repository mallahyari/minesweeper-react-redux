import * as actions from '../../constants/ActionTypes';

export const generateGrid = (rows, cols) => {
  return {
    type: actions.GENERATE_GRID,
    rows,
    cols
  };
};

export const setCommand = command => {
  if (command === 'Mark') {
    return {
      type: actions.MARK_COMMAND,
      text: command
    };
  } else if (command === 'Reveal') {
    return {
      type: actions.REVEAL_COMMAND,
      text: command
    };
  } else if (command === 'Guess') {
    return {
      type: actions.GUESS_COMMAND,
      text: command
    };
  }
};

export const markCell = (boardData, cell) => {
  return {
    type: actions.MARK_CELL,
    boardData,
    cell
  };
};

export const revealCell = (boardData, cell) => {
  return {
    type: actions.REVEAL_CELL,
    boardData,
    cell
  };
};

export const guessCell = (boardData, cell) => {
  return {
    type: actions.GUESS_CELL,
    boardData,
    cell
  };
};

export const gameOver = () => {
  return {
    type: actions.GAME_OVER
  };
};
