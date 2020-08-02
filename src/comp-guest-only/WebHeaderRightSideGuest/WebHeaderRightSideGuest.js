import React , {memo} from 'react';
import styles from './WebHeaderRightSideGuest.module.css';
import ButtonPlain from '../../components/ButtonPlain/ButtonPlain';
import { connect } from 'react-redux';
import { handleUser, handleAuth } from '../../redux/actioncreators/actioncreators';
import { compose } from 'redux';


const WebHeaderRightSideGuest = ({handleAuth}) => {
    return (

        <div className={styles.WebHeaderRightSideGuest}>

            <ButtonPlain type='link' onClick={handleAuth}>
                Sign in
            </ButtonPlain>
        

            <ButtonPlain type='terinary'>
                Register
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
  )(WebHeaderRightSideGuest);
  
