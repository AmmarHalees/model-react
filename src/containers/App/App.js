import React, { Suspense, lazy, memo } from 'react';
import { Route, Switch } from 'react-router-dom';
import SiteHeader from '../../components/Headers/SiteHeader/SiteHeader';
import SiteFooter from '../../components/Footers/SiteFooter/SiteFooter';
import GuestOnlyRoute from '../../comp-router/GuestOnlyRoute';
import AuthOnlyRoute from '../../comp-router/AuthOnlyRoute';
import SkeletonBasic from '../../components/Loading/Skeleton/SkeletonBasic';

import './App.css';

function App() {

  const Feed = lazy(() => import('../Feed/Feed'));
  const List = lazy(() => import('../List/List'));
  const Signin = lazy(() => import('../Signin/Signin'));
  const Register = lazy(() => import('../Register/Register'));
  const Settings = lazy(() => import('../Settings/Settings'));

  const PageNotFound = lazy(() => import('../../components/Result/PageNotFound/PageNotFound'));

  return (
    <div className="App">

      <SiteHeader />

        <Suspense fallback={<SkeletonBasic/>}>
         
          <Switch>

            <AuthOnlyRoute path="/settings" component={Settings} />

            <GuestOnlyRoute path="/signin" component={Signin} />
            <GuestOnlyRoute path="/register" component={Register} />

            <Route path="/list" component={List} />
            <Route exact path="/" component={Feed} />

            <Route render={()=><PageNotFound/>} />


          </Switch>

        </Suspense>


      <SiteFooter />

    </div>
  );
}

export default memo(App);
