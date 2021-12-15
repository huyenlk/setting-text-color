import { Component } from "react";
import styles from "./styles.module.scss";
import cx from "classnames";


class SizeSetting extends Component {
  changeSize(value) {
    this.props.onChangeSize(value);
  }
  render() {
    return (
      <div className={cx("card", styles.size)}>
        <div className={cx("card-header", styles.headerSize)}>
          Size : {this.props.fontSize}px
        </div>
        <div className="card-body">
          <div>
            <div className="row">
              <div className={cx("col-md-1", styles.marginButton)}>
                <button type="button" className={cx("btn btn-primary", styles.buttonDownvsUp)} onClick={() => this.changeSize(-2)}>Giam</button>
              </div>
              <div className="col">
                <button type="button" className={cx("btn btn-primary", styles.buttonDownvsUp)} onClick={() => this.changeSize(+2)}>Tang</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SizeSetting;
