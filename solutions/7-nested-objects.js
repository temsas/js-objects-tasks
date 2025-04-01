// BEGIN
const get = (object, keys) =>{
    if (!object || !keys) {
        return null;
    }
    let objectDash = object;
    for ( const key of keys){
        if(!Object.hasOwn(objectDash, key) ){
            return null;
        }
            objectDash = objectDash[key]
    }
    return objectDash;
}
export default get;
// END