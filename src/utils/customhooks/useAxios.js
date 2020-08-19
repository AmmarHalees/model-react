// import { useState, useEffect } from 'react';
// import { getData } from '../../../services/data';

// export default function useFeedData(ID) {

//     const [data, setData] = useState([]);

//     useEffect(() => {

//         getData(ID).then((response) => { //2 is the ID

//             setData(response);

//         });

//     }, [ID]); 

//     return data;

// }