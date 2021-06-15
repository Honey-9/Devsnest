

// 1. Write a JavaScript program to list the properties of a JavaScript object. Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; Sample Output: name,sclass,rollno

//  2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property. Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; 

// 3. Write a JavaScript program to get the length of a JavaScript object.  Sample object : var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; 

// 4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books. var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }]; 

// 5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes. Volume of a cylinder : V = πr2h where r is the radius and h is the height of the cylinder. Try To Attempt : Difficult Level Increased 

// 6. Write a JavaScript program to sort an array of JavaScript objects.  Sample Object : var library = [ { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }]; 
// Expected Output: [[object Object] { author: "Walter Isaacson", libraryID: 4264, title: "Steve Jobs" }, [object Object] { author: "Suzanne Collins", libraryID: 3245, title: "Mockingjay: The Final Book of The Hunger Games" }, [object Object] { author: "The Road Ahead", libraryID: 1254, title: "Bill Gates" }]


//  solutions

// task 1

// const student ={
//   name: 'David Rayy',
//   sclass:'VI',
//   rollNo:12
// };

// console.log(student.name,student.sclass,student.rollNo)

//  task 2 


// const student ={
//   name: 'David Rayy',
//   sclass:'VI',
//   rollNo:12
// };

// delete student.rollNo;
// console.log(student);


// task 3


// const student ={
//   name: 'David Rayy',
//   sclass:'VI',
//   rollNo:12
// };

// console.log(Object.keys(student).length);



// task 4
// const library = [ { author: 'Bill Gates',
//     title: 'The Road Ahead',
//     readingStatus: true 
//   },

//     { author: 'Steve Jobs',
//         title: 'Walter Isaacson',
//         readingStatus: true
//       },

//     { author: 'Suzanne Collins',
//         title: 'Mockingjay: The Final Book of The Hunger Games',
//         readingStatus: false
//        }
//       ];

// for(let i=0; i < library.length; i++){
    
//     let book = `'${library[i].title}' by '${library[i].author}'`
//     if(library[i].readingStatus)
//         console.log(`Already Read : ${book}`)
//     else
//         console.log(`Not Read : ${book}`)
// }



// task 5
// const cylinder=
// {
//     r:0,
//     h:0,
//     volume(){
//     return ((22/7)*this.r*this.h).toFixed(4);
// },};
// cylinder.r=2;
// cylinder.h=2;
// console.log(cylinder.volume());