import React, { useState, useEffect } from 'react';
import style from './ImageBasic.module.css';
import data from '../../utils/constants/strings.json';
import { mapImageTypeToClass } from '../../utils/helpers';

const ImageBasic = ({src = data.defaultsrc, alt="",type}) => {



    const [has_loaded,setImageLoaded] = useState(false);
    function handleLoaded (){
  
      setImageLoaded(true);
  
    }
  
    const [has_errored,setImageErrored] = useState(false);
    function handleErrored (){
  
      setImageErrored(true);
  
    }
    

    const image_used = has_errored? {src: data["fallback"]["src"] , alt: data["fallback"]["src"] } :  {src, alt};
  


    return (<img 
        className={`${style.image}
         ${style[type]}`} 
         src ={image_used.src} 
         alt={image_used.alt}

        onError={handleErrored}
        onLoad={handleLoaded}

         />  );
}
 
export default ImageBasic;