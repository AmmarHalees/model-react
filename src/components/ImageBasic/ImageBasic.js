import React from 'react';
import style from './ImageBasic.module.css';
import data from '../../utils/constants/strings.json';
import { mapImageTypeToClass } from '../../utils/helpers';


const ImageBasic = ({src = data.defaultsrc, alt="",type}) => {
    return (<img className={`${style.image} ${style[mapImageTypeToClass[type]]}`} src ={src} alt={alt}/>  );
}
 
export default ImageBasic;