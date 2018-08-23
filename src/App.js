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
    clickedPics: pics,
    message: ""
  };

  shuffle = arr => {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  };

  handleClick = event => {
    const id = event.target.id;
    console.log("id=", id)
    console.log("clickedPics=", this.state.clickedPics)

    let findPic = {}
    this.state.clickedPics.forEach((pic) => {
      if (pic.id === id) {
        findPic = pic
      }
    });
    console.log("findpic", findPic)
  
    if(id === findPic) {
      this.setState({
        message: "You guessed incorrectly!",
        highScore: (this.state.score > this.state.highScore) ? this.state.score : this.state.highScore,
        score: 0,
        pics: pics,
        clickedPics: pics
      });
    } else {
      const picClicked = this.state.clickedPics.filter(pic => pic.id !== id);
      this.setState({
        message: "You guessed correctly!",
        score: this.state.score + 1,
        pics: pics,
        clickedPics: picClicked
      });
    }

    this.shuffle(pics)
  };

  render() {
    return (
      <Wrapper>
          <Header 
            score={this.state.score}
            highScore={this.state.highScore}
          />

          <h4>{this.state.message}</h4>

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
