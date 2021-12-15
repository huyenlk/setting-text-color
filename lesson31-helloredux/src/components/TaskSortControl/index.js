import styles from "./styles.module.scss";
import cx from "classnames";
import { Component } from "react";

class TaskSortConTrol extends Component {
  render() {
    return (
      <div>
        <select onClick={(event) => console.log(event.target.value)} className={cx("form-select", styles.buttonSort)} >
          <option selected>Sap Xep</option>
          <option>Tên A-Z</option>
          <option >Tên Z-A</option>
          <hr />
          <option >Trạng Thái Kích Hoạt</option>
          <option >Trạng Thái Ẩn</option>
        </select>
      </div>
    );
  };
}

export default TaskSortConTrol;
