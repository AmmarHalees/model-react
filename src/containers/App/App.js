import React, { Suspense, memo } from 'react';
import { Route, Switch } from 'react-router-dom';
import SiteHeader from '../../components/Headers/SiteHeader/SiteHeader';
import SiteFooter from '../../components/Footers/SiteFooter/SiteFooter';
import GuestOnlyRoute from '../../comp-router/GuestOnlyRoute';
import AuthOnlyRoute from '../../comp-router/AuthOnlyRoute';
import SkeletonBasic from '../../components/Loading/Skeleton/SkeletonBasic';

import './App.css';

function App() {

  return (
    <div className="App">

      <SiteHeader />

        <Suspense fallback={<SkeletonBasic/>}>
         
          <Switch>

            <AuthOnlyRoute path="/settings" component={} />

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
