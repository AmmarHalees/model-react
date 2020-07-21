import React from 'react';

import ButtonWithIcon from '../../components/ButtonWithIcon/ButtonWithIcon';
import { ReactComponent as HomeIcon } from '../../assets/icons/arrow-left.svg'
import ButtonBasic from '../../components/ButtonBasic/ButtonBasic';
import Chip from '../../components/Chip/Chip';
import TooltipBasic from '../../components/TooltipBasic/TooltipBasic';

const Feed = () => {
    return (

        <div>

            <section style={{ minWidth: "100%", background: "green" }}>Slider</section>

            <main className="_layout">

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", width: "100%", gap: "10px" }}>

                    <ButtonBasic type="secondary">Cancel</ButtonBasic>
                    <ButtonBasic type="primary">Sign in</ButtonBasic>
                    <ButtonWithIcon icon={<HomeIcon />} type="terinary">Sign in</ButtonWithIcon>

                </div>


                <div>

                    <Chip text="hi" />
                    <Chip text="my name is ammar" />
                    <Chip text="where are you" />


                </div>


                <TooltipBasic>

                  <span style={{width:"fitContent"}}>hi</span>


                </TooltipBasic>


            </main>

        </div>


    );
}

export default Feed;