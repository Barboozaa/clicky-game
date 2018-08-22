import React, { Component } from 'react';
import Pics from './components/Pics';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import pics from './pics.json';

class App extends Component {

  state = {
    currentScore: 0,
    highScore: 0,
    pics
  };

  render() {
    return (
      <Wrapper>
          <Header />

          {this.state.pics.map(pic => (
            <Pics 
              name={pic.name} 
              image={pic.image}
            />
          ))}          
      </Wrapper>
    );
  };
}

export default App;
