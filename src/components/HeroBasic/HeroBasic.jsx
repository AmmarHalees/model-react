import React from 'react';
import ButtonBase from '../ButtonBase/ButtonBase';

const HeroBasic = ({ title, description, cta }) => {
    return (

        <section>

            <h1>{title}</h1>
            <h3>{description}</h3>
            <ButtonBase type="primary">{cta}</ButtonBase>

        </section>

    );
}

export default HeroBasic;