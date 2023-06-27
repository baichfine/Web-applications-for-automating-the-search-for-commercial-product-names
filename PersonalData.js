import React from 'react'
/*import { render } from 'react-dom';
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';*/
import './index.css';
import { ReactComponent as Plus } from './svgPlus.svg';
import { ReactComponent as Minus } from './svgminus.svg';
import update from 'immutability-helper';

export class PersonalData extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          dataUser: true,
          saveChangeButton: false,
          saveSuccessful: false,
          personalDataArray: [this.props.userDataList['email'],this.props.userDataList['username'],this.props.userDataList['name'], this.props.userDataList['lastname'], this.props.userDataList['mphone']],
          personalDataArrayChange: ['','','','',''],
          personalDataPlaceHolder: ['Ваша почта','Ваш логин','Ваше имя','Ваша фамилия','Ваш номер телефона'],
        }
        this.i =4;
      }

clickSaveChanges = (e) => {
   this.setState({
     saveSuccessful: true,
     saveChangeButton: false});
     this.props.clickUserDataSave(e);
}
updateCompanies = (e, type, name) => {
  if (type === true) this.props.companyAdd(e);
  else{
  this.props.arrayMyCars.map((obj1,e1)=> {
    obj1.map((obj2,e2)=> {
      if (obj2.auto_maker_name === name){
          this.props.carAdd(e, obj2.company_id);
      }
    });
  });
}
    this.props.myPersonalDataChangeClose(e);
}
myCars = (arrayCars) => {
  arrayCars.map((obj,e)=> {
    this.i++;
    this.state.personalDataArray.splice(this.i,0,obj.auto_maker_name);
    this.state.personalDataArrayChange.splice(this.i,0,'');
    this.state.personalDataPlaceHolder.splice(this.i,0,'Ваш автомобиль');
  });
}
userDataLoad = (e) => {
  if (this.state.dataUser === true) {
    this.props.arrayMyCompanies["clients"].map((obj,e)=> {
      this.state.personalDataArray.splice(this.i,0,this.props.arrayMyCompanies["clients"][e].name);
      this.state.personalDataArrayChange.splice(this.i,0,'');
      this.state.personalDataPlaceHolder.splice(this.i,0,'Ваша компания');
      this.myCars(this.props.arrayMyCars[e]);
      this.i++;
    });
    this.state.personalDataArray.map((obj,e)=> {
      if(typeof(obj) != 'undefined') {
      this.setState({
        personalDataArrayChange: update(this.state.personalDataArrayChange, {[e]:  {$set: obj}}),
        dataUser: false
      })
      this.state.personalDataArrayChange[e] = obj;
    }
    });
}
}
companyEditFunction = (name) => {
  this.props.arrayMyCompanies["clients"].map((obj,e)=> {
    if (obj.name === name){
      this.props.companyEditFunction(obj.id);
    }
  });
  this.setState({
    dataUser: true
  })
  this.props.myPersonalDataChangeClose();
}
companyCarsEditFunction = (name) => {
  this.props.arrayMyCars.map((obj1,e1)=> {
    obj1.map((obj2,e2)=> {
      if (obj2.auto_maker_name === name){
        this.props.companyCarsEditFunction(obj2.company_id, obj2.auto_maker_name);
      }
    });
  });
  this.setState({
    dataUser: true
  })
  this.props.myPersonalDataChangeClose();
}
companyDelete = (name) => {
  this.setState({
    dataUser: true
  })
  this.props.arrayMyCompanies["clients"].map((obj,e)=> {
    if (obj.name === name){
      this.props.companyDelete(obj.id);
    }
  });
}
companyDeleteCar = (name) => {
  this.setState({
    dataUser: true
  })
  this.props.arrayMyCars.map((obj1,e1)=> {
    obj1.map((obj2,e2)=> {
      if (obj2.auto_maker_name === name){
          this.props.companyDeleteCar(obj2.id);
      }
    });
  });
}
createTable = (e) => {
  let table = [];
  table = this.state.personalDataArrayChange.map((obj,n)=> {
  if (this.state.personalDataPlaceHolder[n] === 'Ваша компания') {
    return(<tr><td id='emptyTr' onClick={(e)=>{this.companyDelete(obj);}}><Minus /></td><td>{(obj!= 0)?(<span id="comment">{this.state.personalDataPlaceHolder[n]}</span>):(null)}<input type="text"  placeholder={this.state.personalDataPlaceHolder[n]} onClick={(e)=>{this.companyEditFunction(obj);}} value={obj}/></td><td id='emptyTr' onClick={(e)=>{this.updateCompanies(e, true, obj);}}><Plus /></td></tr>);
  }
  else if (this.state.personalDataPlaceHolder[n] === 'Ваш автомобиль'){
    return(<tr><td id='emptyTr' onClick={(e)=>{this.companyDeleteCar(obj);}}><Minus /></td><td>{(obj!= 0)?(<span id="comment">{this.state.personalDataPlaceHolder[n]}</span>):(null)}<input type="text"  placeholder={this.state.personalDataPlaceHolder[n]} onClick={(e)=>{this.companyCarsEditFunction(obj);}} value={obj}/></td><td id='emptyTr' onClick={(e)=>{this.updateCompanies(e, false, obj);}}><Plus /></td></tr>);
  }
  else {
    return( <tr><td id='emptyTr'></td><td>{(obj != 0)?(<span id="comment">{this.state.personalDataPlaceHolder[n]}</span>):(null)}<input type="text" onChange={(e)=>{this.changePersonalData(e, n);}} placeholder={this.state.personalDataPlaceHolder[n]} value={obj}/></td></tr>);
  }
  });
  return table;
}
changePersonalData = (e,n) => {
  this.setState({
    personalDataArrayChange: update(this.state.personalDataArrayChange, {[n]:  {$set: e.target.value}}),
    saveChangeButton: true,
    saveSuccessful: false
  });
}

  render() {
      return (
        <div>

        {(typeof(this.props.arrayMyCompanies['clients']) != 'undefined')?(
        <div className="dark_full">
            <div id="closeModalOrders" onClick={this.props.myPersonalDataChangeClose} >&#10006;</div>
            <div id="RightAvtorization">
            <h4>Личные данные</h4>
            <div className="tableR3">
            <form>
              {this.userDataLoad()}
                      <table id="requisites">
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


export default PersonalData;
