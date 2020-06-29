import React, { Suspense, lazy } from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
const BASE_URL = process.env.REACT_APP_BASE_URL;

function App() {


  const Feed = lazy(() => import('../Feed/Feed'));
  const List = lazy(() => import('../List/List'));

  return (
    <div className="App">

      <Header />

        <Suspense fallback={<div>Loading...</div>}>
         
          <Switch>

            <Route path="/list" component={List} />
            <Route exact path="/" component={Feed} />

          </Switch>

        </Suspense>


      <Footer />

    </div>
  );
}

export default App;
