import './App.css';
import { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      txtUsername: '',
      txtPassword: '',
      txtDesc: '',
      txtGender: '',
      rdLang: '',
      chkbStatus: ''
    };
  }

  onHandleChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.name==='chkbStatus'? target.checked: target.value;
    this.setState({
      [name]: value
    });
  }

  onHandleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 col-xs-8 col-lg-8 col-sm-8'>
            <form onSubmit={this.onHandleSubmit} className="card">
              <div className="card-header">
                Form
              </div>
              <div className="card-body">
                <h5 className="card-title">Username</h5>
                <input type='text' name='txtUsername' className='form-control' onChange={this.onHandleChange} />
                <h5 className="card-title">Password</h5>
                <input type='text' name='txtPassword' className='form-control' onChange={this.onHandleChange} />
                <h5 className="card-title">Mo ta</h5>
                <textarea className="form-control" name='txtDesc' onChange={this.onHandleChange}></textarea>
                <h5 className="card-title">Mo ta</h5>
                <select className="form-select" name='txtGender' value={this.state.txtGender} onChange={this.onHandleChange}>
                  <option value="0">Nu</option>
                  <option value="1">Nam</option>
                </select>
                <h5 className="card-title">Ngon ngu</h5>
                <div className="form-check">
                  <input className="form-check-input" type="radio" value="en" onChange={this.onHandleChange} name='rdLang' checked={this.state.rdLang === 'en'} />
                  <label className="form-check-label" >
                    Tieng Anh
                  </label>

                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" value="vi" onChange={this.onHandleChange} name='rdLang' checked={this.state.rdLang === 'vi'} />
                  <label className="form-check-label" >
                    Tieng Viet
                  </label>
                </div>
                <h5 className="card-title">Trang thai</h5>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" name="chkbStatus" onChange={this.onHandleChange} value={true}/>
                  <label className ="form-check-label">
                  Dung
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" name="chkbStatus" onChange={this.onHandleChange} value={false}/>
                  <label className ="form-check-label">
                  Sai
                  </label>
                </div>
                <button type='submit' className="btn btn-primary">Luu lai</button>
                &nbsp;
                <button type='reset' className="btn btn-light">Xoa trang</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
