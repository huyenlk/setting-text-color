import { Component } from 'react';

class AddButton extends Component {
  render() {
    return (
      <div className="col">
        <button type="button" className="btn btn-primary" onClick={()=>this.props.onOpenForm(this.props.status)}>Them cong viec</button>
      </div>
    );
  }
}

export default AddButton;