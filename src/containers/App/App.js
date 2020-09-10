import React, { Suspense, memo, useState } from 'react';
import { Route, Switch, Redirect, useLocation, useHistory } from 'react-router-dom';
import SiteHeader from '../../components/Headers/SiteHeader/SiteHeader';
import SiteFooter from '../../components/Footers/SiteFooter/SiteFooter';
import GuestOnlyRoute from '../../comp-router/GuestOnlyRoute';
import AuthOnlyRoute from '../../comp-router/AuthOnlyRoute';
import SkeletonBasic from '../../components/Loading/Skeleton/SkeletonBasic';
import { Feed, Settings, Profile, Requests, RDP, Out, PDP } from '../../utils/routes';
import { connect } from 'react-redux';
import { compose } from 'redux';
import TestPractices from '../../comp-custom/TestPractices/TestPractices';
import { isDevelopment, getCSSvariableValue } from '../../utils/helpers';
import ErrorBase from '../../components/Result/ErrorBase/ErrorBase';
import AppConfig from '../../utils/constants/app.cofig.json';
import { useMediaQuery } from 'react-responsive';
import usePolyfills from '../../utils/customhooks/usePolyfills';
import BottomNav from '../../comp-mobile-only/BottomNav/BottomNav';

import './Variables.css';
import './App.css';
import 'gestalt/dist/gestalt.css';
import ModalBasic from '../Feed/ModalBasic/ModalBasic';


function App({ auth_state }) {

  const isDesktop = useMediaQuery({ query: `(min-width: ${getCSSvariableValue('--desktop')})` });

  usePolyfills();


  let location = useLocation();
  let history = useHistory();

  let background = location.state && location.state.background;

  const [open, setOpen] = useState(background ? true : false);


  return (
    <div id='App'>

      <Suspense fallback={<SkeletonBasic />}>

        <Switch>

          <GuestOnlyRoute path='/out' component={Out} />

          <Route path='/' render={() => {


            return (

              <>

                <SiteHeader isDesktop={isDesktop} auth_state={auth_state} />


                <div id='_main'>

                <Switch location={background || location}>


                    <AuthOnlyRoute path='/settings' component={Settings} />
                    <AuthOnlyRoute path='/Requests' component={Requests} />
                    <AuthOnlyRoute path='/Request/:id' component={RDP} />

                    <Route path='/@:id' component={Profile} />

                    <Route path='/photo/:id' component={PDP} />


                    <Route path={AppConfig['redirectsToSignin']} render={() => {

                      return (<Redirect
                        to={{
                          pathname: "/out",
                          search: "?referrer=your+face",
                        }}
                      />)

                    }} />


                    <Route exact path='/' component={Feed} /> {/* Needs exact so that not every single /eljfle matches */}

                    <Route render={({ history }) => <ErrorBase type='Not found' callToAction={() => history.replace(AppConfig['root'])} />} />



                  </Switch>



                  {background && <Route path="/photo/:id" children={



                    <ModalBasic isOpen={true}

                      onRequestClose={() => {

                        setOpen(false);
                        history.replace('/')

                      }}

                    >

                      <PDP />


                    </ModalBasic>

                  }

                  />


                  }

                  <BottomNav />

                </div>

                <SiteFooter />

              </>



            )


          }} />


        </Switch>

      </Suspense>



      {isDevelopment() && <TestPractices />}

    </div>
  );
}






const mapStateToProps = (state) => {

  return {

    auth_state: state.auth,
    user: state.user


  }

}



export default compose(
  memo,
  connect(
    mapStateToProps
    ,
    null
  )
)(App);
