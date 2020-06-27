import React , {Component} from 'react';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = { data:[] }
    }

    componentDidMount() {

        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(jsonData => this.setState({

            data:jsonData

        }))
    }
    render() { 

        console.log(this.state.data)
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