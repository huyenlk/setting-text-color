import styles from "./styles.module.scss";
import cx from "classnames";
import { Component } from "react";
import { render } from "@testing-library/react";
import TaskSearchControl from "../TaskSearchControl";
import TaskSortConTrol from "../TaskSortControl";

class TaskControl extends Component {
  render(){
    return (
      <div className="input-group mb-3">
        <TaskSearchControl onSearch={this.props.onSearch}/>
        &nbsp;
        <TaskSortConTrol />
      </div>

    );
  };
}

export default TaskControl;
