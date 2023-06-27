import React, { Component } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import './index.css';

class ShowPassword extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      type: 'input',
      score: 'null'
    }
    this.showHide = this.showHide.bind(this);
    this.passwordStrength = this.passwordStrength.bind(this);
  }
  showHide(e){
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      type: this.state.type === 'input' ? 'password' : 'input'
    })
  }

  passwordStrength(e){
    if(e.target.value === ''){
      this.setState({
        score: 'null'
      })
    }
    else{
      var pw = e.target.value;
      this.setState({
        score: pw.score
      });
    }
  }
  render(){
    return(
      <label>

      <input type={this.state.type} className="password" placeholder="Пароль" value={this.state.password} onChange={this.handlePasswordChange} onChange={this.passwordStrength} />
      <span id="passwordShow" onClick={this.showHide}>{this.state.type === 'input' ? 'Hide' : 'Show'}</span>
      {/* <span className="password__strength" data-score={this.state.score} /> */}
      </label>
    )
  }
}
export default ShowPassword;
