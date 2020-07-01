import React , {PureComponent, Component} from 'react';
import Axios from 'axios';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = { data:[] }
    }

    componentDidMount() {

        Axios.get(`${process.env.REACT_APP_API_BASE_URL}/todos`)
        .then((response) => {

           this.setState({  data:response.data  })

        });
       
    }
    render() { 

        return ( 

            <div>
                {this.state.data.map(x=>(

                    <div key={x.id}>

                        {x.title}
                    
                    </div>

                ))}
            </div>
         );
    }
}
 
export default List;