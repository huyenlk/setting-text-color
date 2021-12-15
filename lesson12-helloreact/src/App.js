import { Component } from "react";
import styles from "./styles.module.scss";
import cx from "classnames";
import ColorPicker from "./components/ColorPicker";
import SizeSetting from "./components/SizeSetting";
import Reset from "./components/Reset";
import Result from "./components/Result";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red',
      fontSize: 12
    };
    this.onSetColor = this.onSetColor.bind(this);
    this.onChangeSize = this.onChangeSize.bind(this);
    this.onSettingDefault = this.onSettingDefault.bind(this);


  }
  onSetColor = (params) => {
    this.setState({
      color: params
    });
  }
  onChangeSize(value) {
      this.setState({
        fontSize: (this.state.fontSize + value >= 8 && this.state.fontSize + value <= 36) ? this.state.fontSize + value : this.state.fontSize
      });
  }
  onSettingDefault(value){
    if(value){
      this.setState({
        color: 'red',
        fontSize: 12
      });
    }
  }
  render() {
    return (
      <div>
        <div className={cx("row row-cols-1", styles.marginAllPage)}>
          <div className="col">
            <div>
              <div className="row">
                <ColorPicker color={this.state.color} onReceiveColor={this.onSetColor} />
                <div className="col">
                  <div>
                    <div className="row row-cols-1">
                      <div className="col">
                        <SizeSetting
                          fontSize={this.state.fontSize}
                          onChangeSize={this.onChangeSize}
                        />
                      </div>
                      <div className="col">
                        <Reset onSettingDefault={this.onSettingDefault}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div></div>
          <div class="col">
            <div>
              <Result color={this.state.color} fontSize={this.state.fontSize} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
