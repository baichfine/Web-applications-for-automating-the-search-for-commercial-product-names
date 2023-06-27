import React from 'react';

import './index.css';

 export class TheBestPrice extends React.Component {

onclickf(e) {
  alert(this.props.garbage);
}

    render(){
        return (

          <div className="TheBestPrice">
              <table id="bestPrice"  border="1" cellSpacing="0" cellPadding="4">
                 <caption border="1" >ЛУЧШАЯ ЦЕНА</caption>
                 <tbody>
                 <tr>
                  <th>&#9632;</th><th id="fixedName">VAG 5E0807217 Облицовка бампера</th>
                  <th id="quantity"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16">
                      <path fill="none" fillRule="evenodd" stroke="#10171E" d="M6 15c-.712 0-5-6.05-5-8.88C1 3.294 3.239 1 6 1s5 2.293 5 5.12C11 8.95 6.712 15 6 15zm0-6.83c1.105 0 2-.918 2-2.05 0-1.13-.895-2.047-2-2.047S4 4.99 4 6.12s.895 2.048 2 2.048z"/>
                  </svg> 12 шт</th><th>7 090 <span className="rub">Р</span> </th><th><button id="inGarbage" onClick={this.onclickf}>В корзину</button></th>
                 </tr>
                 </tbody>
               </table>
            </div>

        );
    }
}
  /*  <button id="order">Перейти в "Мои заказы"</button> */

export default TheBestPrice;
