import React, { Component } from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import ReactDOM from 'react-dom';
import './index.css';




 export default class FilterExample extends Component {
    render(){
        return (
            <div id="getterModal">
              <div id="getterModalArea">

              <form id="form1">


                    <div className="div-table"><div className="div-table-col">  <div className="checkbox">
                      <input type="checkbox" id="check1" /><label htmlFor="check1">  VAG</label></div>
                  </div></div>


                    <div className="div-table"><div className="div-table-col">  <div className="checkbox">
                      <input type="checkbox" id="check2" /><label htmlFor="check2">  DIAMOND</label></div>
</div></div>
<div className="div-table"><div className="div-table-col">  <div className="checkbox">
  <input type="checkbox" id="check3" /><label htmlFor="check3">  SOLLO</label></div>
</div></div><div className="div-table"><div className="div-table-col">  <div className="checkbox">
  <input type="checkbox" id="check4" /><label htmlFor="check4">  DOMINANT</label></div>
</div></div>
<div className="div-table"><div className="div-table-col">  <div className="checkbox">
  <input type="checkbox" id="check1" /><label htmlFor="check1">  VAG</label></div>
</div></div>


<div className="div-table"><div className="div-table-col">  <div className="checkbox">
  <input type="checkbox" id="check2" /><label htmlFor="check2">  DIAMOND</label></div>
</div></div>
<div className="div-table"><div className="div-table-col">  <div className="checkbox">
<input type="checkbox" id="check3" /><label htmlFor="check3">  SOLLO</label></div>
</div></div><div className="div-table"><div className="div-table-col">  <div className="checkbox">
<input type="checkbox" id="check4" /><label htmlFor="check4">  DOMINANT</label></div>
</div></div>
              </form>
              </div>
              <div id="getterModalFooter">
              <button>Применить</button>
              </div>
</div>
        );
    }
}
