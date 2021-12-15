import styles from "./styles.module.scss";
import cx from "classnames";
import { Component } from "react";
import {connect} from 'react-redux';
import * as actions from './../Actions/index';

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      status: false

    }
  }
  componentWillMount = () => {
    if (this.props.task) {
      this.setState({
        id: this.props.task.id,
        name: this.props.task.name,
        status: this.props.task.status
      });
      console.log(this.state);
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.task) {
      this.setState({
        id: nextProps.task.id,
        name: nextProps.task.name,
        status: nextProps.task.status
      });
      console.log(this.state);
    }else if(nextProps && nextProps.task===null){
      this.setState({
        id: '',
        name: '',
        status: false
      });
    }
  }
  onCloseForm = () => {
    this.props.onCloseForm();
  }
  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    if (name === 'status') {
      value = target.value === 'true' ? true : false;
    }
    this.setState({
      [name]: value
    });

  }
  onSubmit = (event) => {
    event.preventDefault();
    this.props.onAddTask(this.state);
    this.onClear();
    this.onCloseForm();
  }
  onClear = () => {
    this.setState({
      name: '',
      status: false
    });
  }
  render() {
    var { id } = this.state;
    return (
      <div className="card">
        <div className={cx("card-header", styles.headerAddWork)}>
          {id !== '' ? 'Cap nhat cong viec' : 'Them cong viec'}
          <span
            className={styles.turnOfAddWord}
            onClick={this.onCloseForm}
          >
            x
          </span>
        </div>
        <form className="card-body" onSubmit={this.onSubmit}>
          <div className="mb-3" >
            <label className="form-label">Tên :</label>
            <input
              className="form-control"
              name="name"
              value={this.state.name}
              onChange={this.onChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Trạng Thái :</label>
            <select
              className="form-select"
              name="status"
              value={this.state.status}
              onChange={this.onChange}
            >
              <option value={false}>An</option>
              <option value={true}>Kich hoat</option>
            </select>
          </div>
          <div>
            <button type="submit" className="btn btn-warning">+ Luu Lai</button>
            &nbsp;
            <button
              type="button"
              className="btn btn-danger"
              onClick={this.onClear}
            >
              x Huy bo
            </button>
          </div>
        </form>
      </div>
    );
  };
}

const mapStateToProps = state =>{
  return{

  }
};
const mapDispatchToProps=(dispatch, props)=>{
  return{
    onAddTask: (task)=>{
      dispatch(actions.addTask(task));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps )(TaskForm);
