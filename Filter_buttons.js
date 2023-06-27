import React, { Component } from 'react';
/*import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import ReactDOM from 'react-dom'; */
import './index.css';
import ProgressBar, {ReactComponent as Loader} from './progressBar.svg';

import GetterFilterButton from './GetterFilterButton.js';
/*import PrevenseFilterButton from './PrevenseFilterButton.js';
import TermFilterButton from './TermFilterButton.js';
import PriceFilterButton from './PriceFilterButton.js';*/
import update from 'immutability-helper';


class FilterButtons extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      idButtons: ["getter","","","presense"],
      nameButtons: ['Производитель','Цена','Срок поставки','Количество'],
      openFilter: false,
      numberFilter: 0,
      svg180: [],
      stop: true,
      newButtonsFilters: ["","price","term","presenseNew"],
      colorPathFillSvg: ["#000", "#000", "#000", "#000"]
    }
  }

filterButtons = (e) => {
    let table;
    if (this.state.stop === false) this.stopFilterNo();
    table = this.state.idButtons.map((obj,i)=> {
  return(<td><button className="default_btn" id={this.state.idButtons[i]} onClick={(e)=>{this.openModal(i);}}>{this.state.nameButtons[i]} &#160;{(this.state.idButtons[i] === 'getterNew')?(<span id="clearBrands" onClick={(e)=>{this.brandClear(i);}}>&#10006;</span>):(<svg id = {this.state.svg180[i]} xmlns="http://www.w3.org/2000/svg" width="15" height="10.5" viewBox="0 0 10 7">
      <path fill={this.state.colorPathFillSvg[i]} fillRule="evenodd" d="M.757 2L2.172.586 5 3.414 7.828.586 9.243 2 5 6.243z"/>
  </svg>)}</button></td>)
    });
    return table;
  }
stopFilterNo = (e) => {
  this.setState({
    stop: true,
  })
}
closeFilter =(e) => {
  if (this.state.openFilter == true) {
    this.setState({
      openFilter: false
    })
  }
}
openModal = (e) => {
  if (this.state.stop === true){
  if (typeof(e) === 'number'){
    if (this.state.svg180[e] === 'svg') this.svg = '';
    else this.svg = 'svg';
    if (e === 1) this.button = this.state.newButtonsFilters[e];
    else if (e === 2) this.button = this.state.newButtonsFilters[e];
    else if (e === 3) this.button = this.state.newButtonsFilters[e];
    this.setState({
      numberFilter: e,
      svg180: update(this.state.svg180, {[e]:  {$set: this.svg}}),
    })
    this.state.numberFilter = e;
    this.state.svg180[e] = this.svg;

    if (e != 0){
    this.setState({
      idButtons: update(this.state.idButtons, {[e]:  {$set: this.button}}),
      colorPathFillSvg: update(this.state.colorPathFillSvg, {[e]:  {$set: "#fff"}}),
    })
    this.state.idButtons[e] = this.button;
    this.state.colorPathFillSvg[e] = "#fff";
    }
    this.clearFilter(e);
    if (e != 0)this.props.filterChange(e, this.state.numberFilter);
  }
    if (e === 0 || typeof(e) === 'object'){
      if (typeof(e) === 'object' && e.length !== 0) this.id = 'getterNew';
      else if ((typeof(e) === 'object' && e.length === 0) || (e === 0  && this.id !== 'getterNew')) this.id = 'getter';
        this.setState({
          idButtons: update(this.state.idButtons, {[0]:  {$set: this.id}}),
          openFilter: !this.state.openFilter
        })
        this.state.idButtons[0] = this.id;
        this.props.filterChange(e, this.state.numberFilter);
    }
  }
  }
clearFilter = (e) => {
  this.button3 = '';
  for (var i=0; i < this.state.svg180.length; i++){
    if (i !== e){
      if (i === 3) this.button3 = "presense";
    this.setState({
      svg180: update(this.state.svg180, {[i]:  {$set: ''}}),
    })
    this.state.svg180[i] = '';
    if (i !== 0){
    this.setState({
      idButtons: update(this.state.idButtons, {[i]:  {$set: this.button3}}),
      colorPathFillSvg: update(this.state.colorPathFillSvg, {[i]:  {$set: "#000"}}),
    })
    this.state.idButtons[i] = this.button3;
    this.state.colorPathFillSvg[i] = "#000";
  }
  }
  }
}
getArrayCheck = (e) => {
    this.props.getArrayCheck(e);
  }
brandClear = (e) => {
  this.closeFilter();
  this.id = 'getter';
  this.svg = '';
  this.setState({
    stop: false,
    idButtons: update(this.state.idButtons, {[0]:  {$set:   this.id}}),
    svg180: update(this.state.svg180, {[0]:  {$set: this.svg}}),
  })
  this.state.idButtons[0] = this.id;
  this.state.svg180[0] = this.svg;
  this.state.stop = false;
  this.props.brandClear(e);
}
clearAllFilters = (e) => {
  this.clearFilter(e);
  this.brandClear(e);
}
componentWillUnmount() {
  document.removeEventListener('click', this.handleClickOutside, false);
}
UNSAFE_componentWillMount() {
  document.addEventListener('click', this.handleClickOutside, false);
}
handleClickOutside = (e) => {
  const filterBrand = document.getElementById('getterModal');
  const filterButton1 = document.getElementById('getter');
  const filterButton2 = document.getElementById('getterNew');
  if (!e.path.includes(filterBrand) && !e.path.includes(filterButton1) && !e.path.includes(filterButton2))
  this.closeFilter();
}



  render() {
    return (
      <div className="buttonFilter">
      <table className = "filtersButtonTable">
      <tr>

      {this.filterButtons()}
      <td title="Очистить все фильтры"><svg id="svgClear" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 971.986 971.986" onClick={(e)=>{this.clearAllFilters(e);}} >
      <g> <path d="M370.216,459.3c10.2,11.1,15.8,25.6,15.8,40.6v442c0,26.601,32.1,40.101,51.1,21.4l123.3-141.3c16.5-19.8,25.6-29.601,25.6-49.2V500c0-15,5.7-29.5,15.840.601L955.615,75.5c26.5-28.8,6.101-75.5-33.1-75.5h-873c-39.2,0-59.7,46.6-33.1,75.5L370.216,459.3z"/>
</g></svg></td>
      </tr>


      </table>
      {(this.state.openFilter === true)?(<GetterFilterButton isCheckedBrands={this.props.isCheckedBrands} getArrayCheck = {this.getArrayCheck} openModal={this.openModal} openFilter={this.state.openFilter} arrayDataCatalog = {this.props.arrayDataCatalog}/>):(null)}
      </div>
    );
  }
}

export default FilterButtons;
