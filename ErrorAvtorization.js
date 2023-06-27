import React from 'react'

import './index.css';

export class ErrorAvtorization extends React.Component {
  render() {
      if  (this.props.notError == false) {
    return (
          <div id="ErrorAvtorization">
              <p>Неверный логин или пароль</p>
          </div>
); }
else return (null)
  }
}


export default ErrorAvtorization;
