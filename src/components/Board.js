import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classNames from 'classnames';

import Cell from './Cell';
import * as allActions from '../store/actions';
import './styles.css';
import Command from './Command';
import GameOver from './GameOver';

class Board extends Component {
  updatedBoardData = cellData => {
    let { boardData } = this.state;
    boardData.map(dataRow => {
      return dataRow.map(cell => {
        cell.isMarked = cell.id === cellData.id ? true : false;
        return cell;
      });
    });
    return boardData;
  };

  handleCellClick = data => {
    const { command, actions } = this.props;
    if (command === 'Mark') {
      actions.markCell(this.props.updatedBoardData, data);

      // dispatch(actions.markCell(this.props.updatedBoardData, data));
    } else if (command === 'Reveal') {
      actions.revealCell(this.props.updatedBoardData, data);
      if (data.hasMine) {
        actions.gameOver();
      }
    } else if (command === 'Guess') {
      actions.guessCell(this.props.updatedBoardData, data);
    }
  };

  renderBoardData = () => {
    const { updatedBoardData } = this.props;
    return updatedBoardData.map((dataRow, index) => <div key={'row' + index}> {dataRow.map(cellData => this.addCell(cellData))} </div>);
  };

  addCell = data => {
    return <Cell key={'key' + data.id} data={data} showVal={data.isMarked || data.isRevealed || data.isGuessed} onClick={() => this.handleCellClick(data)} />;
  };
  render() {
    const { lost, won } = this.props;
    return (
      <div className={classNames('board', { gameOver: lost })}>
        <Command />
        {this.renderBoardData()}
        <GameOver lost={lost} won={won} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { updatedBoardData, won, lost } = state.boardStatus;
  const { command } = state.currentCommand;
  return {
    command,
    won,
    lost,
    updatedBoardData
  };
};
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(allActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
