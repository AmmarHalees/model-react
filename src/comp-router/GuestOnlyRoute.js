import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const GuestOnlyRoute = ({ component: Component,auth_state, isMobile,location, ...rest }) => {


  let { from } = location.state || { from: { pathname: '/' } }; //If im coming FROM somewhere, then the path for it would be in the attribute "from", else it's undefined , so we default to "/"

  console.log({from})
    return (

        <Route {...rest} render={(props) =>

            !auth_state? <Component {...props} />

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
