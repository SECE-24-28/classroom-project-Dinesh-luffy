/*
console.log("Hello World");
console.log(2+3);

// x=65;
// y=56;
// console.log(x+y);    Dont use var unless absolutely necessary as it can be used 
//                      even before initialiZation and it can also be reinitialized

var a=10;
var a=80;      // possible redeclaring var

let b="H1"
    // let b="H2"          // -not possible redeclaring let

const c=30.5;          // cannot change the value or the data type when declared with const
      // const c=50.5;     // not possible redeclaring const
c=70.9;

console.log(a,b,c);   */

/*
//Array - is a datatype that stores multiple elements of the same datatype
let a=[12,15,67];
console.log(a);

const c=[34,"Hello",true]; //can change or add or remove elements from the array even if its 
//                           constant as we care not redeclaring the variable and we are not 
//                            changing its datatype
                          // c=[45,78,90];    // not allowed 
c.push(78);
//c.sort();
console.log(c);

c[2]=false;
console.log("Before:",c);

c.pop();
console.log("After:",c);

c.push("World",890.341234,422345);  //insert multiplpe elements at the end
console.log("Updated:",c);
console.log("Length:",c.length);

c.unshift(999,111);  //unshift(element); insert element at the beginning
console.log("After unshift:",c);

c.shift();   //removes the first element
console.log("After shift:",c);

//c.splice();    splice(startIndex,deletecount,item1,item2,item3, ....., itemn) 
//               helps us to add,remove,and alter the elements in our array

//c.splice(1,3);   //deletes 3 elements from index 1

//c.splice(2,0,"Darshan");    //adds "Darshan" at index 2 without deleting any element

//c.splice(2,1,100);    //replaces 1 element at index 2 with 100

c.splice(-1,1);   //removes the last element
console.log("After splice:",c);
  
 */


//Array Map
/*
const arr=[1,2,3,4,5,"hi"];
console.log("Before Map Function:",arr);


const newArr=arr.map(num =>num*5);
   console.log("After Map Function:",newArr); 

const newArr=arr.map( (element) => {
    if(typeof element === 'number'){
        return element*5;
    }
    else{
        return element;
    }   

} );
console.log("After Map Function:",newArr);  */

//Array Filter
/*
const newArr=arr.filter(num => num%2===0);
console.log("After Filter Function:",newArr);

const courses=["MongoDB","Express.JS","Postgress","React.JS","Node.JS"];
const updatedCourses=courses.filter( c => c.includes("JS"));
console.log("Courses with JS:",updatedCourses);

const newCourses1=courses.filter( c => c!="Postgress");
console.log("Updated Courses:",newCourses1);

const newCourses2=courses.filter( c => c!="Postgress");
console.log(Updated Courses: ${newCourses2});
   */


//Array Reduce
/*
const array=[1,2,3,4,5];
const sum=array.reduce( (accumulator, currentValue) => accumulator+currentValue , 0);
console.log("Sum of array elements:",sum);
console.log(Addition of ${array} is: ${sum});
console.log("---------------------");

const array2=[1,2,3,4,5,"hi",6];
const sum2=array2.reduce( (accumulator, currentValue) => accumulator+currentValue , 0);
console.log("Sum of array elements:",sum2);
   */



//Objects in JavaScript (like dictionaries in Python)
/*
const user={
        firstName:"Darshan",
        lastName:"S",
        company:{
            Salary:100000,
            Position:"Software Developer"
        },
};
console.log(user);
console.log(user.firstName);
console.log(user['lastName']);
console.log(user.company.Position);
console.log("--------------------------------------------------");




const user2={
        firstName:"Darshan",
        'last Name':"S",
};
console.log(user2);
console.log(user2.firstName);
console.log(user2['last Name']);
console.log("--------------------------------------------------");




const user3={};
user3.firstName="Varun";
user3['last Name']="Sankar";
user3.company={Salary:50000,Position:"Intern"};
console.log(user3);
console.log("--------------------------------------------------");

user3['last Name']="Sankar S";  //updating value
console.log(user3);
console.log("--------------------------------------------------");

delete user3.company;   //deleting key-value pair
console.log(user3);
console.log("--------------------------------------------------");



console.log(Object.keys(user));   //prints all the keys in the object\
console.log(Object.values(user)); //prints all the values in the object
console.log(Object.entries(user)); //prints all the key-value pairs in the object as array of arrays
*/



//Spread opearator
/*
const arr1=[5,6,7];
const arr2=[1,2,3,4];
const merge=[...arr1,...arr2];     //[5,6,7,1,2,3,4]
console.log("Merged Array:",merge);
*/





//Functions

//Function is a block of reusable code that we use so that we can follow rule called DO not Repeat Yourself(DRY) principle
/*
1.
function add(a,b)     //hoisted function
{
    const c=a+b;
   return c;
}
console.log(add(5,8));
console.log(add(5,"hi"));
  */


/*
2.
const add=function(a,b){    //non-hoisted
    const c=a+b;
    return c;
}
console.log(add(5,8));
console.log(add(5,"hi"));
  */


/*
3.
const user={
    add:function(a,b){
        return a+b;
    }
}
console.log(user.add(4,12));
  */



/*
4.
const arr=[12,53,23,76,56];
function addArr(arr)
{
    const sum=arr.reduce((acc,num)=>acc+num);
    return sum;
}
console.log(addArr(arr));
*/
const arr = [12, 53, 23, 76, 56];
arr.forEach(x => console.log(x));