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
import { handleauth } from '../../redux/actioncreators/actioncreators';
import {compose} from 'redux';
import './App.css';


function App(props) {

const { handleauth, auth_state } = props

const handleLogin = (new_auth_state) => {

  handleauth(new_auth_state)

}


  return (
    <div className="App">

      <button onClick={() => handleLogin(auth_state === true ? false : true)}>{auth_state === true ? "Quick Logout" : "Quick Login"}</button>

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






const mapStateToProps = (state) => {

  return {

    auth_state: state.auth

  }

}

const actionCreators = {

  handleauth

}


export default compose(
  memo,
  connect(
    mapStateToProps
    ,
    actionCreators
  
  )
)(App)




// export default connect(
//   mapStateToProps
//   ,
//   actionCreators

// )(App);