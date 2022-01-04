import './App.css';
import { Component } from 'react';
import AddForm from './Components/AddForm';
import AddButton from './Components/AddButton';
import Search from './Components/Search';
import Sort from './Components/Sort';
import Task from './Components/Task';
import {filter} from 'lodash';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      status: false,
      number: 2,
      taskEditing: null,
      sortName: '',
      sortStt: 1,
      tasks: [],
      keyWord: ''
    }

  }

  componentDidMount() {
    if (localStorage && localStorage.getItem('tasks')) {
      var tasks = JSON.parse(localStorage.getItem('tasks'));
      const newTasks = tasks.filter((task) => task)
      this.setState({
        tasks: newTasks
      });
    }
  }


  onOpenForm = (status) => {
    if (status === true) {
      this.setState({
        status: false
      })
    } else {
      this.setState({
        status: true
      })
    }
  }

  onButtonX = (status) => {
    if (status === true) {
      this.setState({
        status: false
      })
    } else {
      this.setState({
        status: true
      })
    }
  }

  onAddTask = (data) => {
    var { tasks } = this.state;
    if (!data.id) {
      var number = this.state.number + 1;
      data.id = number + 1
      this.setState({
        number: number,
      })
      tasks.push(data);
    } else {
      tasks[this.state.index] = data
    }
    this.setState({
      tasks: tasks,
    });
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }

  onHandleSubmit = (keyWord) => {
    console.log(keyWord)
  }

  onFix = (index) => {
    this.onOpenForm(this.state.status);
    var { tasks } = this.state;
    var taskEditing = tasks[index];
    this.setState({
      taskEditing: taskEditing,
      index: index
    })
  }

  onSort = (sortName, sortStt) => {
    this.setState({
      sortName: sortName,
      sortStt: sortStt
    })
    if (sortName === 'name') {
      this.state.tasks.sort((a, b) => {
        if (a.name > b.name) return sortStt;
        else if (a.name < b.name) return -sortStt;
        else return 0;
      });
    } else {
      this.state.tasks.sort((a, b) => {
        if (a.pound > b.pound) return -sortStt;
        else if (a.pound < b.pound) return sortStt;
        else return 0;
      });
    }
    console.log(sortName, sortStt)
  }

  onSearch = (keyWord) => {
    this.setState({
      keyWord: keyWord
    })
  }

  render() {
    var { tasks } = this.state;
    let newValue = tasks
    if (this.state.keyWord) {
     newValue=filter(tasks,(task)=>{
       return task.name.toLowerCase().indexOf(this.state.keyWord) !== -1;
     })
      console.log(newValue)
    }
    return (
      <div className='col-md-8 col-sm-8 col-xs-8 col-lg-8' style={{ marginLeft: 200 }}>
        <h3 style={{ textAlign: 'center' }}>
          QUAN LY CONG VIEC</h3>
        <hr />
        <div className="row">
          <div className={this.state.status === true ? 'col-md-4 col-sm-4 col-xs-4 col-lg-4' : ''}>
            {this.state.status === true ? <AddForm taskEditing={this.state.taskEditing} onAddTask={this.onAddTask} status={this.state.status} onButtonX={this.onButtonX} /> : ''}
          </div>
          <div className="col">
            <div className="row row-cols-1">
              <AddButton
                status={this.state.status}
                onOpenForm={this.onOpenForm}
              />
              <div className="col">
                <div className="row">
                  <Search
                    onSearch={this.onSearch}
                  />
                  <Sort
                    onSort={this.onSort}
                    sortName={this.state.sortName}
                    sortStt={this.state.sortStt}
                  />
                </div>
              </div>
              <Task
                onSave={this.onSave}
                onFix={this.onFix}
                tasks={this.state.tasks}
                newValue={newValue}
                keyWord={this.state.keyWord}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;