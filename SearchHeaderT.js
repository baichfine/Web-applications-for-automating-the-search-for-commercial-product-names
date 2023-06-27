import React, { Component } from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import ReactDOM from 'react-dom';
import './index.css';

class SearchHeaderT extends React.Component{
  render(){
    return (
      <div className="div_header_table">
        <input type="text" className="search_field_header input" placeholder="Артикул, VIN или марка автомобиля"/>
        <button className="search_button_header">Найти</button>
      </div>
    );
  }
}

export default SearchHeaderT;
