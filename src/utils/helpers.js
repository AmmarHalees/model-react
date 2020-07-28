export const mapTypeToButtonClass = JSON.parse('{"primary":"primary", "secondary":"secondary",  "terinary":"terinary",  "link":"link"}')

export const mapImageTypeToClass = JSON.parse('{"modal image":"modalImage"}')

export const doSomethingAsync =(yourCallbackFcn, before, after , duration) =>{ console.log('click'); yourCallbackFcn(before); window.setTimeout( ()=>{ yourCallbackFcn(after) } , duration ) };

export const isDevelopment =() => process.env.NODE_ENV === 'development';

export const getCSSvariableValue = (variableName) => getComputedStyle(document.documentElement).getPropertyValue(variableName);
