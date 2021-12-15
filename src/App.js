import { Component } from 'react';
import Header from './Components/Header';
import Product from './Components/Product';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className='row'>
          <div className='col-md-3 col-lg-3 col-sm-3 col-xs-3'>
            <Product />
          </div>
          <div className='col-md-3 col-lg-3 col-sm-3 col-xs-3'>
            <Product />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
