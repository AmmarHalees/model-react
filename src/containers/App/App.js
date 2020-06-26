import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import List from '../List/List';
const BASE_URL = process.env.REACT_APP_BASE_URL;

function App() {

  console.log(BASE_URL);

  return (
    <div className="App">

      <Header/>

      <List/>

      <Footer/>

    </div>
  );
}

export default App;
