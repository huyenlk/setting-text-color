import { Component } from "react";
import styles from "./styles.module.scss";
import cx from "classnames";


class Result extends Component {
  setStyle() {
    return {
      color: this.props.color,
      fontSize: this.props.fontSize
    };
  }
  render() {
    return (
      <div class="row row-cols-1">
        <div class="col">Color : {this.props.color} - Fontsize : {this.props.fontSize}px</div>
        <div class={cx("col border", styles.borderContent)} style={this.setStyle()}>Nội dung setting</div>
      </div>
    );
  }
}

export default Result;
