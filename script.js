// Question 01 : //


// Intialization of an Array//
let array1 = [1,2,3,4,5];
console.log(array1);

// Removing 2 number from the array by using splice() Method//
array1.splice(0,2);
console.log(array1);

// Adding 3 new number to the array by using push() Method//
array1.push(6,7,8);

for(let i = 0 ; i < array1.length ; i++){
    
    console.log(array1[i]);
}




// Question 02: //


let array2 = [1,2,3,4,5];

// using for loop to iterate the array2//

for(let i = 0 ; i < array2.length ; i++){
    
    // use if condition to print the array //

    if(array2[i] % 2 === 0){
        console.log(i);
    }
}



//Question 3: //


let array3 = [1,2,2,3,2,5];

for(let i = 0;  i < array3.length ; i++){
   // print element that are greater than  the previous number
    if(array3[i] > array3[i-1]){
        console.log(array3[i])
    }
}




Question 04 //

let array4 = [3,4,5];

array4.unshift(1,2);

array4.pop();

for( let i= 1 ; i <= array4.length ; i++ ){

    console.log(i);
}



// Question 5 : //

let array5 = [1,2,3,4,5];


// finding the following index//
let index = array5.indexOf(3);

// removing elements after index
array5.splice(index);

for(let i = 0 ; i <= array5.length ; i++){

    console.log(array5[i])
}


