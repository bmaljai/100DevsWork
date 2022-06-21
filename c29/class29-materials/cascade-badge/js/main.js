//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console. 
function reversePokemon(list){
    reversedList = list.reverse();
    console.log(reversedList);
    return reversedList;
}

//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.
function squareVsCube(intArrayA,intArrayB){
    try{
        if(intArrayA.length<1 || intArrayB.length<1){return false}
        //sum the squares of each element in a
        const totalOfA = sumElements(squareElements(intArrayA))
        //sum the cubes of each element in b
        const totalOfB = sumElements(cubeElements(intArrayB))
        console.log("a:",totalOfA,"b:",totalOfB);
        //is totalofa greater than totalofb
        if(totalOfA > totalOfB){
            return true;
        }else{
            return false;
        }
    }catch(e){
        console.log(e);
        return false;
    }
}
function squareElements(orderedList){
    return orderedList.map(item=>item**2)
}
function cubeElements(orderedList){
    return orderedList.map(item=>item**3)
}
function sumElements(orderedList){
    return orderedList.reduce((acc,item)=>acc+=item,0)
}
console.log(squareVsCube([1,2,3,0],[1,1,1,20]));
console.log(squareVsCube([1,2,3,0],[1,1,1,1]));
console.log(squareVsCube([1,2,3,0,],[1]));
console.log(squareVsCube([1,2,3,0,]));
console.log(squareVsCube());
console.log(squareVsCube("hello","goodbye"));
//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]
function filterMultiples(orderedArrayList){
    return orderedArrayList.filter((item,index) => {
        return item%index===0;
    })
}
console.log(filterMultiples([22, -6, 32, 82, 9, 25]))
console.log(filterMultiples([68, -1, 1, -7, 10, 10]))
//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.
function returnSum(arrayOfNumbersAsStrings){
    return arrayOfNumbersAsStrings.reduce((accumulator,item)=>accumulator+ +item,0);
}
console.log(returnSum(['22', '-6', 32, 82, '9', 25]));
console.log(returnSum(['22']));