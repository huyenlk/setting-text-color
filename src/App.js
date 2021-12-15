import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Products: [
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
          status: true
        }
      ],
      isActive: true
    };
  }
  onSetState = () => {
    if (this.state.isActive === true) {
      this.setState({
        isActive: false
      });
    } else {
      this.setState({
        isActive: true
      });
    }
  }

  render() {
    return (
      <div>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-dark">State</button>
        </div>
        <div className='container'>
          <div className='row'>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">STT</th>
                  <th scope="col">Ten san pham</th>
                  <th scope="col">Gia</th>
                </tr>
              </thead>
              {this.state.isActive === true ? <tbody>
                {this.state.Products.map((Products, index) => {
                  return <tr key={index}>
                    <th scope="row">{Products.id}</th>
                    <td>{Products.name}</td>
                    <td>{Products.price}</td>
                  </tr>
                })}
              </tbody> : ''}

            </table>
            <button type="button" className="btn btn-warning" onClick={this.onSetState}>
              Active: {this.state.isActive === true ? 'true' : 'false'}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
