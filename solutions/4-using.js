// BEGIN
const getDomainInfo = (domen) =>{
    let name = domen;
    let header = 'http'

    if(domen.startsWith('https://')){
        header = 'https';
        name = domen.replace("https://", '');
    }else if (domen.startsWith('http://')){
        name = domen.replace("http://", '')
    }
    return {
        scheme: header,
        name: name,
    };
}
export default getDomainInfo;
// END