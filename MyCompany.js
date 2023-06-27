import React from 'react'
/*import { render } from 'react-dom';
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';*/
import './index.css';
import update from 'immutability-helper';
export class MyCompany extends React.Component {

      constructor(props) {
        super(props);
        this.state = {
          dataUser: true,
          saveChangeButton: false,
          saveSuccessful: false,
          arrayStop: false,
          arraySelectors: [['','',''],['','','','',''],['','','','']],
          arrayCompanyClient: [],
          arrayDataCompany1: [],
          arrayDataCompany2: [],
          arrayDataCompanyChange1: ['','','','','','','',''],
          arrayDataCompanyChange2: ['','','','','','','',''],
          arrayDataCompanyChange: [],
          arrayDataCompanyPlaceHolder: ['ОКОПФ','ОКПО','Тип компании','ОКВЕД','Система налогообложения','Руководитель','Наименование организации', 'Должность руководителя', 'ИНН', 'Бухгалтер', 'КПП', 'Должность бухгалтера', 'Юридический адрес', 'Телефон', 'ОГРН', 'E-mail'],
          arraySelect: [['ИП','Общества с ограниченной ответственностью','Физическое лицо'], ['Покупатель','Поставщик','Моя компания','Покупатель/Поставщик','Перевозщик'], ['- 0 %','ОСНО 20 %','УСН Доходы 6 %','Доходы минус расходы 15 %']],
        }
      }

clickSaveChanges = (e) => {
   this.setState({
     saveSuccessful: true,
     saveChangeButton: false,
     dataUser: true
   });
   this.props.clickUserDataSave(this.state.arrayDataCompanyChange1.concat(this.state.arrayDataCompanyChange2));
}
arrayDataCompanyFunction = (arr)=> {
  if (this.state.arrayStop === false){
  this.setState({
    arrayDataCompany1:[arr.type, arr.btype, arr.tax_type, arr.name, arr.inn, arr.kpp, arr.address, arr.ogrn],
    arrayDataCompany2: [arr.okpo, arr.okved, arr.ruk, arr.rukdol, arr.buhgalter, arr.buhgalterType, arr.mphone, arr.email],
    arrayStop: true,
  })
  this.state.arrayDataCompany1 = [arr.type, arr.btype, arr.tax_type, arr.name, arr.inn, arr.kpp,arr.address, arr.ogrn];
  this.state.arrayDataCompany2 = [arr.okpo, arr.okved, arr.ruk, arr.rukdol, arr.buhgalter, arr.buhgalterType, arr.mphone, arr.email];
}
else {
  this.setState({
    arrayDataCompany1: this.state.arrayDataCompanyChange1,
    arrayDataCompany2: this.state.arrayDataCompanyChange2,
  })
  this.state.arrayDataCompany1 = this.state.arrayDataCompanyChange1;
  this.state.arrayDataCompany2 = this.state.arrayDataCompanyChange2;
}
}
selectors = (array, i, type) => {
  array.map((obj,e)=> {
    if(parseInt(type, 10) == (e+1)) {
      this.setState({
        arraySelectors: update(this.state.arraySelectors, {[e]:  {$set: 'selected'}}),
      })
      this.state.arraySelectors[i][e] = 'selected';
    }
    else {
    this.setState({
      arraySelectors: update(this.state.arraySelectors, {[e]:  {$set: ''}}),
    })
    this.state.arraySelectors[i][e] = '';
  }
  });
}
userDataLoad = (e) => {
  if (this.state.dataUser === true) {
    this.props.arrayMyCompanies["clients"].map((obj,e)=> {
      if (this.props.companyID === obj.id) {
        this.setState({
          arrayCompanyClient: this.props.arrayMyCompanies["clients"][e]
        })
        this.state.arrayCompanyClient = this.props.arrayMyCompanies["clients"][e];
      }
    });
    this.arrayDataCompanyFunction(this.state.arrayCompanyClient);
    this.selectors(this.state.arraySelectors[0], 0, this.state.arrayDataCompany1[0]);
    this.selectors(this.state.arraySelectors[1], 1, this.state.arrayDataCompany1[1]);
    this.selectors(this.state.arraySelectors[2], 2, this.state.arrayDataCompany1[2]);
    this.state.arrayDataCompany1.map((obj,e)=> {
      if(typeof(obj) != 'undefined') {
      this.setState({
        arrayDataCompanyChange1: update(this.state.arrayDataCompanyChange1, {[e]:  {$set: obj}}),
        dataUser: false,
      })
      this.state.arrayDataCompanyChange1[e] = obj;
    }
    });
    this.state.arrayDataCompany2.map((obj,e)=> {
      if(typeof(obj) != 'undefined') {
      this.setState({
        arrayDataCompanyChange2: update(this.state.arrayDataCompanyChange2, {[e]:  {$set: obj}}),
      })
      this.state.arrayDataCompanyChange2[e] = obj;
    }
    });

  if (this.props.newCompany === true) {
    this.setState({
      arraySelectors: [['selected','',''],['selected','','','',''],['selected','','','']],
      arrayDataCompanyChange1: [1,1,1,'','','','',''],
      arrayDataCompanyChange2: ['','','','','','','',''],
    })
  }
}
}
createTable = (e) => {
  let table = [];
  var i=0, j=0, m1=0, m2=1;
  table = this.state.arrayDataCompanyChange1.map((obj,n)=> {
  if (n == 0 || n == 1 || n == 2) {
    if (n> 0) {i++; j++; m1 =n+1*j; m2 =n+1+1*j; }
    return(<tr><td><span id="comment">{this.state.arrayDataCompanyPlaceHolder[m1]}</span>
      <select  onChange={(e)=>{this.changeDataCompany1(e, n);}} id="listOKOPF">{this.createSelectTable(this.state.arraySelectors[i],this.state.arraySelect[i])}</select></td>

      <td>{(this.state.arrayDataCompanyChange2[n].length != 0)?(<span id="comment">{this.state.arrayDataCompanyPlaceHolder[m2]}</span>):(null)}<input type="text" onChange={(e)=>{this.changeDataCompany2(e, n);}} placeholder={this.state.arrayDataCompanyPlaceHolder[m2]} value={this.state.arrayDataCompanyChange2[n]}/></td></tr>);
  }
  else {
    if (n> 0) { j++; m1 =n+1*j; m2 =n+1+1*j; }
    return(<tr><td>{(this.state.arrayDataCompanyChange1[n].length != 0)?(<span id="comment">{this.state.arrayDataCompanyPlaceHolder[m1]}</span>):(null)}<input type="text" onChange={(e)=>{this.changeDataCompany1(e, n);}} placeholder={this.state.arrayDataCompanyPlaceHolder[m1]} value={this.state.arrayDataCompanyChange1[n]}/></td>

    <td>{(this.state.arrayDataCompanyChange2[n]!= 0)?(<span id="comment">{this.state.arrayDataCompanyPlaceHolder[m2]}</span>):(null)}<input type="text" onChange={(e)=>{this.changeDataCompany2(e, n);}} placeholder={this.state.arrayDataCompanyPlaceHolder[m2]} value={this.state.arrayDataCompanyChange2[n]}/></td></tr>);
  }
  });
  return table;
}
createSelectTable = (array, arr) => {
  let list = [];
  list = array.map((obj, e) => {
  return(<option value={e+1} selected={obj}>{arr[e]}</option>);
  });
  return list;
}
changeDataCompany1 = (e,n) => {
  this.setState({
    arrayDataCompanyChange1: update(this.state.arrayDataCompanyChange1, {[n]:  {$set: e.target.value}}),
    saveChangeButton: true,
    saveSuccessful: false
  });
  this.state.arrayDataCompanyChange1[n] = e.target.value;
}
changeDataCompany2 = (e,n) => {
  this.setState({
    arrayDataCompanyChange2: update(this.state.arrayDataCompanyChange2, {[n]:  {$set: e.target.value}}),
    saveChangeButton: true,
    saveSuccessful: false
  });
  this.state.arrayDataCompanyChange2[n] = e.target.value;
}

  render() {
      return (
        <div>
        {(typeof(this.props.arrayMyCompanies['clients']) != 'undefined')?(
        <div className="dark_full">
            <div id="closeModalOrders" onClick={this.props.companyEditClose} >&#10006;</div>
            <div id="RightAvtorization">
            {(this.props.newCompany === true)?(<h4>Добавить новую компанию</h4>):(<h4>Редактировать {this.state.arrayDataCompany1[3]}</h4>)}

            <div className="tableR4">
            <form>
              {this.userDataLoad()}
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


export default MyCompany;
