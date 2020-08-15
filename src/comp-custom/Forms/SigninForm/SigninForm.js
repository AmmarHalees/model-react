import React ,{memo} from 'react';
import styles from './SigninForm.module.css';
import ButtonPlain from '../../../components/ButtonPlain/ButtonPlain';
import { connect } from 'react-redux';
import { handleUser, handleAuth } from '../../../redux/actioncreators/actioncreators';
import { compose } from 'redux';

const SigninForm = ({ handleAuth }) => {


    return (
        <div className={styles.signinForm}>

            <ButtonPlain type='link' onClick={handleAuth} title='Sign in'>
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
  


