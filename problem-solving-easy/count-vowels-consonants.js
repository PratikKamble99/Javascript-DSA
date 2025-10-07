function solution(a){
    a = a.toLowerCase().replace(/[^a-z]/g, '')
    
   let vovelsCount = 0
   let consonants = 0

   for (let i = 0; i < a.length; i++) {
        if(a[i] == 'a' || a[i] == 'e' || a[i] == 'i' || a[i] == 'o' || a[i] == 'u'){
            vovelsCount+=1
        }else{
            consonants+=1
        }
   }

   return { vovelsCount, consonants}
    

}


console.log(solution("12345!@#")) 