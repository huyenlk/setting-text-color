import { Component } from 'react';

class Product extends Component {

  /*constructor(props) {
    super(props);
    this.onAddToCard =this.onAddToCard.bind(this);
  }*/

  onAddToCard = () => {
    alert(this.props.children+'-'+this.props.price);
  }

  render() {
    return (
      <div className='col-md-4 col-lg-4 col-sm-4 col-xs-4'>
        <div className="card">
          <img src={this.props.images} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{this.props.children}</h5>
            <p className="card-text">{this.props.price} VND</p>
            <button className="btn btn-primary" onClick={this.onAddToCard}>Mua ngay</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Product;
