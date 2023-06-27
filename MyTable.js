import React from 'react'
/*import { Button, Header, Icon, Modal } from 'semantic-ui-react'*/
import './index.css';

export default class MyTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId: 0,
      selectedChild: false
    }

    this.name1=new Array();
    this.id=0;
    this.name1[0] =
      [
        {
          id:1,
          abbr:"tire",
          name:"Шины и диски"
        },
        {
          id:2,
          abbr:"oil",
          name:"Масла, смазки, жидкости"
        },

        {
        id: 3,
        abbr:"battery",
        name:"Аккумуляторы и принадлежности",

      },
        {
        id: 4,
        abbr:"tools",
        name:"Инструменты"
        },
      {
        id: 5,
        abbr:"autoParts",
        name:"Автозапчасти"
      },
      {
        id: 6,
        abbr:"accessory",
        name:"Автоаксессуары"
      },
      {
        id: 7,
        abbr:"filter",
        name:"Фильтры для авто"
      },
      {
        id: 8,
        abbr:"electronics",
        name:"Автоэлектроника"
      },
      {
        id: 9,
        abbr:"equipment",
        name:"Электрооборудование"
      },
      {
        id: 10,
        abbr:"chemistry",
        name:"Автокосметика и автохимия"
      },
      {
        id: 11,
        abbr:"fastener",
        name:"Крепеж, метизы, заглушки, ремкомплекты"
      },

    ];

  this.name1[1]=[
              {
                id:101,
                name:"Авторезина"
              },
              {
                id:102,
                name:"Камеры"
              },
              {
                id:103,
                name:"Колесные диски"
              },
              {
                id:104,
                name:"Колпаки"
              },
              {
                id:105,
                name:"Крепежи и принадлежности колёс"
              }
            ];

  this.name1[2]=[
              {
                id: 201,
                name:"Автомасла"
              },
              {
                id: 202,
                name:"Жидкости омывателя"
              },
              {
                id: 203,
                name:"Эксплуатационные жидкости"
              },
              {
                id: 204,
                name:"Присадки"
              },
              {
                id: 205,
                name:"Масла индустриальные"
              },
              {
                id: 206,
                name:"Масла для мототехники"
              }
            ];

  this.name1[3]=[
              {
                id: 301,
                name:"Аккумуляторные батареи"
              },
              {
                id: 302,
                name:"Провода прикуривателя"
              },
              {
                id: 303,
                name:"Устройства зарядные для АКБ"
              }
            ];

this.name1[202]=[
              {
                id:2021,
                name:"Незамерзающая жидкость"
              },
              {
                id: 2022,
                name:"Омыватель летний для стёкол"
                }
              ];
}
    checkChild(id) {
        if (typeof(this.name1[this.id]) != "undefined" )
       this.setState({selectedChild: true});
       else {
        this.setState({selectedChild: false});
       }
       alert(this.state.selectedChild)}
    func() {
  this.setState({selectedChild: true});
}

  createTable = (id) => {
    let table = []
    if (typeof(this.name1[id]) != "undefined" ) {
      table=this.name1[id].map((obj,i)=> {
      return (<tr key={obj.id}><td onMouseEnter={(id) => this.setId(obj.id)}
      >{obj.name}</td></tr>);
    });
}

else {

if (typeof(this.name1[this.id  % 100]) != "undefined" )
  table=this.name1[this.id  % 100].map((obj,i)=> {
  return (<tr key={obj.id}><td
  >{obj.name}</td></tr>);
});
};
    return table;
  }

  setId = (id) => {
    this.id=id;
    this.setState({selectedId: this.id});
    return <div className="modalw3"> 333</div>;

  }


  render() {

    return(
      <div>
      <table>
      <tbody>
        {this.createTable(0)}
        </tbody>
      </table>

        {(this.state.selectedId !== 0) ? (<div className="modalw2"><table>
        <tbody>
          {this.createTable(this.state.selectedId)}
          </tbody>
        </table></div>) : (null)}
{(this.state.selectedId === 202 || this.state.selectedId === 2021 || this.state.selectedId === 2022) ? (<div><div className="modalw2"><table>
<tbody>
  {this.createTable(2)}
  </tbody>
</table></div><div className="modalw3"><table>
<tbody>
  {this.createTable(202)}
  </tbody>
</table></div></div>) : (null)}

        </div>
    )
  }
}
