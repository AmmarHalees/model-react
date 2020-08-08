import React, { Component } from 'react';
import ErrorBase from '../Result/ErrorBase/ErrorBase';
import { Redirect } from 'react-router-dom';


class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false , error: null, errorInfo: null  };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        this.setState({
            error: error,
            errorInfo: errorInfo
        })

    }



    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }



    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI

            // window.location.href = '/home/login';
            // return 'Something went wrong, redirecting to login page';

            return <ErrorBase type='runtime' callToAction={()=><Redirect to='/list'/>}/>
        }

        return this.props.children;
    }
}


export default ErrorBoundary;
