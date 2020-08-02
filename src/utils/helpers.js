
export const mapImageTypeToClass = JSON.parse('{"modal image":"modalImage"}')

export const toastConfig = JSON.parse('{ "position": "top-right",  "autoClose": 5000, "hideProgressBar": false, "closeOnClick": false, "pauseOnHover": true,"draggable": true }')

export const  benchMarkFunction = (f) => {  console.time("MyTimer");  f();  console.timeEnd("MyTimer");}
 
export const fakeAsyncFunction = (yourCallbackFcn, before, after , duration) =>{  yourCallbackFcn(before); window.setTimeout( ()=>{ yourCallbackFcn(after) } , duration ) };

export const isDevelopment = () => process.env.NODE_ENV === 'development';

export const isProduction = () => process.env.NODE_ENV === 'production';

export const getCSSvariableValue = (variableName) => getComputedStyle(document.documentElement).getPropertyValue(variableName);
