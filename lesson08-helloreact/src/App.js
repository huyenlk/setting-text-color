import { Component } from "react";
import Product from './Component/Product';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
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
          status: false,
        },
      ],
      isActive: true
    };
  }
  onSetState=()=> {
    if (this.state.isActive === true) {
      this.setState({
        isActive: false
      });
    } else if (this.state.isActive === false) {
      this.setState({
        isActive: true
      });
    }
  }
  render() {

    let elements = this.state.products.map((product, index) => {
      let result = '';
      if (product.status) {
        result = (
          <tr key={index}>
            <th scope="row">{index}</th>
            <td>{product.name}</td>
            <td>{product.price}</td>
          </tr>
        )
      }
      return (result)
    });
    return (
      <div>
        <div>
          <div className="container">
            <a>state</a>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="row">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">stt</th>
                    <th scope="col">Ten san pham</th>
                    <th scope="col">gia</th>
                  </tr>
                </thead>
                <tbody>
                  {elements}
                </tbody>
              </table>
              <button onClick={this.onSetState}>
                active: {this.state.isActive === true ? 'true' : 'fasle'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
