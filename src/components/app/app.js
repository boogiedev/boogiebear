import React from 'react';
import './app.css';
import Nav from '../nav/nav.js';

class App extends React.Component {
  // Custom functions


  // fake authentication Promise
  // Set up new auth later for app
  authenticate(){
    return new Promise(resolve => setTimeout(resolve, 2000)) // 2 seconds
  }

  componentDidMount(){
    this.authenticate().then(() => {
      const ele = document.getElementById('ipl-progress-indicator')
      if(ele){
        // fade out
        ele.classList.add('available')
        setTimeout(() => {
          // remove from DOM
          ele.outerHTML = ''
        }, 1000)
      }
    })
  }

  render() {
    return (
    <div className="App">
      <div id="app_background">
        <Nav />
      </div>
    </div>
  );
  }
}

export default App;
