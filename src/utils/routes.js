import { lazy } from 'react';


 const Feed = lazy(() => import('../containers/Feed/Feed'));
 const Signin = lazy(() => import('../containers/Signin/Signin'));
 const Register = lazy(() => import('../containers/Register/Register'));
 const Settings = lazy(() => import('../containers/Settings/Settings'));
 const Profile = lazy(() => import('../containers/Profile/Profile'));
 const Requests = lazy(() => import('../containers/Requests/Requests'));
 const RDP = lazy(() => import('../containers/RDP/RDP'));
 const Out = lazy(() => import('../containers/App/Out/Out'));
 const List = lazy(() => import('../containers/List/List'));

 
 const TestGalleries = lazy(() => import('../containers/TestGalleries/TestGalleries'));


export {

    Feed,
    Signin,
    Register,
    Settings,
    Profile,
    Requests,
    RDP,
    Out,
    TestGalleries,
    List

}