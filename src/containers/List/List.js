import React, { PureComponent } from 'react';
import { getTodos } from '../../services/posts';

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

        return (

            <div>
                {this.state.data.map(x => (

                    <div key={x.id}>

                        {x.title}

                    </div>

                ))}
            </div>
        );
    }
}

export default List;