import _ from 'lodash';

// BEGIN
const countWords = (text) =>{
    if (!text){
        return {};
    }
    const words = _.words(text);
    const wordCount = {};

    for ( const word of words){
        const lowerWords = word.toLowerCase();
        if(wordCount[lowerWords]){
            wordCount[lowerWords] +=1;
        } else {
            wordCount[lowerWords] = 1;
        }
    }
return wordCount;
}
export default countWords;
// END