import { Component } from 'react';


class Content extends Component {

  constructor(props){
    super(props);
    this.state={
      
    }
  }


  render() {
    return (
      <div>
        <div>Color:{this.props.item} - Fontsize: {this.props.size}px</div>
        <div
          className="col-md-10 col-sm-10 col-lg-10 col-xs-10 border border-danger"
          style={{ color: this.props.item, padding: this.props.padding}}
        >
          Noi dung setting
        </div>
      </div>
    );
  }
}

export default Content;
