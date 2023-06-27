import React, { Component } from 'react'
/*import { Button, Header, Icon, Modal } from 'semantic-ui-react'*/
import './index.css';



export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("http://192.168.35.148:84/api/index.php",{
       method: 'post',
       headers: {'Content-Type':'application/json; charset=UTF-8'},
       body: {"action":"user_login","login":"ramis","password":"Ramis16"}
    })
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
        // чтобы не перехватывать исключения из ошибок в самих компонентах.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Загрузка...</div>;
    } else {
      return (
        <div>
        <ul>
          {items.map(item => (
            <li key={item.status}>
              {item.status} {item.sesskey}
            </li>
          ))}
        </ul>
        </div>
      );
    }
  }
}
