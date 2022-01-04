import { Component } from 'react';

class Sort extends Component {

  onClick = (sortName, sortStt) => {
    this.props.onSort(sortName, sortStt);
  }
  
  render() {
    
    return (
      <div className="col-md-3 col-sm-3 col-lg-3 col-xs-3">
        <div className="btn-group col-md-12 col-sm-12 col-lg-12 col-xs-12">
          <button type="button" className="form-select btn btn-primary" data-bs-toggle="dropdown">
            Sap xep
          </button>
          <ul className="dropdown-menu">
            <li><div className="dropdown-item" onClick={() => this.onClick('name', 1)}> Tu A toi Z</div></li>
            <li><div className="dropdown-item" onClick={() => this.onClick('name', -1)}>Tu Z toi A</div></li>
            <li><div className="dropdown-item" onClick={() => this.onClick('status', 1)}>Kich hoat</div></li>
            <li><div className="dropdown-item" onClick={() => this.onClick('status', -1)}>An</div></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Sort;