import React from 'react';
import { ToastContainer } from 'react-toastify';
import PaperBasic from '../../PaperBasic/PaperBasic';

const ToastBasic = () => {
    return (

        <PaperBasic>

            <ToastContainer
                position="top-right"
                autoClose={false}

                hideProgressBar={false}
                newestOnTop
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

        </PaperBasic>


    );
}

export default ToastBasic;