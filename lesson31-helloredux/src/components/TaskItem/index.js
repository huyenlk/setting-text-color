import styles from "./styles.module.scss";
import cx from "classnames";
import { Component } from "react";

class TaskItem extends Component {
  onUpdateStatus = () => {
    this.props.onUpdateStatus(this.props.task.id);
  }
  onDelete = () => {
    this.props.onDelete(this.props.task.id);
  }
  onUpdate = () => {
    this.props.onUpdate(this.props.task.id);
  }
  render() {
    var { task, index } = this.props;
    return (
      <tr>
        <th scope="row"> {index + 1}</th>
        <td>{task.name}</td>
        <td>
          <button
            type="button"
            class={task.status === true ? 'btn btn-danger' : 'btn btn-success'}
            onClick={this.onUpdateStatus}
          >
            {task.status === true ? 'Kich hoat' : 'An'}
          </button>
        </td>
        <td>
          <button
            type="button"
            class="btn btn-warning"
            onClick={this.onUpdate}
          >Sua
          </button>
          &nbsp;
          <button
            type="button"
            class="btn btn-danger"
            onClick={this.onDelete}
          >
            Xoa
          </button>
        </td>
      </tr>
    );
  };
}

export default TaskItem;
