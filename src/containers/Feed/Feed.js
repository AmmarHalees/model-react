import React from 'react';
import CardBasic from '../../components/CardBasic/CardBasic';
import ButtonBasic from '../../components/ButtonBasic/ButtonBasic';
import {ReactComponent as HomeIcon} from '../../assets/icons/home.svg'; 

const Feed = () => {
    return (

        <div>

            <section style={{ minWidth: "100%", background: "green" }}>Slider</section>

            <main className="_layout">



                <p>this is a p</p>

                <CardBasic />

                <ButtonBasic type="primary" icon={ <HomeIcon/>}>

                    Im a button

                </ButtonBasic>

                <ButtonBasic type="secondary">

                    Im a button

                </ButtonBasic>

                <a href="/settings">Click me</a>

            </main>


        </div>


    );
}

export default Feed;