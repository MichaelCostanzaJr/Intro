function test() {
  console.log("start testing");

  let name = "Michael";
  console.log("name");
  console.log(name);
}

function sayHi(name) {
  console.log("Hi" + name + "" + lastName);
}

function sum(num1, num2) {
  if (!num1) {
    // if num1 does NOT exist
    console.log("Error: Num 1 can not be empty");
    return; // STOP the exec
  }

  let result = num1 + num2;
  return result;
}



function arrayTest(){
    let nums = [1,3,451,123,3456,1234,457,967,235,235,567,2345,1,234,567,6789]; 
    console.log(nums);

    // get a value by index (position)
    console.log(nums[0]);

    // iterate over the array
    for(let i=0; i < nums.length; i++){
        let num = nums[i];
        console.log(num);
    }

    console.log("------------------------");

    // 1: print numbers lower than 500
    for(let i=0; i < nums.length; i++){
        let num = nums[i];
        if(num< 500) {
            console.log(num);
        }
    }

    // 2: print the numbers from 0 to 20
    // b - 1 to 20
    // c - except 13
    for (let i=1; i < 21; i++){
        if ( i != 13 && i !=7){ // if i is NOT equal to 13
            console.log(i);
        }
    }

    // 3: print the sum of all the numbers
    let total = 0;
    for (let i=0; i<nums.length; i++){
        let num = nums [i];
        total = total + num;

    }

    console.log(total);
    // for loop
    // get every number
    // add the number to the running total (var)

    // console log your total


}






function init() {
  console.log("Intro page");

  // hook events

  // load data
  test();

  sayHi("Joseph"); // Hi Joseph
  sayHi("Rose"); // Hi Rose

  let myName = "Michael";
  sayHi(myName, "Hi");

  let result = sum(21, 21);
  console.log(result); // 42

  arrayTest();
}

// when the browser finish rendering the html
// execute init fn.
window.onload = init;
