import React from 'react';
/*import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import ReactDOM from 'react-dom';*/
import './index.css';


var VinImage = require('./images/VIN.PNG');

 export class VIN extends React.Component {
    render(){
        return (
            <img src={VinImage} alt="VIN" width="95%"/>

        );
    }
}


export default VIN;
