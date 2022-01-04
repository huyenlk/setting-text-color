import { Component } from 'react';
import './App.css';
import ColorPicker from './Components/ColorPicker';
import SizePicker from './Components/SizePicker';
import Reset from './Components/Reset';
import Content from './Components/Content';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      item: 'red',
      size: 12,
      padding: 4
    };
  }

  onSelectColor = (item) => {
    this.setState({
      item,
    })
  }

  onDown = (size, padding) => {
    if (size > 12) {
      this.setState({
        size: size - 1,
        padding: padding - 1
      })
    }

  }

  onUp = (size, padding) => {
    if (size < 36) {
      this.setState({
        size: size + 1,
        padding: padding + 1
      })
    }
  }

  onReset = () => {
    this.setState({
      size: 12,
      padding: 4,
      item: 'red'
    })
  }


  render() {
    var Colors = [
      {
        id: 1,
        item: 'red'
      },
      {
        id: 2,
        item: 'green'
      },
      {
        id: 3,
        item: 'blue'
      },
      {
        id: 4,
        item: 'grey'
      },
    ];
    return (
      <div className="marginAllPAge">
        <div className="row">
          <div className="col-md-5 col-sm-5 col-lg-5 col-xs-5">
            <div className="card">
              <div className="card-header">
                Color Picker
              </div>
              <div className="card-body">
                {Colors.map((Color, index) => {
                  return <ColorPicker
                    key={index}
                    item={Color.item}
                    id={Color.id}
                    onSelectColor={this.onSelectColor}
                  />
                })}
                <hr />
              </div>
            </div>
          </div>
          <div className="col-md-5 col-sm-5 col-lg-5 col-xs-5">
            <SizePicker
              onDown={this.onDown}
              onUp={this.onUp}
              size={this.state.size}
              padding={this.state.padding}
            />
            <Reset
              onReset={this.onReset}
              item={this.state.item}
              size={this.state.size}
              padding={this.state.padding}
            />
          </div>
        </div>
        &nbsp;
        <Content
          item={this.state.item}
          size={this.state.size}
          padding={this.state.padding}
        />
      </div>
    );
  }
}

export default App;
