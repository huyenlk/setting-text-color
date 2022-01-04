import { Component } from "react";

class ColorPicker extends Component {
  render() {
    return (
      <button type="div"  onClick={() => this.props.onSelectColor(this.props.item)} style={{ backgroundColor: this.props.item, height: 35, width: 35 }}></button>
    );
  }
}

export default ColorPicker;
