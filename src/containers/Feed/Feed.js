import React from 'react';
import CardBasic from '../../components/CardBasic/CardBasic';
import ButtonBasic from '../../components/ButtonBasic/ButtonBasic';
import {ReactComponent as HomeIcon} from '../../assets/icons/home.svg'; 
import ButtonWithIcon from '../../components/ButtonWithIcon/ButtonWithIcon';

const Feed = () => {
    return (

        <div>

            <section style={{ minWidth: "100%", background: "green" }}>Slider</section>

            <main className="_layout">



                <p>this is a p</p>

                <CardBasic />

                <ButtonBasic type="primary" disabled>

                    Im a button

                </ButtonBasic>

                <ButtonBasic type="secondary" disabled>

                    Im a button

                </ButtonBasic>

                <ButtonWithIcon type="primary" icon={ <HomeIcon/>} disabled >

                    Im a button

                </ButtonWithIcon>

                <a href="/settings">Click me</a>

            </main>


        </div>


    );
}

export default Feed;