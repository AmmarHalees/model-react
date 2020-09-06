import React from 'react';
import {ReactComponent as TagIcon} from '../../assets/icons/tag.svg'
import styles from './CategoriesList.module.css';


const CategoriesList = ({categoriesArray}) => {
    return (  

        <div className={`_container ${styles.categoriesList}`}>

        {categoriesArray.map(({id, title, type})=>{

        return (
        
        <button className={`${styles.item} `}>

            <TagIcon/>

            {/* {mapIconTypeToIcon[type]} */}
        <h3>{title}</h3>

        </button>)

        })}

    </div>

    );
}
 
export default CategoriesList;