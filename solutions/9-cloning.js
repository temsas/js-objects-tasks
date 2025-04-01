// BEGIN
const cloneShallow = (obj) =>{
    let cloneObject = {};
    for(const key in obj){
        if(Object.hasOwn(obj, key)){
            cloneObject[key] = obj[key];
        }
    }
    return cloneObject;
}
export default cloneShallow;
// END
