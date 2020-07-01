import { lazy } from 'react';


const Feed = lazy(() => import('../Feed/Feed'));
const List = lazy(() => import('../List/List'));
const Signin = lazy(() => import('../Signin/Signin'));
const Register = lazy(() => import('../Register/Register'));
const Settings = lazy(() => import('../Settings/Settings'));

const PageNotFound = lazy(() => import('../../components/Result/PageNotFound/PageNotFound'));

module.exports ={

    Feed,
    List,
    Signin,
    Register,
    Settings,
    PageNotFound
}