import React, { Suspense, memo } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import SiteHeader from '../../components/Headers/SiteHeader/SiteHeader';
import SiteFooter from '../../components/Footers/SiteFooter/SiteFooter';
import GuestOnlyRoute from '../../comp-router/GuestOnlyRoute';
import AuthOnlyRoute from '../../comp-router/AuthOnlyRoute';
import SkeletonBasic from '../../components/Loading/Skeleton/SkeletonBasic';
import { Signin, Register, List, Feed, Settings, Test, Profile, Requests, RDP } from '../../utils/routes';
import { connect } from 'react-redux';
import { handleUser, handleAuth } from '../../redux/actioncreators/actioncreators';
import { compose } from 'redux';
import './App.css';
import TestPractices from '../../comp-custom/TestPractices/TestPractices';
import { isDevelopment, getCSSvariableValue } from '../../utils/helpers';
import ErrorBase from '../../components/Result/ErrorBase/ErrorBase';
import AppConfig from "../../utils/constants/app.cofig.json";

import { useMediaQuery } from 'react-responsive';






function App(props) {

  const { handleAuth, handleUser, user, auth_state } = props;
  const isDesktop = useMediaQuery({ query: `(min-width: ${getCSSvariableValue('--desktop')})` });

  console.warn({ isDesktop }, 'the media query is causing app to re render')

  const signIn = (user) => {

    handleUser(user);
    handleAuth(true);


  }

  const signOut = (user) => {

    handleUser(user);
    handleAuth(false);


  }

  return (
    <div id="App">



      {/* <div className='_layout'> */}


      {/* <h2> {user.name || 'You are logged out'}</h2> */}

      {/* {!auth_state && <ButtonBase type='primary' onClick={() => signIn(Strings.fake_user, true)}> Sign in </ButtonBase >}
        {auth_state && <ButtonBase type='terinary' onClick={() => signOut({}, false)}> Sign Out </ButtonBase>} */}



      {/* </div> */}



      <Suspense fallback={<SkeletonBasic />}>

        <Switch>


          <GuestOnlyRoute path="/signin" component={Signin} />
          <GuestOnlyRoute path="/register" component={Register} />



          <Route path="/" component={({ match: { url } }) => {


            return (

              <div>

                <SiteHeader isDesktop={isDesktop} auth_state={auth_state} />

                <div id="_main">

                  <Switch>


                    <Route path="/test" component={Test} />

                    <AuthOnlyRoute  path={`${url}settings`} component={Settings} />
                    <AuthOnlyRoute path={`${url}Requests`} component={({ match: { url } }) => {


                      return (

                        <Switch>

                          <Route exact path={`${url}/:id`} component={RDP} />

                          <Route exact path={`${url}`} component={Requests} />

                          <Route render={({ history }) => <ErrorBase type="Not found" callToAction={() => history.push(AppConfig['root'])} />} />


                        </Switch>
                      )


                    }} />
                    <AuthOnlyRoute path={`${url}/Requests/:id`} component={RDP} />



                    <Route path={`${url}/list`} component={List} />
                    <Route path={`${url}/profile/:id`} component={Profile} />

                    <Route exact path={`${url}`} component={Feed} />

                    <Route render={({ history }) => <ErrorBase type="Not found" callToAction={() => history.push(AppConfig['root'])} />} />

                  </Switch>

                </div>

              </div>

            )

          }} />




        </Switch>

      </Suspense>





      <SiteFooter />


      {isDevelopment() && <TestPractices />}
      {/* {isProduction() && <CleanUp/> } */}

    </div >
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
