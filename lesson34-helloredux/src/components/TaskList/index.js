import styles from "./styles.module.scss";
import cx from "classnames";
import TaskItem from "../TaskItem";
import { Component } from "react";
import {connect} from 'react-redux';

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state={
      filterName: '',
        filterStatus: -1
    };
  }
  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.props.onFilter(
      name === 'filterName' ? value : this.state.filterName,
      name === 'filterStatus' ? value : this.state.filterStatus
    )
    this.setState({
      [name]: value
    });
  }
  render() {
    var { tasks } = this.props;
    var { filterName, filterStatus } = this.state;
    var elmTasks = tasks.map((task, index) => {
      return <TaskItem
        key={task.id}
        index={index}
        task={task}
        onUpdateStatus={this.props.onUpdateStatus}
        onDelete={this.props.onDelete}
        onUpdate={this.props.onUpdate}
      />
    });
    return (
      <table className={cx("table", styles.lettersPositionTable)}>
        <thead>
          <tr>
            <th scope="col">STT</th>
            <th scope="col">Tên</th>
            <th scope="col">Trạng Thái</th>
            <th scope="col">	Hành Động</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"></th>
            <td>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="filterName"
                  value={filterName}
                  onChange={this.onChange}
                />
              </div>
            </td>
            <td>
              <select
                className="form-select"
                name="filterStatus"
                value={filterStatus}
                onChange={this.onChange}
              >
                <option value="-1" selected>Tat ca</option>
                <option value="1">An</option>
                <option value="2">Kich hoat</option>
              </select>
            </td>
            <td></td>
          </tr>
          {elmTasks}
        </tbody>
      </table>
    );
  };
}

const mapStateToProps = state =>{
  return {
    tasks : state.tasks
  }
};

export default connect(mapStateToProps, null)(TaskList);
