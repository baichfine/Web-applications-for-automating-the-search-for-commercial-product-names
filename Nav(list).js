import React, { Component } from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import ReactDOM from 'react-dom';
import './index.css';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'oil'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Selected ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>

          <select value={this.state.value} onChange={this.handleChange}>
            <option value="sh">Шины и диски</option>
            <option value="oil">Масла, смазки, жидкости</option>
            <option value="ak">Аккумуляторы и принадлежности</option>
            <option value="tools">Инструменты</option>
          </select>

        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Nav;
