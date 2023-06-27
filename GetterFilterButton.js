import React, { Component } from 'react'
/*import { Button, Header, Icon, Modal } from 'semantic-ui-react'*/
import './index.css';
import update from 'immutability-helper';

export default class GetterFilterButton extends Component {
  constructor(props){
    super(props);
    this.state = {
      setArrayBrands: [],
      check: [],
      checkUpdate: false,
      arrayCheckedBrands: [],
      stopFilter: false,
      isChecked: []

    }

  }
  setBrands = (e) => {
    var arrayFilter = this.props.arrayDataCatalog;
    var arrayBrands = [];
    for (var i = 0; i < arrayFilter.length; i++) arrayBrands[i] = arrayFilter[i].brand;
    this.state.setArrayBrands = arrayBrands.filter(function(elem, pos) {
    return (arrayBrands.indexOf(elem) == [pos]);
  });
  if (this.state.checkUpdate === false)
  for (var i=0; i < this.state.setArrayBrands.length; i++){
    if (this.props.isCheckedBrands[i] === false || typeof(this.props.isCheckedBrands[i]) === 'undefined') this.stateBrand = false;
    else this.stateBrand = true;
  this.setState({
    check: update(this.state.check, {[i]:  {$set: 'check' + (i+1)}}),
    isChecked: update(this.state.isChecked, {[i]:  {$set: this.stateBrand}}),
    checkUpdate: true
  })
  this.state.isChecked[i] = this.stateBrand;
  this.state.check[i] = 'check' + (i+1);
}
}
  createTable = (e) => {
if(this.state.stopFilter === false) {
     this.setBrands(e);
    let table;
    table = this.state.setArrayBrands.map((obj,i)=> {
  return(<div className="div-table"><div className="div-table-col"><div className="checkbox">
      <input type="checkbox" id={this.state.check[i]} checked={this.state.isChecked[i]} onClick={(e)=>{this.checkedBrand(i);}}/><label htmlFor={this.state.check[i]}>{obj}</label></div></div></div>)
    });
    return table;
    this.setState({
      stopFilter: true
    })
}
}
  checkedBrand = (i) => {
      this.setState({
        isChecked: update(this.state.isChecked, {[i]:  {$set: !this.state.isChecked[i]}}),
      })
  }
  BrandsIsChecked = (e) => {
    var j =0;
    for (var i=0; i < this.state.setArrayBrands.length; i++){
      if (this.state.isChecked[i] === true){
      this.setState ({
        arrayCheckedBrands: [...this.state.arrayCheckedBrands, this.state.setArrayBrands[i]]
      })
      this.state.arrayCheckedBrands[j] = this.state.setArrayBrands[i];
      j++;
    }
    }
    this.props.getArrayCheck(this.state.isChecked);
    this.props.openModal(this.state.arrayCheckedBrands);
  }

  render() {
 return (
        <div id="getterModal">
          <div id="getterModalArea">
          <form id="form1">
          {this.createTable()}
          </form>
          </div>
          <div id="priceModalFooter">
          <button onClick={this.BrandsIsChecked}>Применить</button>
          </div>
          </div>)
  }
}
