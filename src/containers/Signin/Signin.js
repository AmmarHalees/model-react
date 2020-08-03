import React from 'react';
import LoginShowCase from '../../comp-custom/LoginShowCase/LoginShowCase';
import LoginForm from '../../comp-custom/Forms/LoginForm';
import SignRegContainer from '../../comp-custom/SignRegContainer/SignRegContainer';

const Signin = () => {
    return (
    
    <SignRegContainer>

        <LoginShowCase/>

        <LoginForm/>


    </SignRegContainer>
    )}

export default Signin;