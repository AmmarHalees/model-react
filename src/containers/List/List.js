import React, { PureComponent } from 'react';
import { getTodos } from '../../services/posts';
import './List.css';

class List extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { data: [] }
    }

    componentDidMount() {

        getTodos().then(response => {

            this.setState({
                data: response
            })

        })


    }
    render() {

        const {data} = this.state;

        console.log(data);

        return (

            <div className="list-container"> 
                {this.state.data.map(x => (

                    <div key={x.id}>

                       <img src={x.largeImageURL} alt="something hapenning" />

                    </div>

                ))}
            </div>
        );
    }
}

export default List;