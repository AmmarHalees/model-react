import React, { memo, Fragment } from 'react';
import useUserData from './FeedCustomHooks/useUserData';
import Spinner from '../../components/Loading/Spinner/Spinner';
import InnerPage from '../../comp-custom/InnerPage/InnerPage';
import ImageBasic from '../../components/ImageBasic/ImageBasic';
import Overlay from '../../components/Overlay/Overlay';
import CardSkeleton from '../../components/Loading/Skeleton/CardSkeleton/CardSkeleton';

const Profile = ({ match: { params: { id: UserId } } }) => {



  const [{ address = {}, name}, loading, error] = useUserData(UserId); //Extracting level one. Fall back to {} passed to useState in useUserdata

  const { city = '', street = '', suite = ''} = address;  //Extracting level 2. Fallback to {} 

  // const city = address?.address.city; You can use the recently added optional chaining.


  const content = error ? ' User Not found' :


    <>
      <div className='profileCover' style={{

        backgroundImage: `url('https://images.unsplash.com/photo-1472856053553-799da7ffa653?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80')`
      }}>

        <Overlay background='linear-gradient(0deg, rgba(245,0,162,0.5357493339132529) 0%, rgba(255,255,255,0) 100%)'/>

        <div className='profileInfo '>

            <ImageBasic rounded type='profile' src='https://decider.com/wp-content/uploads/2017/09/the-office-jim-is-the-worst.jpg?quality=80&strip=all&w=646&h=431&crop=1' />

            <h2>{name}</h2>

        </div>


      </div>


    </>

  return (

    <InnerPage name={name} loading={loading}>
          {/* <ScrollToTop /> */}

      {loading ?

        // <Spinner />

        <CardSkeleton/>

        :

        content
      }

    </InnerPage>

  );
}

export default memo(Profile);