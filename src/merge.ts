
export function merge (collection_1: number[], collection_2: number[]): number[] {
    var array1pointer = 0;
    var array2pointer = 0;
    var newList:number[] = [];
    while (array1pointer < collection_1.length || array2pointer < collection_2.length) {
        if (collection_1[array1pointer] <= collection_2[array2pointer]){
            newList.push(collection_1[array1pointer]);
            array1pointer++;
        } else {
            newList.push(collection_2[array2pointer]);
            array2pointer++;
        }
    }
    // if there are leftovers in array 1
    if (array1pointer != collection_1.length) {
        for (let index = array1pointer; index < collection_1.length; index++) {
            newList.push(collection_1[index])
        }
    }
    // else leftovers in array 2
    else {
        for (let index = array2pointer; index < collection_2.length; index++) {
            newList.push(collection_2[index])
        }
    }
    return newList;
}

