import React from 'react';
import { ToastContainer } from 'react-toastify';
import PaperBasic from '../../PaperBasic/PaperBasic';
import 'react-toastify/dist/ReactToastify.css';

const ToastBasic = () => {
    return (

        <PaperBasic>

            <ToastContainer
                hideProgressBar={false}
                newestOnTop={true}
                rtl={false}
                pauseOnFocusLoss
         
            />

        </PaperBasic>


    );
}

export default ToastBasic;