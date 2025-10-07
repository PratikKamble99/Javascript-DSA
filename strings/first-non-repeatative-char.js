
function solution(a){
    const count = {};

    for (let i = 0; i < a.length; i++) {
        if(count[a[i]]>=0){
            count[a[i]] +=1 ;
        }else{
            count[a[i]] = 1
        }
    }

    for (let i = 0; i < a.length; i++) {
        if (count[a[i]] === 1) return i;
    }
    
    return -1

}


console.log(solution("loveleetcode")) 