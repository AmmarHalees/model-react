import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { FAKE_IS_AUTH_FLAG } from '../utils/helpers';
// import { connect } from 'react-redux';

const GuestOnlyRoute = ({ component: Component,auth_state, isMobile, ...rest }) => {



    return (

        <Route {...rest} render={(props) =>

            !FAKE_IS_AUTH_FLAG? <Component {...props} />

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


export default GuestOnlyRoute;

// const mapStateToProps = (state) => {

//   return {

//     auth_state: state.auth

//   }

// }


// export default connect(
//   mapStateToProps
//   ,
//   null

// )(GuestOnlyRoute);
