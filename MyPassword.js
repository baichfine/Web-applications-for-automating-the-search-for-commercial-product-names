import React from 'react'
/*import { render } from 'react-dom';
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom'; */
import './index.css';
/*import update from 'immutability-helper';*/

export class MyPassword extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pay: false,
      type: 'password'
    }

        this.showHide = this.showHide.bind(this);
  }

  showHide(e){
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      type: this.state.type === 'input' ? 'password' : 'input'
    })
  }

  render() {

if(this.props.myPassword === true && this.props.changeAccepted === false) {
  return (
    <div className="dark_full">

      <div id="closeModalOrders" onClick={this.props.myPasswordClose} >&#10006;</div>
      <div id="RightAvtorization">
        <h4>Изменение пароля</h4>
        <div className="myOrders">
        <div className="myPassword">

    <label>
    <input type={this.state.type} className="password" placeholder="Пароль" value={this.state.password}  onClick={this.passwordStrength} />
    <span id="passwordShow" onClick={this.showHide}>{this.state.type === 'input' ? <svg className="eye" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 25 25">
        <g fill="none" fillRule="evenodd">
            <path d="M0 0h24v24H0z"/>
            <path fill="#000" d="M12 15c5.523 0 7.5-4 9-4 0 .954-2.477 6-9 6s-9-5.046-9-6c1.5 0 3.477 4 9 4z"/>
        </g>
    </svg>

: <svg className="eye" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 25 25">
<g fill="none" fillRule="evenodd">
<path d="M0 0h24v24H0z"/>
<path stroke="#000" d="M20.386 12C18.19 8.989 15.407 7.5 12 7.5c-3.407 0-6.19 1.489-8.386 4.5C5.81 15.011 8.593 16.5 12 16.5c3.407 0 6.19-1.489 8.386-4.5z"/>
<path fill="#000" d="M12 10c5.523 0 5.5 2 9 2 0-.954-2.477-6-9-6s-9 5.046-9 6c3.5 0 3.477-2 9-2z"/>
<circle cx="12" cy="12" r="3" fill="#000"/>
</g>
</svg>

}</span>
    </label>
      <button id="sign-in-modal" onClick={(e)=>{this.props.clickPasswordChange(e);}}>Изменить пароль</button>

      </div>
        </div>
      </div>
    </div>)
    }
    else if (this.props.changeAccepted === true) {
      return (
        <div className="dark_full">

          <div id="closeModalOrders" onClick={this.props.myPasswordClose} >&#10006;</div>
          <div id="RightAvtorization">
            <h4>Пароль изменен</h4>
            <div className="myOrders">
            <div className="myPassword2">
            <svg xmlns="http://www.w3.org/2000/svg" width="121" height="88" viewBox="0 0 121 88">
                <g fill="none" fillRule="evenodd">
                    <path d="M-116-9h300V91h-300z"/>
                    <path fill="#FFB74D" d="M.461 51.707a11.18 11.18 0 0 1 14.359-1.225l21.234 15.006 70.274-62.61a10.693 10.693 0 0 1 14.675.422L36.529 87.774.46 51.707z"/>
                </g>
            </svg>


          </div>
            </div>
          </div>
        </div>)
    }
 else return (null)
}
}
export default MyPassword;
