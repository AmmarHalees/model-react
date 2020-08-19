import { useState, useEffect } from 'react';

export default function usePolyfills() {

    //Well this is just a function LOL

    // const [data, setData] = useState([]);

    // useEffect(() => {
    // console.log('use polyfills')

        
    // if (!Object.is) {
        Object.is = function(x, y) {
          // SameValue algorithm
          if (x === y) { // Steps 1-5, 7-10
            // Steps 6.b-6.e: +0 != -0
            return x !== 0 || 1 / x === 1 / y;
          } else {
            // Step 6.a: NaN == NaN
            return x !== x && y !== y;
          }
        };
     
    


    // } }, []); 

    // return null;

}