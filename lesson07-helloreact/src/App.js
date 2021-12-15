import { Component } from "react";
import styles from './App.css';
import Product from './Component/Product';
import cx from 'classnames';

class App extends Component {
  render() {
    var products = [
      {
        id: 1,
        name: 'Ip',
        price: '15000000',
        img: 'https://th.bing.com/th/id/R.eb3d4477dda6e3552a90a6a03d649cc0?rik=wgoxY3jJ6HcNBQ&pid=ImgRaw',
        status: true,
      },
      {
        id: 2,
        name: 'SS',
        price: '17000000',
        img: 'https://th.bing.com/th/id/OIP.jReLXfph4Sh_WQMiVHHitQAAAA?pid=ImgDet&w=193&h=104&c=7',
        status: true,
      },
      {
        id: 3,
        name: 'Nokia',
        price: '18000000',
        img: 'https://i1.wp.com/trueviewvisuals.com/wp-content/uploads/2018/11/Strathblane.jpg?fit=1200%2C910&ssl=1',
        status: true,
      },
    ];
    let elements = products.map((product, index) => {
      let result ='';
      if(product.status){
        result= (
          <Product
            price={product.price}
            img={product.img}>
            {product.name}
          </Product>
        )
      }
      return (result)
    });
    return (
      <div>
        <div>
          <div className="container">
            <a>props</a>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                {elements}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
