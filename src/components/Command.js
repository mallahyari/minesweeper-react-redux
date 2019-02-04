import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setCommand } from '../store/actions';

import './styles.css';

class Command extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 'Mark' };
  }

  handleChange = event => {
    const value = event.target.value;
    this.setState({ value });
    this.props.setCommand(value);
  };

  render() {
    return (
      <div className="sel">
        <label>
          <input type="radio" value="Mark" checked={this.state.value === 'Mark'} onChange={this.handleChange} /> Mark
        </label>
        <label>
          <input type="radio" value="Reveal" checked={this.state.value === 'Reveal'} onChange={this.handleChange} /> Reveal
        </label>
        <label>
          <input type="radio" value="Guess" checked={this.state.value === 'Guess'} onChange={this.handleChange} /> Guess
        </label>
      </div>
    );
  }
}

export default connect(
  null,
  { setCommand }
)(Command);
