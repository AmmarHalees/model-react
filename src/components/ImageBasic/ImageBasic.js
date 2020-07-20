import React from 'react';
import style from './ImageBasic.module.css';
import data from '../../utils/constants/strings.json'


const ImageBasic = ({src = data.defaultsrc, alt=""}) => {
    return (<img className={style.image} src ={src} alt={alt}/>  );
}
 
export default ImageBasic;