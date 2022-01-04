import { Component } from 'react';

class TaskFilter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      txtCondition: 1,
      txtName: ''
    }
  }

  onHandleChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.props.onFilter(
      name === 'txtName' ? value : this.state.txtName,
      name === 'txtCondition' ? value : this.state.txtCondition
    );
    this.setState({
      [name]: value
    })

  }

  render() {
    return (
      <tr>
        <th scope="row"></th>
        <td>
          <input type="text" className="form-control" name='txtName' value={this.state.txtName} onChange={this.onHandleChange} />
        </td>
        <td>
          <select className="form-select" name='txtCondition' value={this.state.txtCondition} onChange={this.onHandleChange}>
            <option value={1}>Tat ca</option>
            <option value={2}>An</option>
            <option value={3}>Kich hoat</option>
          </select>
        </td>
        <td></td>
      </tr>
    );
  }
}

export default TaskFilter;