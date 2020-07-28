import React, { PureComponent } from 'react';
import { getTodos } from '../../services/posts';
import ResponsiveList from '../../components/Lists/ResponsiveList/ResponsiveList';
import InfoCard from '../../comp-custom/InfoCard/InfoCard';

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

        }


        )


    }
    render() {

        const { data } = this.state;

        return (

            <div className="_layout ">

                <ResponsiveList>

                    {data.map(({id, title, body})=> (

                        <InfoCard key={id} title={title} paragraph={body}/>

                    ))}

                </ResponsiveList>

            </div>
        );
    }
}

export default List;