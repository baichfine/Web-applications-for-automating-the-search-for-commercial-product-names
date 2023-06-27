import React, { Component } from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import ReactDOM from 'react-dom';
import './index.css';
import HeaderIdetta from './HeaderIdetta.js';
import TitleWaySearchCenter from './titleWaySearchCenter.js';
import OftenCustomer from './OftenCustomer.js';
import NewCustomer from './NewCustomer.js';

 export class Entrance extends React.Component {
    render(){
        return (

          <div>
              <HeaderIdetta />
              <TitleWaySearchCenter />
              <div className="parent">
                <div className="oftenCustomer"><OftenCustomer /></div>
                <div className="newCustomer"><NewCustomer /></div>
              </div>
          </div>
        );
    }
}

export default Entrance;
