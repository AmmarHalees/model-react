export const mapTypeToButtonClass = JSON.parse('{"primary":"primary", "secondary":"secondary",  "terinary":"terinary",  "link":"link"}')

export const toastConfig = JSON.parse('{ "position": "top-right",  "autoClose": 5000, "hideProgressBar": false, "closeOnClick": false, "pauseOnHover": true,"draggable": true }')

export const doSomethingAsync =(yourCallbackFcn, before, after , duration) =>{  yourCallbackFcn(before); window.setTimeout( ()=>{ yourCallbackFcn(after) } , duration ) };

export const isDevelopment =() => process.env.NODE_ENV === 'development';

export const getCSSvariableValue = (variableName) => getComputedStyle(document.documentElement).getPropertyValue('--bg-accent-color');
