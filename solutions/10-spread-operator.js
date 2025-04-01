// BEGIN
const make = (name, obj) =>{
    const defaultObj = {
        state: 'moderating',
        createdAt: Date.now(),
    }
    return {
        name,
        ...defaultObj,
        ...obj,
    }
}
export default make;
// END