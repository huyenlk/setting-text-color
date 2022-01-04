import { Component } from 'react';
import TaskItemCondition from './TaskItemCondition';

class TaskItem extends Component {
  render() {
    return (
      <tr>
        <th scope="row">{this.props.id}</th>
        <td>{this.props.name}</td>
        <TaskItemCondition
          {...this.props}
        />
        <td>
          <button type="button" className="btn btn-warning" onClick={()=>this.props.onFix()}>{this.props.action}Sua</button>&nbsp;
          <button type="button" className="btn btn-danger" onClick={()=>this.props.onDelete(this.props.index)}>{this.props.action}Xoa</button>
        </td>
      </tr>
    );
  }
}

export default TaskItem;