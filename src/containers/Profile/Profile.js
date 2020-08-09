import React, { memo } from 'react';
import useUserData from './FeedCustomHooks/useUserData';
import Spinner from '../../components/Loading/Spinner/Spinner';
import SectionHeader from '../../components/Headers/SectionHeader/SectionHeader';
import { ReactComponent as CloseIcon } from '../../assets/icons/arrow-left.svg';
import ButtonIcon from '../../components/ButtonIcon/ButtonIcon';

const Profile = ({ match: { params: { id: UserId } } }) => {

  const [{ address = {}, company, email, id, name, phone, username, website }, loading] = useUserData(UserId); //Extracting level one. Fall back to {} passed to useState in useUserdata

  const { city = "", street = "", suite = "", zipcode = "", geo = "" } = address;  //Extracting level 2. Fallback to {} 

  return (

    <main className='_container _layout'>


      <SectionHeader iconPosition='left' link='awards' title={name} button={<ButtonIcon size='small' type='link' title="close" icon={<CloseIcon />} loading={loading} />} />

      <section>

        {loading ?


          <Spinner />

          :

          <section className=' _layout'>
            <h2>{name}</h2>
            <p>{city}</p>
            <p>{street}</p>
            <p>{suite}</p>


          </section>

        }

      </section>


    </main>);
}

export default memo(Profile);