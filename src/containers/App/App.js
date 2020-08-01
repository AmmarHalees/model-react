import React, { Suspense, memo } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import SiteHeader from '../../components/Headers/SiteHeader/SiteHeader';
import SiteFooter from '../../components/Footers/SiteFooter/SiteFooter';
import GuestOnlyRoute from '../../comp-router/GuestOnlyRoute';
import AuthOnlyRoute from '../../comp-router/AuthOnlyRoute';
import SkeletonBasic from '../../components/Loading/Skeleton/SkeletonBasic';
import { Signin, Register, List, Feed, Settings,Test } from '../../utils/routes';
import { connect } from 'react-redux';
import { handleUser, handleAuth } from '../../redux/actioncreators/actioncreators';
import { ReactComponent as HomeIcon } from '../../assets/icons/home.svg';
import { compose } from 'redux';
import Strings from '../../utils/constants/strings.json';
import './App.css';
import ButtonBasic from '../../components/ButtonBasic/ButtonBasic';
import ButtonIcon from '../../components/ButtonIcon/ButtonIcon';
import TestPractices from '../../comp-custom/TestPractices/TestPractices';
import {isDevelopment, isProduction} from '../../utils/helpers';
import ErrorBase from '../../components/Result/ErrorBase/ErrorBase';
import AppConfig  from "../../utils/constants/app.cofig.json";
import CleanUp from '../../comp-custom/CleanUp/CleanUp';

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


        {/* <h2> {user.name || 'You are logged out'}</h2> */}

        {/* {!auth_state && <ButtonBasic type='primary' onClick={() => signIn(Strings.fake_user, true)}> Sign in </ButtonBasic >}
        {auth_state && <ButtonBasic type='terinary' onClick={() => signOut({}, false)}> Sign Out </ButtonBasic>} */}


 
      </div>


      <div className="_main">

        <Suspense fallback={<SkeletonBasic />}>

          <Switch>

          <Route path="/test" component={Test} />



            <AuthOnlyRoute path="/settings" component={Settings} />

            <GuestOnlyRoute path="/signin" component={Signin} />
            <GuestOnlyRoute path="/register" component={Register} />

            <Route path="/list" component={List} />
            <Route exact path="/" component={Feed} />

            <Route render={({history}) => <ErrorBase type="Not found" callToAction={ ()=> history.push(AppConfig['root']) }/>} />


          </Switch>

        </Suspense>



      </div>


      <SiteFooter />


      {isDevelopment() && <TestPractices/>}
      {/* {isProduction() && <CleanUp/> } */}

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
