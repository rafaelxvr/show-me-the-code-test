import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Home from './components/pages/Home.js';
import Services from './components/pages/Services.js';
import Products from './components/pages/Products.js';
import SignUp from './components/pages/SignUp.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {apiResponse:""};
  }

  callAPI() {
    fetch("http://localhost:9000/tarifaRoute")
      .then(res => res.text())
      .then(res => this.setState({apiResponse: res}));
  }

  componentWillMount() {
    this.callAPI();
  }

  render() {
    return (
      <>
      <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/services' element={<Services/>} />
            <Route path='/products' element={<Products/>} />
            <Route path='/sign-up' element={<SignUp/>} />
          </Routes>
        </Router>
      </>
    );
  }
};

export default App;
