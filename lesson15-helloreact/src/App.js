import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtUsername: '',
      txtPassword: '',
      txtDesc: '',
      sltGender: 1,
      flexRadioDefault: 'en',
      chkbStatus: false
    };
    this.onHandleChange = this.onHandleChange.bind(this)
    this.onHandleSubmit = this.onHandleSubmit.bind(this)

  }
  onHandleChange(event) {
    var target = event.target;
    var name = target.name;
    var value = target.type==='checkbox'? target.checked : target.value;
    this.setState({
      [name]: value
    });
  }
  onHandleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <div classname="container">
        <div className="row">
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <div class="card">
              <div class="card-header">
                Form
              </div>
              <div className="card-body">
                <form onSubmit={this.onHandleSubmit}>
                  <div className="card-body">
                    <h5 className="card-title">Username:</h5>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      name='txtUsername'
                      onChange={this.onHandleChange}
                      value={this.state.txtUsername}
                    />
                    <h5 className="card-title">Password:</h5>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleFormControlInput1"
                      name='txtPassword'
                      onChange={this.onHandleChange}
                      value={this.state.txtPassword}

                    />
                    <h5 className="card-title">Mo ta:</h5>
                    <textarea
                      className="form-control"
                      name='txtDesc'
                      onChange={this.onHandleChange}
                      rows="3"
                      value={this.state.txtDesc}
                    >
                    </textarea>
                    <label>gioi tinh:</label>
                    <select className="form-select"
                      aria-label="Default select example"
                      name="sltGender"
                      onChange={this.onHandleChange}
                      value={this.state.sltGender}>
                      <option value={1}>nu</option>
                      <option value={2}>nam</option>
                    </select>
                    <br />
                    <label>ngon ngu</label>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        onChange={this.onHandleChange}
                        value='en'
                        checked={this.state.flexRadioDefault==="en"}
                      />
                      <label className="form-check-label" for="flexRadioDefault1">
                        Tieng Anh
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        onChange={this.onHandleChange}
                        value='vi'
                        checked={this.state.flexRadioDefault==="vi"}                       
                      />
                      <label className="form-check-label" for="flexRadioDefault2">
                        Tieng Viet
                      </label>
                    </div>
                    <div className="form-check">
                      <input 
                      className="form-check-input" 
                      type="checkbox" value="" 
                      id="defaultCheck1"
                      name="chkbStatus"
                      value={true}
                      onChange={this.onHandleChange}
                      checked={this.state.chkbStatus===true} 
                      />
                      <label className="form-check-label" for="defaultCheck1">
                        Trang thai
                      </label>
                    </div>
                    <button type="submit" href="#" className="btn btn-primary">Luu lai</button>&nbsp;
                    <button type="reset" href="#" className="btn btn-primary">Xoa trang</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default App;
