import React, { memo } from 'react';
import useUserData from './FeedCustomHooks/useUserData';
import InnerPage from '../../comp-custom/InnerPage/InnerPage';

import CardSkeleton from '../../components/Loading/Skeleton/CardSkeleton/CardSkeleton';
import ProfileCover from './ProfileComponents/ProfileCover/ProfileCover';

const Profile = ({ match: { params: { id: UserId } } }) => {



  const [{ address = {}, name }, loading, error] = useUserData(UserId); //Extracting level one. Fall back to {} passed to useState in useUserdata

  // const { city = '', street = '', suite = ''} = address;  //Extracting level 2. Fallback to {} 


  const content = error ? ' User Not found' : <ProfileCover name={name} />;


  return (

    <InnerPage name={name} loading={loading}>
      {/* <ScrollToTop /> */}

      {loading ?


        <div className='_container'>

          <CardSkeleton />

        </div>

        :

        content
      }

    </InnerPage>

  );
}

export default memo(Profile);