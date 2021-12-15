import { Component } from "react";

class Product extends Component {
    render() {
        return (
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="card">
                    <img src={this.props.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.children}</h5>
                        <p className="card-text">{this.props.price}</p>
                        <a href="#" className="btn btn-primary">mua ngay</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;
