import { Component } from 'react';

class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      pound: true,
      action: '',
    }
  }

  onHandleChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    if (name === 'pound') {
      value = target.value === 'false' ? false : true;
    }
    this.setState({
      [name]: value
    })
  }

  onHandleSubmit = (event) => {
    event.preventDefault();
    this.props.onAddTask(this.state);
    this.props.onButtonX(this.props.status);
  }

  onReset = () => {
    this.setState({
      name: '',
      pound: ''
    })
  }

  componentDidMount = () => {
    if (this.props.taskEditing) {
      this.setState({
        id: this.props.taskEditing.id,
        name: this.props.taskEditing.name,
        pound: this.props.taskEditing.pound
      })
    }
  }

  render() {
    return (
      <form className="card" onSubmit={this.onHandleSubmit}>
        <div className="card-header">
          <span>{this.state.id ? 'Sua cong viec' : 'Them cong viec'}</span>
          <button type="button" className="btn" style={{ marginLeft: 100 }} onClick={() => this.props.onButtonX(this.props.status)}>x</button>&nbsp;
        </div>
        <div className="card-body">
          <span>Ten: </span>
          <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.onHandleChange} />
          <span>Trang thai: </span>
          <select className="form-select" name="pound" value={this.state.pound} onChange={this.onHandleChange}>
            <option value={true}>Kich hoat</option>
            <option value={false}>An</option>
          </select>
          <button type="submit" className="btn btn-warning" >Luu lai</button>&nbsp;
          <button type="button" className="btn btn-danger" onClick={() => this.onReset(this.state)}>Huy bo</button>
        </div>
      </form>
    );
  }
}

export default AddForm;