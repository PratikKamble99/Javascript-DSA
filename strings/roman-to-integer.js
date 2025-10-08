function solution(a){
    const map = {
                    I:1,
                    V:5,
                    X:10,
                    L:50,
                    C:100,
                    D:500,
                    M:1000
                };

    let total = 0;

    for (let i = 0; i < a.length; i++) {

        if(map[a[i]] < map[a[i+1]]){
            total+=(map[a[i+1]]-map[a[i]])
            i++
        }
        else total+=map[a[i]]
    }

    return total;

}


console.log(solution("MCMXCIV")) 