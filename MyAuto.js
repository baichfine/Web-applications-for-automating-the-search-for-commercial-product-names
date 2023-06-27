import React from 'react'
/*import { render } from 'react-dom';
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';*/
import './index.css';
import update from 'immutability-helper';
export class MyAuto extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    dataUser: true,
    saveChangeButton: false,
    saveSuccessful: false,
    arrayStop: false,
    dataCarArray: [],
    dataCarArrayNew: [],
    dataCarArrayChange: ['','','','','','','',''],
    dataCarSelector: [],
    dataCarPlaceHolder: ['Марка автомобиля','Модель автомобиля','VIN','Государственный номер автомобиля','Номер свидетельства о регистрации','Номер двигателя','Год выпуска', 'Пробег'],
    array: [],
        }
  }

clickSaveChanges = (e) => {
     this.setState({
       saveSuccessful: true,
       saveChangeButton: false,
     });
     this.props.arrayCarsMarks['auto_makers'].map((obj, e) => {
    if (this.state.dataCarArrayChange[0] == (obj.id)){
      this.setState({
        array: obj.name
      })
      this.state.array = obj.name;
    }
     });
     this.props.clickCarDataSave((this.state.dataCarArrayChange.concat(this.state.dataCarArray['id'])).concat(this.state.array));
}
arrayDataCarFunction = (arr)=> {
  if (this.state.arrayStop === false){
    this.setState({
      dataCarArrayNew:[arr.auto_maker_id, arr.auto_model, arr.vin, arr.auto_gov_num, arr.auto_doc_num, arr.engine_num, arr.made_year, arr.probeg],
      arrayStop: true,
  })
  this.state.dataCarArrayNew = [arr.auto_maker_id, arr.auto_model, arr.vin, arr.auto_gov_num, arr.auto_doc_num, arr.engine_num, arr.made_year, arr.probeg];
  }
  else {
    this.setState({
      dataCarArrayNew: this.state.arrayDataCompanyChange,
    })
    this.state.dataCarArrayNew = this.state.arrayDataCompanyChange;
  }
}
selectors = (array, type) => {
  array.map((obj,e)=> {
    if(type === obj.id) {
      this.setState({
        dataCarSelector: update(this.state.dataCarSelector, {[e]:  {$set: 'selected'}}),
      })
      this.state.dataCarSelector[e] = 'selected';
    }
    else {
    this.setState({
      dataCarSelector: update(this.state.dataCarSelector, {[e]:  {$set: ''}}),
    })
    this.state.dataCarSelector[e] = '';
  }
  });
}
carDataLoad = (e) => {
  if (this.state.dataUser === true) {
    if (this.props.newCar === false){
    this.props.arrayMyCars.map((obj1,e1)=> {
      obj1.map((obj2,e2)=> {
        if (this.props.companyID === obj2.company_id && this.props.nameCar === obj2.auto_maker_name){
          this.setState({
            dataCarArray: this.props.arrayMyCars[e1][e2],
          })
          this.state.dataCarArray = this.props.arrayMyCars[e1][e2];
        }
      });
  });
  this.arrayDataCarFunction(this.state.dataCarArray);
  this.selectors(this.props.arrayCarsMarks['auto_makers'], this.state.dataCarArrayNew[0]);
  this.state.dataCarArrayNew.map((obj,e)=> {
    if(typeof(obj) != 'undefined') {
      this.setState({
        dataCarArrayChange: update(this.state.dataCarArrayChange, {[e]:  {$set: obj}}),
        dataUser: false,
      })
      this.state.dataCarArrayChange[e] = obj;
    }
  });
}
  else  {
    this.selectors(this.props.arrayCarsMarks['auto_makers'], 3854);
    this.setState({
      dataCarArrayChange: ['','','','','','','',''],
      dataUser: false
    })
  }
}
}
createTable = (e) => {
  let table = [];
  table = this.state.dataCarArrayChange.map((obj,n)=> {
  if (n == 0 ) {
    return(<tr><td><span id="comment">{this.state.dataCarPlaceHolder[n]}</span>
      <select  onChange={(e)=>{this.changeDataCar(e, n);}} id="listOKOPF">{this.createSelectTable(this.state.dataCarSelector,this.props.arrayCarsMarks['auto_makers'])}</select></td></tr>);
  }
  else {
    return(<tr><td>{(this.state.dataCarArrayChange[n].length != 0)?(<span id="comment">{this.state.dataCarPlaceHolder[n]}</span>):(null)}<input type="text" onChange={(e)=>{this.changeDataCar(e, n);}} placeholder={this.state.dataCarPlaceHolder[n]} value={this.state.dataCarArrayChange[n]}/></td></tr>);
  }
  });
  return table;
}
createSelectTable = (array, arr) => {
  let list = [];
  list = array.map((obj, e) => {
  return(<option value={arr[e].id} selected={obj}>{arr[e].name}</option>);
  });
  return list;
}
changeDataCar = (e,n) => {
  this.setState({
    dataCarArrayChange: update(this.state.dataCarArrayChange, {[n]:  {$set: e.target.value}}),
    saveChangeButton: true,
    saveSuccessful: false
  });
  this.state.dataCarArrayChange[n] = e.target.value;
}
  render() {

      return (
        <div>
        {(typeof(this.props.arrayMyCars) != 'undefined')?(
        <div className="dark_full">
            <div id="closeModalOrders" onClick={this.props.companyCarsEditClose} >&#10006;</div>
            <div id="RightAvtorization">
            {(this.props.newCar === true)?(<h4>Добавить новый автомобиль</h4>):(<h4>Редактировать {this.props.nameCar}</h4>)}

            <div className="tableR3">
            <form>
              {this.carDataLoad()}
                      <table id="requisitesCompany">
                      <tbody>
                      {this.createTable()}
                    </tbody>
                      </table>
                    {(this.state.saveChangeButton)?(<button id="sign-in-modal" onClick={(e)=>{this.clickSaveChanges(e);}}>Сохранить изменения</button>):(null)}
                    {(this.state.saveSuccessful)?(<p>Данные успешно сохранены</p>):(null)}
              </form>
            </div>

            </div>
            </div>):(null)}
            </div>
)
}
  }


export default MyAuto;
