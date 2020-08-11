import React, { memo } from 'react';
import styles from './MobileHeader.module.css';
import SectionHeader from '../../SectionHeader/SectionHeader';
import ButtonIcon from '../../../ButtonIcon/ButtonIcon';
import { ReactComponent as LeftArrowIcon } from '../../../../assets/icons/arrow-left.svg';


const MobileHeader = ({ auth_state }) => {
    return (


        <div className={`${styles.innerMobileHeader} _container`}>

            <SectionHeader iconPosition='left' link='awards' title={`Ammar Halees`} button={<ButtonIcon size='small' type='link' title="close" icon={<LeftArrowIcon />} />} />
            
        </div>

    );
}

export default memo(MobileHeader);