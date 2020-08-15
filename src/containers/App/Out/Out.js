import React from 'react';
import SignRegContainer from '../../../comp-custom/SignRegContainer/SignRegContainer';
import SigninRegShowcase from '../../../comp-custom/SigninRegShowcase/SigninRegShowcase';
import { Switch, Route } from 'react-router-dom';
import { Signin, Register } from '../../../utils/routes';

const Out = () => {



    return (



        <SignRegContainer>

            <SigninRegShowcase />

            <div className='rightSide'>

                <Switch>

                    <Route path='/out/register' component={Register} />

                    <Route path='/out/signin' component={Signin}  />

                    <Route exact path='/out' component={Signin} /> {/* Needs exact so that not every single /out/eljfle matches */}

                    <Route component={Signin} />

                    {/* <Route render={({ history }) => <ErrorBase type='Not found' callToAction={() => history.push(`${AppConfig['root']}/out/signin`)} />} /> */}

                </Switch>

            </div>


        </SignRegContainer>



    );
}

export default Out;