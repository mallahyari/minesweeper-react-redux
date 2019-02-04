import { MARK_COMMAND, REVEAL_COMMAND, GUESS_COMMAND } from '../../constants/ActionTypes';

const command = (state = { command: 'Mark' }, action) => {
  switch (action.type) {
    case MARK_COMMAND:
    case REVEAL_COMMAND:
    case GUESS_COMMAND:
      return { command: action.text };

    default:
      return state;
  }
};

export default command;
