import React, {Component} from 'react';
import { ColorContext, colors } from './ColorContext';
import Panel from './Panel';
import ColorButton from './ColorButton';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: colors[0],
      changeColor: this.changeColor // wait, whattttt?! methods in state?! you better believe it
    }
  }

  changeColor = () => {
    this.setState({ color: colors[(Math.floor(Math.random() * colors.length))]})
  }

  render() {
    return(
      <header className="App-header">
        <ColorContext.Provider value={this.state}>
          <Panel />
          <ColorButton />
        </ColorContext.Provider>
      </header>
    )
  }
}

export default App;
