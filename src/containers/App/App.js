import React, { Suspense, lazy } from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Route, Switch } from 'react-router-dom';

function App() {

  const Feed = lazy(() => import('../Feed/Feed'));
  const List = lazy(() => import('../List/List'));
  const Signin = lazy(() => import('../Signin/Signin'));
  const Register = lazy(() => import('../Register/Register'));
  const PageNotFound = lazy(() => import('../../components/Result/PageNotFound/PageNotFound'));


  return (
    <div className="App">

      <Header />

        <Suspense fallback={<div>Loading...</div>}>
         
          <Switch>

            <Route path="/list" component={List} />
            <Route path="/signin" component={Signin} />
            <Route path="/register" component={Register} />

            <Route exact path="/" component={Feed} />
            <Route render={()=><PageNotFound/>} />


          </Switch>

        </Suspense>


      <Footer />

    </div>
  );
}

export default App;
