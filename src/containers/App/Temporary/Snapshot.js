import React, { Suspense, memo } from 'react';
import { Route, Switch } from 'react-router-dom';
import SiteHeader from '../../components/Headers/SiteHeader/SiteHeader';
import SiteFooter from '../../components/Footers/SiteFooter/SiteFooter';
import GuestOnlyRoute from '../../comp-router/GuestOnlyRoute';
import AuthOnlyRoute from '../../comp-router/AuthOnlyRoute';
import SkeletonBasic from '../../components/Loading/Skeleton/SkeletonBasic';
import { Signin, Register, Feed, Settings, Test, Profile, Requests, RDP } from '../../utils/routes';
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


function App(props) {


  const { handleAuth, handleUser, user, auth_state } = props;
  const isDesktop = useMediaQuery({ query: `(min-width: ${getCSSvariableValue('--desktop')})` }); {/*Causing too many renders?  */}



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



      <SiteHeader isDesktop={isDesktop} auth_state={auth_state} />

      <div id='_main'>

        <Suspense fallback={<SkeletonBasic />}>

          <Switch>

            <Route path='/test' component={Test} />



            <AuthOnlyRoute path='/settings' component={Settings} />
            <AuthOnlyRoute path='/Requests' component={Requests} />
            <AuthOnlyRoute path='/Request/:id' component={RDP} />

            <GuestOnlyRoute path='/signin' component={Signin} />
            <GuestOnlyRoute path='/register' component={Register} />

            <Route path='/@:id' component={Profile} />

            <Route path='/image/:id' component={Profile} />


            <Route exact path='/' component={Feed} />

            <Route render={({ history }) => <ErrorBase type='Not found' callToAction={() => history.push(AppConfig['root'])} />} />


          </Switch>

        </Suspense>



      </div>

        <SiteFooter />



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
