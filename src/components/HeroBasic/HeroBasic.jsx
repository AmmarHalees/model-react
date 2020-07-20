import React from 'react';
import ButtonBasic from '../ButtonBasic/ButtonBasic';

const HeroBasic = ({ title, description, cta }) => {
    return (

        <section>

            <h1>{title}</h1>
            <h3>{description}</h3>
            <ButtonBasic type="primary">{cta}</ButtonBasic>

        </section>

    );
}

export default HeroBasic;