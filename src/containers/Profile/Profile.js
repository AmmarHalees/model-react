import React, { memo, Fragment } from 'react';
import useUserData from './FeedCustomHooks/useUserData';
import Spinner from '../../components/Loading/Spinner/Spinner';
import InnerPage from '../../comp-custom/InnerPage/InnerPage';

const Profile = ({ match: { params: { id: UserId } } }) => {

  const [{ address = {}, company, email, id, name, phone, username, website }, loading, error] = useUserData(UserId); //Extracting level one. Fall back to {} passed to useState in useUserdata

  const { city = "", street = "", suite = "", zipcode = "", geo = "" } = address;  //Extracting level 2. Fallback to {} 

  // const city = address?.address.city; You can use the recently added optional chaining.


  const content = error ? ' User Not found' : <Fragment><h2>{name}</h2>
    <p>{city}</p>
    <p>{street}</p>
    <p>{suite}</p>
  </Fragment>

  console.log(name)

  return (

    <main className='_container _layout'> {/* ((NOTE)) Semantic issue */}



      <InnerPage name ={name} loading={loading}>

        {loading ?

          <Spinner />

          :

          content
        }

      </InnerPage>



    </main>);
}

export default memo(Profile);