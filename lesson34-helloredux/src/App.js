import styles from "./styles.module.scss";
import cx from "classnames";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { Component } from "react";
import {findIndex,  filter as lodashFilter} from 'lodash';
import TaskControl from "./components/TaskControl";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisplayForm: false,
      taskEditing: null,
      filter: {
        name: '',
        status: -1
      },
      keyword: '',
      sort: {
        by: 'name',
        value: 1
      }
    };
  }
  
  onToggleForm = () => {
    if (this.state.isDisplayForm && this.state.taskEditing !== null) {
      console.log('th1');
      this.setState({
        isDisplayForm: true,
        taskEditing: null
      });
    } else {
      this.setState({
        isDisplayForm: !this.state.isDisplayForm,
        taskEditing: null
      });
    }

  }
  onCloseForm = () => {
    this.setState({
      isDisplayForm: false
    });
  }
  onShowForm = () => {
    this.setState({
      isDisplayForm: true
    });
  }
  onSubmit = (data) => {
    var { tasks } = this.state;
    if (data.id === '') {
      data.id = this.generateID();
      tasks.push(data);
    } else {
      var index = this.findIndex(data.id);
      tasks[index] = data;
    }
    this.setState({
      tasks: tasks,
      taskEditing: null
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  onUpdateStatus = (id) => {
    var { tasks } = this.state;
    var index = findIndex(tasks, (task) => {
      return task.id === id;
    });
    tasks[index].status = !tasks[index].status;
    this.setState({
      tasks: tasks
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  onFilter = (filterName, filterStatus) => {
    filterStatus = parseInt(filterStatus, 10);
    this.setState({
      filter: {
        name: filterName.toLowerCase(),
        status: filterStatus
      }
    });
  }
  findIndex = (id) => {
    var { tasks } = this.state;
    var result = -1;
    tasks.forEach((task, index) => {
      if (task.id === id) {
        result = index;
      }
    });
    return result;
  }
  onDelete = (id) => {
    var { tasks } = this.state;
    var index = this.findIndex(id);
    if (index !== -1) {
      tasks.splice(index, 1);
      this.setState({
        tasks: tasks
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    this.onCloseForm();
  }
  onUpdate = (id) => {
    var { tasks } = this.state;
    var index = this.findIndex(id);
    var taskEditing = tasks[index];
    this.setState({
      taskEditing: taskEditing
    });
    this.onShowForm();
  }
  onSearch = (keyword) => {
    this.setState({
      keyword: keyword
    });
  }
  render() {
    var {isDisplayForm, taskEditing, filter, keyword } = this.state;
    //if (filter) {
      //if (filter.name) {
        //tasks = tasks.filter((task) => {
          //return task.name.toLowerCase().indexOf(filter.name) !== -1;
        //});
      //}
      //tasks = tasks.filter((task) => {
        //if (filter.status === -1) {
          //return task;
        //} else {
          //return task.status === (filter.status === 2 ? true : false)
        //}
      //});
    //}
    //if (keyword) {
    // tasks = tasks.filter((task) => {
    //  return task.name.toLowerCase().indexOf(keyword) !== -1;
    // });
    // }
    //tasks = lodashFilter(tasks, (task) => {
      //return task.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    //});
    var elmTaskForm = isDisplayForm
      ? <TaskForm
        onCloseForm={this.onCloseForm}
        onSubmit={this.onSubmit}
        task={taskEditing}
      />
      : '';
    return (
      <div>
        <div className={cx("row row-cols-1", styles.marginAllPage)}>
          <div className={cx("col", styles.title)}>Quản Lý Công Việc</div>
          <hr />
          <div>
            <div className="row">
              <div className={isDisplayForm ? "col-md-4" : ""}>
                {elmTaskForm}
              </div>
              <div className={isDisplayForm ? "col-md-7" : "col-md-11"}>
                <div className="col">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={this.onToggleForm}
                  >
                    <span>+</span>
                    Them cong viec
                  </button>
                </div>
                &nbsp;
                <div className="col">
                  <TaskControl onSearch={this.onSearch} />
                </div>
                <div className="col">
                  <TaskList
                    onUpdateStatus={this.onUpdateStatus}
                    onDelete={this.onDelete}
                    onUpdate={this.onUpdate}
                    onFilter={this.onFilter}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default App;
