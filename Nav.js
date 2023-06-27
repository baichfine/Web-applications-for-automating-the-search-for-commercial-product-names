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
    alert('Selected ' + event.target.value);
    //event.preventDefault();
  }



  render() {
    return (
      <form className="form">


          <ul>
            <li value="1" onClick={this.handleSubmit}>Шины и диски</li>
            <li value="2" onClick={this.handleSubmit}>Масла, смазки, жидкости</li>
             <li value="3" onClick={this.handleSubmit}>Аккумуляторы и принадлежности</li>
             <li value="4" onClick={this.handleSubmit}>Инструменты</li>
             </ul>

      </form>
    );
  }
}

export default Nav;
