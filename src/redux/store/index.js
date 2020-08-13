import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from '../reducers';


export default function configureStore(initialState) {


    const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


    return store;

}


// export default function configureStore(initialState) {

//     const store = createStore(
//         rootReducer,
//         initialState,
//         // compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

//         // composeEnhancers(applyMiddleware(Thunk))
//     );

//     return store;
// }
