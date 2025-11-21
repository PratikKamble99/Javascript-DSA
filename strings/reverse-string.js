let str="My name is Pratik";

// expectedoutput: "emoclew tpircsavaj olleh dlrow"

function reverse(str){
    let words = []
    let word = ''
    for(let i = 0; i< str.length; i++){
        if(str[i] == ' ') {
            words.push(reverseWord(word))
            word = ''
            continue
        }
         word =word+str[i] ;
    }
    words.push(reverseWord(word))
    
    // const revWords = words.map((word)=>reverseWord(word))

    let finalRes = '';
    
    for(let i = 0; i< words.length; i++){
        finalRes += words[i]+' '

        // for(let j = 0; j < word.length; j++){
        //     finalRes+=word[j]
        // }
        // finalRes+=' '
    }
    console.log(str)
    console.log(finalRes)
}

function reverseWord(word){
    let revWord = '';
    for(let i = word.length-1; i>=0; i--){
        revWord+=word[i]
    }
    return revWord
}

reverse(str)