import { Component } from 'react';
import TaskFilter from './TaskFilter';
import TaskItem from './TaskItem';

class Task extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Name: '',
      Condition: 1
    }
  }

  onCondition = (index) => {
    const newTasks = [...this.props.tasks];
    newTasks[index].pound = !this.props.tasks[index].pound
    this.setState({
      tasks: newTasks
    })
    localStorage.setItem('tasks', JSON.stringify(this.props.tasks))
  }

  onDelete = (index) => {
    var { tasks } = this.props;
    if (index !== -1) {
      tasks.splice(index, 1)
      this.setState({
        tasks: tasks
      })
    }
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }

  onFilter = (txtName, txtCondition) => {
    txtCondition = parseInt(txtCondition, 10);
    this.setState({
      Name: txtName.toLowerCase(),
      Condition: txtCondition
    })
  }

  componentDidMount = () => {
    if (this.props.tasks) {
      this.setState({
        tasks: this.props.tasks
      })
    }
  }

  render() {
    var { tasks } = this.props;
    let newTasks = tasks
    let NewTasks = tasks
    if (this.state.Name) {
      NewTasks = tasks.filter((task) => {
        return task.name.toLowerCase().indexOf(this.state.Name) !== -1;
      });
    }
    if(NewTasks){
      NewTasks = NewTasks.filter((NewTask) => {
        if (this.state.Condition === 1) {
          return NewTask;
        } else {
          return NewTask.pound === (this.state.Condition === 2 ? false : true)
        }
      });
    }
    newTasks = tasks.filter((task) => {
      if (this.state.Condition === 1) {
        return task;
      } else {
        return task.pound === (this.state.Condition === 2 ? false : true)
      }
    });
    return (
      <div className='col' >
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Ten</th>
              <th scope="col">Trang thai</th>
              <th scope="col">Hanh dong</th>
            </tr>
          </thead>
          <tbody>
            <TaskFilter
              onFilter={this.onFilter}
            />
            {(this.props.keyWord ? this.props.newValue : (this.state.Name !== '' ? NewTasks: newTasks)).map((task, index) => {
              return <TaskItem
                key={index}
                id={index + 1}
                name={task.name}
                action={task.action}
                pound={task.pound}
                onCondition={() => this.onCondition(index)}
                onDelete={() => this.onDelete(index)}
                onFix={() => this.props.onFix(index)}
              />
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Task;