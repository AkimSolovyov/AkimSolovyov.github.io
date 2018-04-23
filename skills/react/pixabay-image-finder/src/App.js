import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './components/navbar/NavBar';
import Search from './components/search/Search';

class App extends Component {
  render() {
    return <MuiThemeProvider>
        <div className="app">
          <NavBar />
          <div className="app-search">
            <Search />
          </div>
        </div>
      </MuiThemeProvider>;
  }
}

export default App;
