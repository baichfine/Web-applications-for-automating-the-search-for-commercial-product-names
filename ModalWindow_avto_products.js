import React, { Component } from 'react'


export default class ModalControlled extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      classChange: "modalw",
      column1: ["Шины и диски","Масла, смазки, жидкости", "Аккумуляторы и принадлежности","Инструменты","Автозапчасти","Автоаксессуары", "Фильтры для авто", "Автоэлектроника", "Электрооборудование", "Автокосметика и автохимия", "Крепеж, метизы, заглушки, ремкомплекты"],
      column2: [["Камеры","Колесные диски","Колпаки","Крепежи и принадлежности колёс"],
      ["Автомасла","Жидкости омывателя","Эксплуатационные жидкости","Присадки","Масла индустриальные","Масла для мототехники"],["Аккумуляторные батареи","Провода прикуривателя", "Устройства зарядные для АКБ"]],
      column3: [[], [[],["Незамерзающая жидкость","Омыватель летний для стёкол"]], []],
      selectedColumn2: [],
      selectedColumn3: [],
      numberColumn: '',
      classBorderTd: "AutoProducts1",
      selectedColumn3: "undefined",
      selectedColumn2: "undefined",
    }
}

handleOpen = (e) => {
  this.setState({
    modalOpen: !this.state.modalOpen,
    classChange: "modalw",
    classBorderTd: "AutoProducts1"
  })
}
createTableNew = (array, column) => {
  let table = [];
  if (typeof(array) !== "undefined")
  table=array.map((obj,i)=> {
  return (<tr key={obj}><td onMouseEnter={(e) => this.createColumn2(i,column)}>{obj}</td></tr>);
});
return table;
}
createColumn2 = (e, column) => {
  if (column === this.state.column2){
  if (typeof(this.state.column2[e]) !== "undefined"){
    this.setState({
      selectedColumn3: "undefined",
      selectedColumn2: this.state.column2[e],
      classChange: "modalw2",
      numberColumn: e,
      classBorderTd: "AutoProducts2"
    })
  }
  else {this.setState({
    selectedColumn3: "undefined",
    selectedColumn2: "undefined",
    classChange: "modalw",
  })
}
}
else if (column === this.state.column3) {
  if (typeof(this.state.column3[this.state.numberColumn][e]) !== "undefined" && this.state.column3[this.state.numberColumn][e] != ""){
    this.setState({
      selectedColumn3: this.state.column3[this.state.numberColumn][e],
      classChange: "modalw3"
    })
  }
  else this.setState({
    selectedColumn3: "undefined",
    classChange: "modalw2"
  })
}
}
componentWillUnmount() {
  document.removeEventListener('click', this.handleClickOutside, false);
}
UNSAFE_componentWillMount() {
  document.addEventListener('click', this.handleClickOutside, false);
}
handleClickOutside = (e) => {
  const avtoButton = document.getElementById('avto_prod');
  const avto = document.querySelector('.' + this.state.classChange);
  if (!e.path.includes(avto) && !e.path.includes(avtoButton))
  this.setState({
     modalOpen: false,
     classChange: "modalw",
     classBorderTd: "AutoProducts1",
     selectedColumn3: "undefined",
     selectedColumn2: "undefined",
  })
}

  render() {
    if(this.props.orderActiveWindow === false) {
    return (
      <div id="avto">
      <button className="left_menu" id="avto_prod"  onClick={this.handleOpen}>АВТОТОВАРЫ  &#160;<svg xmlns="http://www.w3.org/2000/svg" width="15" height="10.5" viewBox="0 0 10 7">
          <path fill="#000" fillRule="evenodd" d="M.757 2L2.172.586 5 3.414 7.828.586 9.243 2 5 6.243z"/>
      </svg></button>
        {(this.state.modalOpen === true)?(
        <div className ="fullAutoProducts"><div className={this.state.classChange}>
        <table><tr>
        <td id={this.state.classBorderTd}><table><tbody>{this.createTableNew(this.state.column1, this.state.column2)}</tbody></table></td>
        {(this.state.selectedColumn2 !== "undefined")?(
        <td id={this.state.classBorderTd}><table><tbody>{this.createTableNew(this.state.selectedColumn2, this.state.column3)}</tbody></table></td>
        ):(null)}
        {(this.state.selectedColumn3 !== "undefined")?(
        <td id={this.state.classBorderTd}><table><tbody>{this.createTableNew(this.state.selectedColumn3, this.state.column1)}</tbody></table></td>
        ):(null)}
        </tr></table>
        </div></div>):(null)}

        </div>)
  }
  else return (null)
  }
}
