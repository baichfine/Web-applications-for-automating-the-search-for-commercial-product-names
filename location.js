import React, { Component } from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import ReactDOM from 'react-dom';
import './index.css';

class Location extends React.Component{
  render(){
    return (
      <div className="location"> <p> Ваш город &mdash; Москва?</p>
        <button id="yes_button">Да</button>
				<button id="no_button">Нет, выбрать другой</button>

        </div>
    );
  }
}


export default Location;
