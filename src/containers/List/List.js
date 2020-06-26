import React , {Component} from 'react';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = { data:{} }
    }

    componentDidMount() {






        fetch('http://localhost:3004/posts')
        .then(response=>response.json())
        .then(jsonData => this.setState({

            data:jsonData

        }))
    }
    render() { 

        // console.log(this.state.data)
        return ( 

            <div>
                List
            </div>
         );
    }
}
 
export default List;