import styles from "./styles.module.scss";
import cx from "classnames";
import { Component } from "react";

class TaskSearchControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ''
    }
  }
  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value
    });
  }
  onSearch = () => {
    this.props.onSearch(this.state.keyword);
  }
  render() {
    var { keyword } = this.state;
    return (
      <>
        <input
          type="text"
          className="form-control"
          placeholder="Nhap tu khoa..."
          name="keyword"
          value={ keyword }
          onChange={ this.onChange }
        />
        <button
          className="input-group-text"
          onClick={this.onSearch}
        >
          Tim
        </button>
      </>

    );
  };
}

export default TaskSearchControl;
