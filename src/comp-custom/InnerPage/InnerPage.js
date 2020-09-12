import React, { memo } from 'react';
import SectionHeader from '../../components/Headers/SectionHeader/SectionHeader';
import ButtonIcon from '../../components/ButtonIcon/ButtonIcon';
import InnerContent from '../InnerContent/InnerContent';
import { ReactComponent as LeftArrowIcon } from '../../assets/icons/arrow-left.svg';
import { DesktopAndUp } from '../../comp-media-query/DesktopAndUp';

const InnerPage = ({ name, loading, children }) => {
    return (

        <section className=' _layout'>

            <DesktopAndUp>

                <div className='_container'>

                    <SectionHeader iconPosition='left' link='awards' title={name} button={<ButtonIcon size='small' type='link' title="close" icon={<LeftArrowIcon />} loading={loading} />} />

                </div>

            </DesktopAndUp>

            {/* <InnerContent> */}

                {children}

            {/* </InnerContent> */}


        </section>


    );
}

export default memo(InnerPage);