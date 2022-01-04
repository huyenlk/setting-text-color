import { Component } from 'react';

class TaskItemCondition extends Component {
  render() {
    return (
      <td>
        <button className={this.props.pound? 'btn btn-danger':'btn btn-primary'} type="button" onClick={() => this.props.onCondition()}>
          {this.props.pound ? 'Kich hoat' : 'An'}
        </button>
      </td>
    );
  }
}

export default TaskItemCondition;