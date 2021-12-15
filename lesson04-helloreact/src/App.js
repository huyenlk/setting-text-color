
import { render } from '@testing-library/react';
import { isNumber } from 'lodash';
import { Component } from 'react';
import './App.css';
import Header from './components/header';

class App extends Component {
  ShowinforUser(user) {
    if (user.status) {
      return <h1>
        class: {user.class} <br />
        age: {user.age} <br />
        status: {user.status ? 'action' : 'pending'}
      </h1>

    };
  };
  render() {
    var a = 5;
    var b = 7;
    var user = {
      class: 'jhjh',
      age: 6,
      status: true
    };
    var users = [
      {
        id: 1,
        name: 'Nguyen van A',
        age: 18
      },
      {
        id: 2,
        name: 'Nguyen van B',
        age: 20
      },
      {
        id: 3,
        name: 'Nguyen van C',
        age: 22
      },
    ];
    var elements = users.map((user,index) =>{
      return<div key={user.id}>
        <h2>ten: {users.name}</h2>
        <p>tuoi: {user.age}</p>
      </div>

    });
    return (
      <div>
        <Header></Header>
        <div>Map Huyen</div>
        <div className="ml-30">
          <h1>{a}</h1>
          <h1>{a + b}</h1>
          {this.ShowinforUser(user)}
        </div>
        <br />
        <hr />
        {elements}
      </div>
    );
  }
}

export default App;
