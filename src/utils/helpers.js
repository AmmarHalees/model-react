export const mapTypeToClass = JSON.parse('{"primary":"primary", "secondary":"secondary",  "terinary":"terinary",  "link":"link"}')


export const doSomethingAsync =(yourCallbackFcn, before, after , duration) =>{ console.log('click'); yourCallbackFcn(before); window.setTimeout( ()=>{ yourCallbackFcn(after) } , duration ) };

export const isDevelopment =() => process.env.NODE_ENV === 'development';


export const getCSSvariableValue = (variableName) => getComputedStyle(document.documentElement).getPropertyValue('--bg-accent-color');