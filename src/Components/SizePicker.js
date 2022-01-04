import { Component } from "react";

class SizePicker extends Component {

  render() {
    
    return (
      <div className="card">
        <div className="card-header">
          Size: {this.props.size}px
        </div>
        <div className="card-body">
          <button type="button" className="btn btn-success" onClick={()=>this.props.onDown(this.props.size, this.props.padding)}>Giam</button>
          &nbsp;
          <button type="button" className="btn btn-success" onClick={()=>this.props.onUp(this.props.size, this.props.padding)}>Tang</button>
        </div>
      </div>
    );
  }
}

export default SizePicker;
