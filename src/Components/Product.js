import { Component } from 'react';

class Product extends Component {
  render() {
    return (
      <div className='col-md-4 col-lg-4 col-sm-4 col-xs-4'>
        <div className="card">
          <img src={this.props.images} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{this.props.children}</h5>
            <p className="card-text">{this.props.price} VND</p>
            <button className="btn btn-primary">Mua ngay</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Product;
