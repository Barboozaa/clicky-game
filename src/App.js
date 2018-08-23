import React, { Component } from 'react';
import Pics from './components/Pics';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import pics from './pics.json';
import './App.css';

class App extends Component {

  state = {
    score: 0,
    highScore: 0,
    pics,
    clickedPics: [],
    message: ""
  };

  handleClick = id => {
    let {clickedPics, score} = this.state;

    if(clickedPics.includes(id)){
      this.setState({
        clickedPics: [],
        score: 0,
        message:  "You lost"
      });
      return;
    } else {
      this.setState({
        clickedPics: clickedPics.concat(id),
        score: score + 1
      })
      console.log(clickedPics)
    }
  }

  render() {
    return (
      <Wrapper>
          <Header 
            score={this.state.score}
            highScore={this.state.highScore}
          />

          <h2>{this.state.message}</h2>

          <div className="cont clearfix">
            {this.state.pics.map(pic => (
              <Pics 
                key={pic.id}
                id={pic.id}
                name={pic.name} 
                image={pic.image}
                func={this.handleClick}
              />
            ))}          
          </div>
      </Wrapper>
    );
  };
}

export default App;
