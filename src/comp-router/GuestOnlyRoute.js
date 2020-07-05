import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const GuestOnlyRoute = ({ component: Component,auth_state, isMobile, ...rest }) => {



    return (

        <Route {...rest} render={(props) =>

            !auth_state? <Component {...props} />

            : 

            <Redirect
            push
            to={{
              pathname: "/",
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
