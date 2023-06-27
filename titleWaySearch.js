import React from 'react';
/*import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import ReactDOM from 'react-dom';*/
import './index.css';

class TitleWaySearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchRequestTitle: ''
          }
  }



  render() {
    return (
      <div className="buttonFilter">
        <table id="brandSearchTable">
          <tbody>
            <tr><td>Scoda Octavia 2016</td>
            <td id='gray'>&#8594;</td>
            <td>Кузов</td>
            <td id='gray'>&#8594;</td>
            <td>Передняя часть</td>
            <td id='gray'>&#8594;</td>
            <td>Бампер</td>
            <td id='gray'>&#8594;</td>
            <td>Узел № 807-000</td>
            <td id='gray'>&#8594;</td>
            <td >Облицовка бампера</td>
            </tr>
          </tbody>
        </table>


      <h3 id="searchRequestH">{this.state.searchRequestTitle}</h3>
      </div>
    );
  }
}

export default TitleWaySearch;
