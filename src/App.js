import React from 'react';
import './App.css';
import Gallery from './components/Gallery';

class App extends React.Component {
  render() {
    return (
      <div className="text-center wrapper">
        <div className="mb-3">
        <h1 >Unsplash Masonry Grid</h1>
        <p>A React App that fetches images from Unsplash API</p>
        </div> 
        <Gallery/>
      </div>
    );
  }
}

export default App;
