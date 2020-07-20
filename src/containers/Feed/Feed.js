import React from 'react';
import AlertBasic from '../../components/Feedback/AlertBasic/AlertBasic';
import NotificationBasic from '../../components/Feedback/NotificationBasic/NotificationBasic';
import ButtonIcon from '../../components/ButtonIcon/ButtonIcon';
import {ReactComponent as HomeIcon} from '../../assets/icons/arrow-left.svg'
import ButtonBasic from '../../components/ButtonBasic/ButtonBasic';

const Feed = () => {
    return (

        <div>

            <section style={{ minWidth: "100%", background: "green" }}>Slider</section>

            <main className="_layout">

                Content, not "page not found"


                    <AlertBasic type="warning" />

                <NotificationBasic text="User successfully deleted" />

                <ButtonBasic rounded icon={<HomeIcon rounded/>} >
                    hi there my name is ammar
                </ButtonBasic>

            </main>

        </div>


    );
}

export default Feed;