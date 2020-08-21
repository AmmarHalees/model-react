import React, { useState } from 'react';
import style from './ImageBasic.module.css';
import data from '../../utils/constants/strings.json';

const ImageBasic = ({src = data['fallback']['src'], alt=data['fallback']['alt'],type,rounded}) => {


    const [has_loaded,setImageLoaded] = useState(false);
    function handleLoaded (){
  
      setImageLoaded(true);
  
    }
  
    const [has_errored,setImageErrored] = useState(false);
    function handleErrored (){
  
      setImageErrored(true);
  
    }
    

    const image_used = has_errored? {src: data['fallback']['src'] , alt: data['fallback']['alt'] } :  {src, alt};
  


    return (<img 
      loading='lazy'
        className={`${style.image} ${style[type]} ${rounded? style.rounded : ''}`} 
         src ={image_used.src} 
         alt={image_used.alt}

        onError={handleErrored}
        onLoad={handleLoaded}

         />  );
}
 
export default ImageBasic;