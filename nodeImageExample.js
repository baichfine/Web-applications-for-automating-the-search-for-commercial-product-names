import React, { Component } from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import ReactDOM from 'react-dom';
import './fonts/index.css';


var Font = require('./Ubuntu.ttf');

 export class Fonts extends React.Component {
    render(){
        return (
            <font src={Font} />

        );
    }
}


export default Fonts;
