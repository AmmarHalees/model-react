import React, { memo, useState } from 'react';
import styles from './SigninForm.module.css';
import ButtonPlain from '../../../components/ButtonPlain/ButtonPlain';
import { connect } from 'react-redux';
import { handleUser, handleAuth } from '../../../redux/actioncreators/actioncreators';
import { compose } from 'redux';

const SigninForm = ({ handleAuth,handleUser }) => {

  const [userid, setUserId] = useState();


  const signIn = (userId) => {
    
    handleAuth(true);

    handleUser(userId);


  }

  const handleIdchange = ({target:{value :Id}}) => {

    setUserId(Id);


  }


  return (
    <div className={styles.signinForm}>

      <input value={userid} onChange={handleIdchange} />

      <ButtonPlain type='link' onClick={() => signIn(userid)} title='Sign in'>
       
        Sign in
      
      </ButtonPlain>

    </div>
  );
}


const actionCreators = {

  handleUser,
  handleAuth

}


export default compose(
  memo,
  connect(
    null
    ,
    actionCreators

  )
)(SigninForm);



