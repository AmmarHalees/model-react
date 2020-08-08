import React, { useState, useEffect ,memo } from 'react';
import ResponsiveList from '../../components/Lists/ResponsiveList/ResponsiveList';
import { getTodos } from '../../services/posts';
import InfoCard from '../../comp-custom/InfoCard/InfoCard';

const List = () => {

    const [data , setData] = useState([]);
    useEffect(()=>{

        getTodos().then((response)=>{
            setData(response);

        })

    } , []);

    console.log(data)


    return (
        <div className="_container">

                         <ResponsiveList>
        
                           {data.map(({id, title, body})=> (
        
                                 <InfoCard key={id} title={title} paragraph={body}/>
        
                             ))}
        
                         </ResponsiveList>
        
                     </div>

      );
}
 
export default memo(List);