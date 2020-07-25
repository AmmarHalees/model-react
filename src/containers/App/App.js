import React, { Suspense, memo } from 'react';
import { Route, Switch } from 'react-router-dom';
import SiteHeader from '../../components/Headers/SiteHeader/SiteHeader';
import SiteFooter from '../../components/Footers/SiteFooter/SiteFooter';
import GuestOnlyRoute from '../../comp-router/GuestOnlyRoute';
import AuthOnlyRoute from '../../comp-router/AuthOnlyRoute';
import SkeletonBasic from '../../components/Loading/Skeleton/SkeletonBasic';
import PageNotFound from '../../components/Result/PageNotFound/PageNotFound'
import { Signin, Register, List, Feed, Settings } from '../../utils/routes';
import { connect } from 'react-redux';
import { handleUser, handleAuth } from '../../redux/actioncreators/actioncreators';
import { ReactComponent as HomeIcon } from '../../assets/icons/home.svg';
import { compose } from 'redux';
import Strings from '../../utils/constants/strings.json';
import './App.css';
import ButtonBasic from '../../components/ButtonBasic/ButtonBasic';
import ButtonIcon from '../../components/ButtonIcon/ButtonIcon';
import TestPractices from '../../comp-custom/TestPractices/TestPractices';
import {isDevelopment} from '../../utils/helpers';

function App(props) {

  const { handleAuth, handleUser, user, auth_state } = props;

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


      <SiteHeader />

      <div className='_layout'>


        <h2> {user.name || 'You are logged out'}</h2>

        {/* {!auth_state && <ButtonBasic type='primary' onClick={() => signIn(Strings.fake_user, true)}> Sign in </ButtonBasic >}
        {auth_state && <ButtonBasic type='terinary' onClick={() => signOut({}, false)}> Sign Out </ButtonBasic>} */}


 
      </div>


      <div className="_main">

        <Suspense fallback={<SkeletonBasic />}>

          <Switch>

            <AuthOnlyRoute path="/settings" component={Settings} />

            <GuestOnlyRoute path="/signin" component={Signin} />
            <GuestOnlyRoute path="/register" component={Register} />

            <Route path="/list" component={List} />
            <Route exact path="/" component={Feed} />

            <Route render={() => <PageNotFound />} />


          </Switch>

        </Suspense>



      </div>


      <SiteFooter />


      {isDevelopment() && <TestPractices/>}

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
