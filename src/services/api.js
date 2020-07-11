import axios from 'axios';


/*---------

List of needed end-points: 

1. /photos (feed container all)
2. /photos/category-id (feed container sorted by id)
3. /user/id (Login , profile container)
4. 


----------*/

export default axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    timeout: 1000
});

