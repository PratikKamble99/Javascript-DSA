// Intersection means finding common elements from both arrays exact same count

// Input 
// arr1 = [1, 1, 2, 2, 3, 3, 4, 5, 5, 6]
// arr2 = [2, 2, 3, 4, 4, 5, 5]

// Output 
// intersection = [2, 2, 3, 4, 5, 5]

const arr1 = [1, 1, 2, 2, 3, 3, 4, 5, 5, 6]
const arr2 = [2, 2, 3, 4, 4, 5, 5, 6]

function intersectionOfArrays(arr1, arr2){
    const visited = [];
    const intersection = [];
    
    // Loop through first array
    for(let i = 0; i< arr1.length; i++){

        // Loop through 2nd array for i
        for(let j = 0; j< arr2.length; j++){
            // check if matched and not in visted array then push in intersection and and break
            if(arr1[i] == arr2[j] && visited[j] !== 1 ){
                intersection.push(arr2[j])
                visited[j] = 1
                break
            }
        }
    }
    
    console.log(intersection)
}

function intersectionOfArraysOpt(arr1, arr2){
    let i = 0;
    let j = 0;
    const intersection = [];

    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]) i++
        else if(arr1[i] > arr2[j]) j++
        else{
            intersection.push(arr1[i])
            j++
            i++
        }
    }
    
    console.log(intersection)
}

intersectionOfArrays(arr1, arr2)