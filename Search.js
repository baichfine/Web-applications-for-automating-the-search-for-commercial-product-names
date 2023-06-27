import React, { Component } from 'react';
/*import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import ReactDOM from 'react-dom';*/
import './index.css';
import BrandSearchingTable from './exampleBrandSearchingTable.js';
import VinModal from './ModalWindow_VIN.js';
import DataArray from './dataArray.js';
/*import SearchHeader from './SearchHeader.js';
import axios from 'axios';
const API = 'http://192.168.35.148:84/api/index.php';*/


export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brandClassName: "brandChoise",
      searchClassname: "search",
      searchButtonClassName:"search_button",
      inputClassName: "search_field input",
      clearSearchID: 'clearSearch'
    }
}

clickSearch(e){
    this.props.updateClick(e);
    this.setState({
      searchRequestTitle: this.props.searchRequest
    })
}
createTable = () => {
if (this.props.arrayDataProba['brands'] === 0 && this.props.isClickedSearch === false){
  this.props.searchNullFunction();
}
  let table = []
if(typeof(this.props.arrayDataProba) !=='undefined' && typeof(this.props.arrayDataProba['brands']) !== 'undefined'  && this.props.arrayDataProba !== 0 && (Object.values(this.props.arrayDataProba['brands']).length > 0)) {
  if(this.props.isClickedSearch === false) {
if(Object.values(this.props.arrayDataProba['brands']).length > 6 && this.state.brandClassName !==  'brandChoiseScroll') {
  this.setState({
    brandClassName: 'brandChoiseScroll'
  })}
  if(Object.values(this.props.arrayDataProba['brands']).length <= 6 && this.state.brandClassName !==  'brandChoise') {
    this.setState({
      brandClassName: 'brandChoise'
    })}

  }
  else if (this.props.isClickedSearch === true) {
    if(Object.values(this.props.arrayDataProba['brands']).length > 6 && this.state.brandClassName !==  'brandChoiseScroll') {
      this.setState({
        brandClassName: 'brandChoiseScroll2'
      })}
      if(Object.values(this.props.arrayDataProba['brands']).length <= 6 && this.state.brandClassName !==  'brandChoise') {
        this.setState({
          brandClassName: 'brandChoise'
        })}
  }

  table=Object.values(this.props.arrayDataProba['brands']).map((obj,e)=> {
if( e > 0){
  if(Object.values(this.props.arrayDataProba['brands'])[e-1].brand !== obj.brand){
    return (<tr key={obj.brand} onClick={(e)=>{this.props.clickBrand(obj);}}><td>{obj.brand}</td></tr>);
  }
}
else  { return (<tr key={obj.brand} onClick={(e)=>{this.props.clickBrand(obj);}} ><td>{obj.brand}</td></tr>);}

});
}
  return table;
}
search = (e) => {
  if (this.props.isClickedSearch === false && this.props.mainPage === true){
    this.setState ({
      searchClassname: "search",
      searchButtonClassName:"search_button",
      inputClassName: "search_field input",
      clearSearchID: 'clearSearch'
    })
    }
  else if (this.props.isClickedSearch === true || (this.props.isClickedSearch === false && this.props.mainPage === false) ||  this.props.arrayDataProba['brands'] === 0){
    this.setState ({
      searchClassname: "search2",
      searchButtonClassName:"searchButtonHeader",
      inputClassName: "searchFieldHeader input",
      clearSearchID: 'clearSearch2'
    })
    }
  this.props.searchChange(e);
}

  render(){
    return (
    <div>
      {((this.props.isClickedSearch === true && this.props.searchClick === true ) || (this.props.isClickedSearch === false && this.props.searchClick === false))?(this.search()):(null)}
      <div className = "SearchBackground">
        <div className={this.state.searchClassname}>
          <input type="text" className={this.state.inputClassName} value={this.props.searchRequest} placeholder="Артикул, VIN или марка автомобиля" onKeyPress={(e)=>{this.props.searchKeyPress(e);}}  onChange={this.props.handleSearchChange}/>
          <button className={this.state.searchButtonClassName}  onClick={(e)=>{this.props.brandListShow(e);}}>Найти</button>
          {(this.props.searchRequest != '')?(<span id={this.state.clearSearchID}  onClick={(e)=>{this.props.clearSearchButton(e);}}>&#10006;</span>):(null)}
          {(this.props.brandList === true)?(<div id={this.state.brandClassName}><table><tbody>{this.createTable()}</tbody></table></div>):(null)}
          {(this.props.mainPage === true && this.props.isClickedSearch === false)?(<VinModal vinShow={this.props.vinShow}/>):(null)}
        </div>
      </div>
      {(this.props.isClickedSearch === true)?(<div id="BrandSearchingTable"><div className="SearchBackground">
      <hr/>
    <DataArray  updateProducts ={this.props.updateProducts} updateProduct={this.props.updateProduct} arrayBasket={this.props.arrayBasket} clickSort1={this.props.clickSort1} updateSort1Arrays={this.props.updateSort1Arrays} updateSort1={this.props.updateSort1} sort1Load={this.props.sort1Load} arraySort1DataProba={this.props.arraySort1DataProba} searchRequest={this.props.searchRequest}   arrayDataProba={this.props.arrayDataProba} clickBasket={this.props.clickBasket} />
    </div></div>):(null)}
    </div>
    );
  }
}
