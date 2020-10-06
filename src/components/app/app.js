import React from 'react';
import './app.css';

class App extends React.Component {

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
        }, 2000)
      }
    })
  }

  render() {
    return (
    <div className="App">
      <div id="app_background">
        <h1> yall doodoo </h1>
      </div>
    </div>
  );
  }
}

export default App;
