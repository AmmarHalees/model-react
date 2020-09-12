import React, { memo, useEffect, useState } from 'react';
import useUserData from './FeedCustomHooks/useUserData';
import InnerPage from '../../comp-custom/InnerPage/InnerPage';

import CardSkeleton from '../../components/Loading/Skeleton/CardSkeleton/CardSkeleton';
import ProfileCover from './ProfileComponents/ProfileCover/ProfileCover';
import { useRouteMatch } from 'react-router-dom';
import useProfileData from '../../utils/customhooks/useProfileData';

import styles from './Profile.module.css';
import Overlay from '../../components/Overlay/Overlay';
import ImageBasic from '../../components/ImageBasic/ImageBasic';
import ButtonPlain from '../../components/ButtonPlain/ButtonPlain';
import usePhotoData from '../../utils/customhooks/usePhotoData';
import useFeedData from '../../utils/customhooks/useFeedData';

import MasonryGallery from '../../components/Galleries/MansoryGallery/MansoryGallery';




const Profile = () => {

  const { params: { username } } = useRouteMatch();

  const [userObject, userObjectLoading, userObjectError] = useProfileData(username);

  // const [userPhotos, userPhotosLoading, userPhotosError] = usePhotoData(username);


  const [pageNumber, setPageNumber] = useState(1);
  function handlePageNumber() {

    setPageNumber(prevPageNumber => prevPageNumber + 1);
  }

  const [feedArray, feedDataLoading, errorGalleryData] = useFeedData(pageNumber, 10);




  const { first_name, last_name, username: user_name, total_likes, profile_image } = userObject;


  const content = userObjectError ? ' User Not found' : <ProfileCover name={`${first_name} ${last_name}`} />;



  return (


    <div className={`${styles.container} _layout`}>

      <div className={styles.upperSide}

        style={{

          backgroundImage: `url("https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg")`

        }}



      >

        <Overlay


          // background='linear-gradient(0deg, rgba(245,0,162,0.5357493339132529) 0%, rgba(255,255,255,0) 100%)'

          // background='linear-gradient(0deg, rgb(255 255 255) 0%, rgb(0 0 0 / 43%) 100%)'

          // background='linear-gradient(0deg, rgb(255 255 255) 0%, #b73ab0a3 100%)'


          background='linear-gradient(0deg, rgb(255, 255, 255) 0%, rgb(0 0 0 / 70%) 100%)'

        />
        <div className={styles.infoContainer}>

          <div className={styles.info}>

            <ImageBasic src={profile_image?.large} rounded />

            <ButtonPlain type='primary'>Follow</ButtonPlain>

          </div>

        </div>


      </div>

      <div className={`_container _layout ${styles.lowerSide}`}>

        <div className={`${styles.titleContainer} _layout`} style={{ textAlign: 'center' }}>
          <h1>{`${first_name} ${last_name}`}</h1>

          <h2>Food Photographer</h2>

        </div>


        <section style={{ display: 'grid', gridTemplateColumns: '1fr 4fr' }}>

          <div>


            <div className='_layout' style={{position:'fixed'}}>
              <h3>Best Work | <span style={{ color: 'grey', fontWeight: 'lighter' }}>(5)</span></h3>


              <h3>Food</h3>
              <h3>Wedding</h3>
              <h3>Auto</h3>
              <h3>Landscape</h3>

            </div>

          </div>


          <div>

            <MasonryGallery data={feedArray} loadMore={handlePageNumber} error={errorGalleryData} loading={feedDataLoading} />



          </div>


        </section>


      </div>


    </div>



    // <InnerPage name={`${first_name} ${last_name}`} loading={userObjectLoading}>

    //   {userObjectLoading ?


    //     <div className='_container'>

    //       <CardSkeleton />

    //     </div>

    //     :

    //     content
    //   }

    // </InnerPage>

  );
}

export default memo(Profile);