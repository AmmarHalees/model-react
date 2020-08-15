import React, { Suspense, memo } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import SiteHeader from '../../components/Headers/SiteHeader/SiteHeader';
import SiteFooter from '../../components/Footers/SiteFooter/SiteFooter';
import GuestOnlyRoute from '../../comp-router/GuestOnlyRoute';
import AuthOnlyRoute from '../../comp-router/AuthOnlyRoute';
import SkeletonBasic from '../../components/Loading/Skeleton/SkeletonBasic';
import { Feed, Settings, Test, Profile, Requests, RDP, Out } from '../../utils/routes';
import { connect } from 'react-redux';
import { handleUser, handleAuth } from '../../redux/actioncreators/actioncreators';
import { compose } from 'redux';
import TestPractices from '../../comp-custom/TestPractices/TestPractices';
import { isDevelopment, getCSSvariableValue } from '../../utils/helpers';
import ErrorBase from '../../components/Result/ErrorBase/ErrorBase';
import AppConfig from '../../utils/constants/app.cofig.json';
import { useMediaQuery } from 'react-responsive';
import './Variables.css';
import './App.css';


function App({ handleAuth, handleUser, user, auth_state }) {

  const isDesktop = useMediaQuery({ query: `(min-width: ${getCSSvariableValue('--desktop')})` }); 



  const signIn = (user) => {

    handleUser(user);
    handleAuth(true);


  }

  const signOut = (user) => {

    handleUser(user);
    handleAuth(false);


  }



  return (
    <div id='App'>



      <Suspense fallback={<SkeletonBasic />}>

        <Switch>

          <GuestOnlyRoute path='/out' component={Out} />

          <Route path='/' render={() => {


            return (

              <React.Fragment>

                <SiteHeader isDesktop={isDesktop} auth_state={auth_state} />

                <div id='_main'>

                  <Switch>


                    <AuthOnlyRoute path='/settings' component={Settings} />
                    <AuthOnlyRoute path='/Requests' component={Requests} />
                    <AuthOnlyRoute path='/Request/:id' component={RDP} />

                    <Route path='/@:id' component={Profile} />

                    <Route path='/image/:id' component={Profile} />

                    <Route path='/test' component={Test} />

                    <Route path='/signin' render={() => {

                      return (<Redirect
                        to={{
                          pathname: "/out/signin",
                          search: "?referrer=your+face",
                          state: { referrer: '/' }
                        }}
                      />)

                    }} />


                    <Route exact path='/' component={Feed} /> {/* Needs exact so that not every single /eljfle matches */}

                    <Route render={({ history }) => <ErrorBase type='Not found' callToAction={() => history.push(AppConfig['root'])} />} />



                  </Switch>

                </div>

                <SiteFooter />

              </React.Fragment>



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

const actionCreators = {

  handleUser,
  handleAuth

}


export default compose(
  memo,
  connect(
    mapStateToProps
    ,
    actionCreators

  )
)(App);
