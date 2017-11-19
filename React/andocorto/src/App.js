import React, { Component } from 'react';
import './App.css';

//components:
import Header from './components/headerComponents/header';
import Footer from './components/footerComponents/footer';
import HomePage from './components/pages/homePage';
import Results  from './components/pages/results';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <HomePage />

          <Results subreddit="reactjs"/>

        <Footer />
      </div>
    );
  }
}

export default App;
