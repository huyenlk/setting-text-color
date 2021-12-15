import { Component } from 'react';

class Product extends Component {
  render() {
    return (
      <div className="card">
        <img src="https://nhattao.cdnforo.com/attachment-files/2017/05/8390859_18402638_10203027086395720_1137956085423392244_n.jpg" className="card-img-top" alt=" " />
        <div className="card-body">
          <h5 className="card-title">Ip 6 plus</h5>
          <p className="card-text">16000</p>
          <a className="btn btn-primary">Mua hang</a>
        </div>
      </div>
    );
  }
}
export default Product;
