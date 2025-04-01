import _ from 'lodash';

// BEGIN
const fill = (company, keys, data) =>{
    if(keys.length > 0){
    const pickData = _.pick(data, keys);
    Object.assign(company, pickData);
    } else {
        Object.assign(company, data);
    }
return company;
}
export default fill;
// END