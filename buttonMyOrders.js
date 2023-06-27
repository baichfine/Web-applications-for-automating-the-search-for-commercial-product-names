import React from 'react';

import './index.css';





 export class ButtonMyOrders extends React.Component {


render() {


    return (
<div className ="buttonHeaderRight">
        <button id="myOrdersClick" onClick={this.props.handleOpen} > Войти &nbsp; <svg xmlns="http://www.w3.org/2000/svg" width="15" height="10.5" viewBox="0 0 10 7">
            <path fill="#000" fillRule="evenodd" d="M.757 2L2.172.586 5 3.414 7.828.586 9.243 2 5 6.243z"/>
        </svg></button>
        </div>
      )

  }
}


export default ButtonMyOrders;
