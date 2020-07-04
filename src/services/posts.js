import api from './api';


// axios.get(`${process.env.REACT_APP_API_BASE_URL}/todos`)
// .then((response) => {


//    this.setState({  data:response.data  })

// });


export function getTodos() {
    return api.get('/todos',{
        // headers: {
        //     'Authorization': 'Bearer ' + localStorage.getItem('token')
        // }
    })
    .then((response) => {return response.data})
    
    ;
}