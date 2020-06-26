import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import List from '../List/List';

function App() {

  console.log(process)
  return (
    <div className="App">

      <Header/>

      <List/>

      <Footer/>

    </div>
  );
}

export default App;
