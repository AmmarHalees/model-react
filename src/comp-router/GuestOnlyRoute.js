import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const GuestOnlyRoute = ({ component: Component, auth_state, isMobile, location, ...rest }) => {


  /*
  
  Extract "FROM" from location.state.
  
  If location.state is undefined: 
  
  extract "FROM" from this artificial object we've created , which has "FROM" with a default pathname
  
  */


  let { from = {} } = location.state || { from: { pathname: '/' } };

  return (

    <Route {...rest} render={(props) =>

      !auth_state ? <Component {...props} />

        :

        <Redirect
          push
          to={{
            pathname: from.pathname,
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

)(GuestOnlyRoute);
