// BEGIN
const pick = (object, keys) =>{
    const result = {};
    if(!object || !keys){
        return result;
    }
    for( const key of keys){
        if(Object.hasOwn(object, key)){
            result [ key] = object[key];
        }
    }
    return result;
}
export default pick;
// END