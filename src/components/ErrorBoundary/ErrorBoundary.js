import React, { Component } from 'react';
import RuntimeError from '../Result/RuntimeError/RuntimeError';

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

            return <RuntimeError/>
        }

        return this.props.children;
    }
}


export default ErrorBoundary;
