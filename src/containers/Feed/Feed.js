import React from 'react';
import CardBasic from '../../components/CardBasic/CardBasic';

const Feed = () => {
    return (

        <div>

            <section style={{minWidth:"100%", background:"green"}}>Slider</section>

            <main className="_layout">

                <h1>This is a H1</h1>
                <h2>This is a h2</h2>
                <h3>This is a H3</h3>
                <h4>This is a H4</h4>
                <h5>This is a H5</h5>
                <h6>This is a H6</h6>


                <p>this is a p</p>

                <CardBasic />

                <a href="#">Click me</a>

            </main>


        </div>


    );
}

export default Feed;