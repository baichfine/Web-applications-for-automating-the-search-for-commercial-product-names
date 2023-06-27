import React from 'react';

import './index.css';

export class MyMenu extends React.Component {
   render(){
       return (

         <div className="fullLogin" >

           <div id="modalLoginMenu">
            <ul>
                <li>Мои заказы</li>
                <li>Личные данные</li>
                <li>Изменить пароль</li>
                <li>Выйти</li>

            </ul>
            </div>
         </div>
       );
   }
}


export default MyMenu;
