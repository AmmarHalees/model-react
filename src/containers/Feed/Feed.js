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
import { doSomethingAsync, toastConfig } from '../../utils/helpers';
import { toast } from 'react-toastify';
import ToastBasic from '../../components/Feedback/ToastBasic/ToastBasic';
import ResultBase from '../../components/Result/ResultBase/ResultBase';
import ModalPost from '../../comp-custom/ModalPost/ModalPost';

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
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", width: "100%", gap: "10px" }}>

                    {/* <ButtonBasic type="secondary" loading={true}>Cancel</ButtonBasic> */}
                    <ButtonBasic loading={isLoading} type="primary" onClick={openModal}>Sign in</ButtonBasic>
                    <ButtonWithIcon onClick={() => doSomethingAsync(setLoading, true, false, 3000)} icon={<CloseIcon />} loading={isLoading} type="terinary">Sign in</ButtonWithIcon>
                    <ButtonBasic onClick={openToast}></ButtonBasic>
                </div>



                <ModalBasic


                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    contentLabel="Example Modal"


                >

                        <ModalPost/>


                </ModalBasic>

                <ResponsiveList>

                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />


                </ResponsiveList>
                <PostCard />

                <AlertBasic type="info">

                    <h3>This is successful</h3>

                    <p>this is a success message</p>

                </AlertBasic>

            </main>

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


            <ResultBase type='empty'/>

        </div>



    );
}

export default Feed;