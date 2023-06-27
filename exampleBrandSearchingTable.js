import React from 'react';
/*import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import ReactDOM from 'react-dom';

import SearchHeader from './SearchHeader.js';

import TitleWaySearch from './titleWaySearch.js';
import TheBestPrice from './theBestPrice.js';
import InStock from './inStock.js';
import Analogs from './analogs.js';*/
import DataArray from './dataArray.js';
import './index.css';

 export class BrandSearchingTable extends React.Component {




    render(){


        return (
          <div className="SearchBackground">
          <hr/>

        <DataArray   clickSort1={this.props.clickSort1} updateSort1Arrays={this.props.updateSort1Arrays} updateSort1={this.props.updateSort1} sort1Load={this.props.sort1Load} arraySort1DataProba={this.props.arraySort1DataProba} searchRequest={this.props.searchRequest}   arrayDataProba={this.props.arrayDataProba} clickBasket={this.props.clickBasket} />
        </div>

        );
    }
}
  /*  <button id="order">Перейти в "Мои заказы"</button> */

export default BrandSearchingTable;
