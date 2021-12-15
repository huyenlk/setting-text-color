import { Component } from "react";
import styles from "./styles.module.scss";
import cx from "classnames";

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ['red', 'green', 'blue', '#ccc']
    };
  }
  showColors(color) {
    return {
      backgroundColor: color
    };
  }
  setActiveColor(color){
    this.props.onReceiveColor(color);
  }
  render() {
    var elmColors = this.state.colors.map((color, index) => {
      return <span
        key={index}
        style={this.showColors(color)}
        className={this.props.color===color? 'active border':''}
        onClick={()=>this.setActiveColor(color)}>
        Color
      </span>
    });
    return (
      <div className="col">
        <div className={cx("card", styles.colorPicker)}>
          <div className={cx("card-header", styles.headerColorPicker)}>
            Color Picker
          </div>
          <div className="card-body">
            {elmColors}
            <hr />
          </div>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
