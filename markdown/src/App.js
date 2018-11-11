import React, { Component } from 'react';
import Title from './components/title.js';
import Output from './components/output.js';
import Footer from './components/footer.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title />
          <Output />
        <Footer />
      </div>
    );
  }
}

export default App;
