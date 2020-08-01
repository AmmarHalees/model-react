import React, { useState } from 'react';

import ButtonWithIcon from '../../components/ButtonWithIcon/ButtonWithIcon';
import { ReactComponent as CloseIcon } from '../../assets/icons/x.svg';

import ButtonBasic from '../../components/ButtonBasic/ButtonBasic';
import ModalBasic from '../../components/ModalBasic/ModalBasic';
import AlertBasic from '../../components/Feedback/AlertBasic/AlertBasic';
import data from '../../utils/constants/strings.json';
import PostCard from '../../comp-custom/PostCard/PostCard';
import ResponsiveList from '../../components/Lists/ResponsiveList/ResponsiveList';
import ImageBasic from '../../components/ImageBasic/ImageBasic';
import { fakeAsyncFunction, toastConfig } from '../../utils/helpers';
import { toast } from 'react-toastify';
import ToastBasic from '../../components/Feedback/ToastBasic/ToastBasic';
import ResultBase from '../../components/Result/ResultBase/ResultBase';
import ModalPost from '../../comp-custom/ModalPost/ModalPost';
import ButtonIcon from '../../components/ButtonIcon/ButtonIcon';
import ButtonPlain from '../../components/ButtonPlain/ButtonPlain';

const Feed = () => {


    const [modalIsOpen, setIsOpen] = useState(false);
    const [isLoading, setLoading] = useState(false);


    function openToast() { toast.success('🦄 Wow so easy!', toastConfig); }


    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.

    }

    function closeModal() {
        setIsOpen(false);
    }

    console.log(toastConfig)
    return (

        <div>


            <section style={{ minWidth: "100%", background: "green" }}>Slider</section>

            <main className="_layout">

                {/* <ButtonPlain type="secondary" onClick={openModal}>Sign in</ButtonPlain>
                    <ButtonWithIcon onClick={() => fakeAsyncFunction(setLoading, true, false, 3000)} icon={<CloseIcon />} loading={isLoading} type="terinary">Sign in</ButtonWithIcon>
                    <ButtonBasic onClick={openToast}></ButtonBasic> */}



                <ModalBasic

                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    contentLabel="Example Modal"

                >

                    <ModalPost />


                </ModalBasic>

                <ResponsiveList>

                    <PostCard onClick={openModal} />
                    <PostCard onClick={openModal} />
                    <PostCard onClick={openModal} />
                    <PostCard onClick={openModal} />
                    <PostCard onClick={openModal} />


                </ResponsiveList>
                <PostCard />

                <AlertBasic type="info">

                    <h3>This is successful</h3>

                    <p>this is a success message</p>

                </AlertBasic>
                <ButtonIcon icon={<CloseIcon />} size='medium' />

                <ResultBase type='empty' />
            </main>

            <ButtonPlain>

                hi my name is ammar
                    </ButtonPlain>

            <ToastBasic />

            {/* <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            /> */}




        </div>



    );
}

export default Feed;