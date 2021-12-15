import { Component } from "react";
import styles from "./styles.module.scss";
import cx from "classnames";


class Reset extends Component {
  onResetDefault=()=>{
    this.props.onSettingDefault(true);
  }
  render() {
    return (
      <button 
      type="button" 
      className={cx("btn btn-primary", styles.buttonReset)}
      onClick={this.onResetDefault}
      >reset</button>
    );
  }
}

export default Reset;
