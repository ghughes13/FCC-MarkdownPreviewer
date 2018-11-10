import React, { Component } from 'react';
import Title from './components/title.js';
import Input from './components/input.js';
import Footer from './components/footer.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title />
        <Input />
        <Footer />
      </div>
    );
  }
}

export default App;
