import { Component } from 'react';

class Reset extends Component {

  render() {
    return (
      <button type="button" className="btn btn-primary" onClick={()=>this.props.onReset(this.props.size, this.props.item, this.props.padding)}>Reset</button>
    );
  }
}

export default Reset;
