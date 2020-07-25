export const mapTypeToClass = JSON.parse('{"primary":"primary", "secondary":"secondary",  "terinary":"terinary",  "link":"link"}')


export const doSomethingAsync =(yourCallbackFcn, before, after , duration) =>{

    yourCallbackFcn(before)

    window.setTimeout( ()=>{ yourCallbackFcn(after) } , duration ) }