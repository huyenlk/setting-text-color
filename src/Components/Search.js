import { Component } from 'react';

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      keyWord: ''
    }
  }

  onHandleChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    if (name === 'pound') {
      value = target.value === 'false' ? false : true;
    }
    this.setState({
      [name]: value
    })
  }

  onHandleSubmit = (event) => {
    event.preventDefault();
    this.props.onSearch(this.state.keyWord)
  }

  render() {
    return (
      <form className="col" onSubmit={this.onHandleSubmit}>
        <div className="input-group">
          <input type="text" name='keyWord' value={this.state.keyWord} onChange={this.onHandleChange} className="form-control" placeholder="Nhap tu khoa..." />
          <button type="submit" className="btn btn-primary">Tim</button>
        </div>
      </form>
    );
  }
}

export default Search;