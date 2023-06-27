import React from 'react'

export default class MyTable extends React.Component {

  createTable = () => {
    let table = []

    // Outer loop to create parent
    let children = ['Шины и диски',
     'Масла, смазки, жидкости',
    'Аккумуляторы и принадлежности',
     'Инструменты', 'Автозапчасти',
      'Автоаксессуары', 'Фильтры для авто',
       'Автоэлектроника', 'Электрооборудование',
       'Автокосметика и автохимия',
       'Крепеж, метизы, заглушки, ремкомплекты'
     ];
    for (let i = 0; i < children.length; i++) {
      table.push(<tr><td>{children[i]}</td></tr>)
    }
    return table
  }


  render() {
    return(
      <table>
      <tbody>
        {this.createTable()}
        </tbody>
      </table>
    )
  }

}
