import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import SiteHeader from '../../components/Headers/SiteHeader/SiteHeader';
import SiteFooter from '../../components/Footers/SiteFooter/SiteFooter';

function App() {

  const Feed = lazy(() => import('../Feed/Feed'));
  const List = lazy(() => import('../List/List'));
  const Signin = lazy(() => import('../Signin/Signin'));
  const Register = lazy(() => import('../Register/Register'));
  const PageNotFound = lazy(() => import('../../components/Result/PageNotFound/PageNotFound'));


  return (
    <div className="App">

      <SiteHeader />

        <Suspense fallback={<div>Loading...</div>}>
         
          <Switch>

            <Route path="/list" component={List} />
            <Route path="/signin" component={Signin} />
            <Route path="/register" component={Register} />

            <Route exact path="/" component={Feed} />
            <Route render={()=><PageNotFound/>} />


          </Switch>

        </Suspense>


      <SiteFooter />

    </div>
  );
}

export default App;
