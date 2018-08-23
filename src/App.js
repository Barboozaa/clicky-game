import React, { Component } from 'react';
import Pics from './components/Pics';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import pics from './pics.json';
import './App.css';

class App extends Component {

  state = {
    currentScore: 0,
    highScore: 0,
    pics
  };

  handleClick = () => {
    console.log("clicked")
  };

  render() {
    return (
      <Wrapper>
          <Header 
            currentScore={this.state.currentScore}
            highScore={this.state.highScore}
          />

          <div className="cont clearfix">
            {this.state.pics.map(pic => (
              <Pics 
                key={pic.id}
                name={pic.name} 
                image={pic.image}
                func={this.state.handleClick}
              />
            ))}          
          </div>
      </Wrapper>
    );
  };
}

export default App;
