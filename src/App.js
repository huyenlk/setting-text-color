import './App.css';
import { Component } from 'react';
import Product from './Components/Product';

class App extends Component {
  render() {
    var Products = [
      {
        id: 1,
        name: 'apple ip 6s plus 16GB',
        price: 15000000,
        images: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/thumbnail/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone_6s_plus_2.jpg',
        status: true
      },
      {
        id: 2,
        name: 'ss galaxy s7',
        price: 15000000,
        images: 'https://www.viettablet.com/images/detailed/26/samsung-galaxy-s7-edge-viettablet.png',
        status: true
      },
      {
        id: 3,
        name: 'apple ip 6s plus 16GB',
        price: 15000000,
        images: 'https://cdn.tgdd.vn/Products/Images/42/89692/oppo-f1s-mau-den-org-den.png',
        status: false
      }
    ];
    return (
      <div>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-dark">Props</button>
        </div>
        <div className='container'>
          <div className='row'>
            {Products.map((Products, index) => {
              let result = ''
              if (Products.status) {
                return result = <Product
                  key={Products.id}
                  price={Products.price}
                  images={Products.images}
                >
                  {Products.name}
                </Product>
              }
              return result;
            })};
          </div>
        </div>
      </div>
    );
  }
}
export default App;
