import { lazy } from 'react';


 const Feed = lazy(() => import('../containers/Feed/Feed'));
 const List = lazy(() => import('../containers/List/List'));
 const Signin = lazy(() => import('../containers/Signin/Signin'));
 const Register = lazy(() => import('../containers/Register/Register'));
 const Settings = lazy(() => import('../containers/Settings/Settings'));

export {

    Feed,
    List,
    Signin,
    Register,
    Settings

}