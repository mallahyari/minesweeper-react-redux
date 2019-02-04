import { combineReducers } from 'redux';

import { MARK_CELL, REVEAL_CELL, GUESS_CELL, GAME_OVER } from '../../constants/ActionTypes';
import * as actions from '../../constants/ActionTypes';
import commandReducer from './game-commands';
import * as Utils from './utils';

const initialState = {
  boardInitialized: false,
  updatedBoardData: [],
  rows: 0,
  cols: 0,
  won: false,
  lost: false
};

const executeCommand = (state = initialState, action) => {
  switch (action.type) {
    case actions.GENERATE_GRID: {
      const rows = action.rows;
      const cols = action.cols;
      const boardInitialized = rows > 0 && cols > 0 ? true : false;
      let updatedBoardData = Utils.initializeBoard(rows, cols);
      return {
        ...state,
        boardInitialized,
        updatedBoardData,
        rows,
        cols,
        lost: false
      };
    }
    case MARK_CELL: {
      return {
        ...state,
        boardInitialized: true,
        updatedBoardData: Utils.updateBoard(action),
        won: Utils.haswon(action.boardData)
      };
    }

    case REVEAL_CELL: {
      // const updatedBoardData = Utils.updateBoard(action);
      // const won = Utils.haswon(action.boardData);
      return {
        ...state,
        boardInitialized: true,
        updatedBoardData: Utils.updateBoard(action),
        won: Utils.haswon(action.boardData)
      };
    }

    case GUESS_CELL: {
      return {
        ...state,
        boardInitialized: true,
        updatedBoardData: Utils.updateBoard(action)
      };
    }

    case GAME_OVER:
      return {
        ...state,
        lost: true
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  currentCommand: commandReducer,
  boardStatus: executeCommand
});

export default rootReducer;
