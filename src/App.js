import { Component } from 'react';
import './App.css';

class App extends Component {
  showInforProduct(product) {
    if (product.status) {
      return <h3>
        id:{product.id} <br />
        name:{product.name} <br />
        price:{product.price} VND <br />
        status: 'Active'
      </h3>
    } else {
      return <h3>
        id:{product.id} <br />
        name:{product.name} <br />
        price:{product.price} VND <br />
        status: '_Pending'
      </h3>
    }
  }
  render() {
    var a = 5;
    var b = 7;
    var name = 'huyenmap';
    var product = {
      id: 1,
      name: 'ip 7 plus',
      price: 15000000,
      status: true
    };
    var user = [
      {
        id: 1,
        name: 'Nguyen Van A',
        age: 18
      },
      {
        id: 2,
        name: 'Nguyen Van B',
        age: 19
      },
      {
        id: 3,
        name: 'Nguyen Van C',
        age: 20
      }
    ];
    return (
      <div>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-dark">Title</button>
          <button type="button" className="btn btn-dark active">Home</button>
          <button type="button" className="btn btn-dark">Link</button>
        </div>
        <div className='ml-30'>
          <h2>
            a: {a} <br />
            b: {b} <br />
            a+b={a + b}
          </h2>
          <h3>{name}</h3>
          {this.showInforProduct(product)}
          <hr />
          {user.map((user, index) => {
            return <div key={user.id}>
                     <h2>
                      name: {user.name} <br />
                      age: {user.age}
                     </h2>
                   </div>
          })};
          {/*<h3>
            id:{product.id} <br />
            name:{product.name} <br />
            price:{product.price} VND <br />
            status: {product.status? 'Active':'Pending'}
          </h3>*/}
        </div>
      </div>
    );
  }
}
export default App;
