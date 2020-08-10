import React, { Fragment } from 'react';
import SectionHeader from '../../components/Headers/SectionHeader/SectionHeader';
import ButtonIcon from '../../components/ButtonIcon/ButtonIcon';
import InnerContent from '../InnerContent/InnerContent';
import { ReactComponent as LeftArrowIcon } from '../../assets/icons/arrow-left.svg';
import styles from './InnerPage.module.css';

const InnerPage = ({ name, loading, children }) => {
    return (

        <section className='_container _layout'>

            <SectionHeader iconPosition='left' link='awards' title={name} button={<ButtonIcon size='small' type='link' title="close" icon={<LeftArrowIcon />} loading={loading} />} />


            <InnerContent>

                {children}

            </InnerContent>


        </section>


    );
}

export default InnerPage;