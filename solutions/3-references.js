// BEGIN
const boolCompany = (c1, c2) =>{
    if(c1.website === c2.website &&  c1.state === c2.state && c1.name === c2.name) {
        return true
    } else
        return false
}
export default boolCompany;
// END