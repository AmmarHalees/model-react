import React from 'react';
import CardBasic from '../../components/CardBasic/CardBasic';
import ButtonBasic from '../../components/ButtonBasic/ButtonBasic';
import { ReactComponent as HomeIcon } from '../../assets/icons/home.svg';
import ButtonWithIcon from '../../components/ButtonWithIcon/ButtonWithIcon';
import ButtonIcon from '../../components/ButtonIcon/ButtonIcon';

const Feed = () => {
    return (

        <div>

            <section style={{ minWidth: "100%", background: "green" }}>Slider</section>

            <main className="_layout">



                <p>this is a p</p>

                <CardBasic />

                <ButtonBasic type="primary" >

                    Im a button

                </ButtonBasic>

                <ButtonBasic type="terinary" >

                    Im a button

                </ButtonBasic>

                <ButtonWithIcon type="link" icon={<HomeIcon />}  >

                    Im a button

                </ButtonWithIcon>

                <ButtonIcon type="link" icon={<HomeIcon />}  >

                    Im a button

                </ButtonIcon>   

                <a href="/settings">Click me</a>

            </main>


        </div>


    );
}

export default Feed;