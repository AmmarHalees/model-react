import React, { useState, useEffect } from 'react';
import Overlay from '../../../../components/Overlay/Overlay';
import ImageBasic from '../../../../components/ImageBasic/ImageBasic';
import styles from './ProfileCover.module.css';
import ButtonPlain from '../../../../components/ButtonPlain/ButtonPlain';

const ProfileCover = ({name}) => {


  const [loading, setLoading] = useState(true);

  useEffect(()=>{

    setTimeout(() => {
      
      setLoading(false)
    }, 3000);

  })

    return ( 
        <>
          <div className={styles.profileCover} style={{
    
            backgroundImage: `url('https://images.unsplash.com/photo-1472856053553-799da7ffa653?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80')`
          }}>
    
            <Overlay 
            // background='linear-gradient(0deg, rgba(245,0,162,0.5357493339132529) 0%, rgba(255,255,255,0) 100%)'
            
            background='linear-gradient(0deg, rgb(255 255 255) 0%, rgb(0 0 0 / 43%) 100%)'            
            />
    
            <div className={`${styles.profileInfo} _layout`}>
    


                <ImageBasic rounded type='profile' src='https://decider.com/wp-content/uploads/2017/09/the-office-jim-is-the-worst.jpg?quality=80&strip=all&w=646&h=431&crop=1' />
    
                <h2>{name}</h2>
    
                
                <ButtonPlain >

                    Follow

                </ButtonPlain>


            </div>
    
    
          </div>
    
    
        </> );
}
 
export default ProfileCover;