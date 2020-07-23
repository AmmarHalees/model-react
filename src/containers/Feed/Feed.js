import React from 'react';

import ButtonWithIcon from '../../components/ButtonWithIcon/ButtonWithIcon';
import { ReactComponent as CloseIcon } from '../../assets/icons/x.svg'
import ButtonBasic from '../../components/ButtonBasic/ButtonBasic';
import Chip from '../../components/Chip/Chip';
import TooltipBasic from '../../components/TooltipBasic/TooltipBasic';
import ModalBasic from '../../components/ModalBasic/ModalBasic';
import InfoCard from '../../comp-custom/InfoCard/InfoCard';
import ButtonIcon from '../../components/ButtonIcon/ButtonIcon';
import data from '../../utils/constants/strings.json';
import PostCard from '../../comp-custom/PostCard/PostCard';



const Feed = () => {



    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.

    }

    function closeModal() {
        setIsOpen(false);
    }


    return (

        <div>

            <section style={{ minWidth: "100%", background: "green" }}>Slider</section>

            <main className="_layout">

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", width: "100%", gap: "10px" }}>

                    <ButtonBasic type="secondary" >Cancel</ButtonBasic>
                    <ButtonBasic type="primary" onClick={openModal}>Sign in</ButtonBasic>
                    <ButtonWithIcon icon={<CloseIcon />} type="terinary">Sign in</ButtonWithIcon>

                </div>


                <div>

                    <Chip text="hi" />
                    <Chip text="my name is ammar" />
                    <Chip text="where are you" />


                </div>


                <TooltipBasic >

                    <span style={{ width: "fitContent" }}>hi</span>


                </TooltipBasic>


                <ModalBasic


                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    contentLabel="Example Modal"


                >


                        <img style={{

                            width: "auto",
                            maxHeight: "80vh",
                            maxWidth: "100%"

                        }} 
                        alt="hi"

                        src= {data['fake normal sized image']} />


                </ModalBasic>


                <PostCard/>


            </main>



        </div>


    );
}

export default Feed;