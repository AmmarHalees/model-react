import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// import { connect } from 'react-redux';
// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
const AuthOnlyRoute = ({ component: Component,auth_state, isMobile, ...rest }) => {


    return (

        <Route {...rest} render={(props) =>

          auth_state ? <Component {...props} isMobile={isMobile}/>

            : 

            <Redirect
            to={{
              pathname: "/signin",
              state: { from: props.location }
            }}
          />

        
    
    
           } />



    );
}



const mapStateToProps = (state) => {

  return {

    auth_state: state.auth

  }

}

export default connect(
  mapStateToProps
  ,
  null

)(AuthOnlyRoute);
