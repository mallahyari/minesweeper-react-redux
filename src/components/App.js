import React, { Component } from 'react';
import { connect } from 'react-redux';

import Board from './Board';
import UserInput from './UserInput';

class App extends Component {
  render() {
    // const { boardInitialized } = this.props;
    return (
      <div className="App">
        <UserInput />
        <Board />
      </div>
    );
  }
}

export default connect()(App);
