/**
 * Part 1: Creating Variables and Constants
 * In this file you should define the following variables with the exact names
 *
 * 1. fullName      -> assign it a value of your full name
 * 2. yearOfBirth   -> assign it a value of your year of birth
 * 3. hobby         -> assign it a value of your favorite hobby
 * 4. funFact       -> assign it a value of some fun fact about yourself
 * 5. image         -> assign it a value of a url of your image or ant image that represents you online
 */

let fullName: string = "captain mohammad";
let yearOfBirth: number = 1988;
let hobby: string = "rugby player";
let funFact: string = "sky is my limit"
let image: string = "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";

/**
 * Part 2: String Interpolation
 * Create the following new variables that interpolate
 * the variables defined above into strings.
 *
 * 1. fullNameString      -> assign it: "My name is {fullName}""
 * 2. ageString           -> assign it: "I am {YOUR_AGE}"", and make sure you calculate your age from your year of birth
 * 3. hobbyString         -> assign it: "My hobby is {YOUR_HOBBY}""
 */

let fullNameString: string = `my name is ${fullName}`;
let ageString: string = `I am ${new Date().getFullYear() - yearOfBirth}`;
let hobbyString: string = `my hobby is ${hobby}`;

/**
 * Part 3: Re-assignment
 * Increment your hacker score
 * */

let hackerScore = 0;

function incrementBy1() {
  // Increment hackerScore by 1 👇🏻
  hackerScore++;
}
function decrementBy1() {
  // decrement hackerScore by 1 👇🏻
  hackerScore--;
}

function incrementBy2() {
  // Increment hackerScore by 2 👇🏻
  hackerScore += 2;
}
function decrementBy2() {
  // decrement hackerScore by 2 👇🏻
  hackerScore -= 2;
}

// Ignore this part (:
export {
  fullName,
  yearOfBirth,
  hobby,
  funFact,
  image,
  fullNameString,
  ageString,
  hobbyString,
  incrementBy1,
  incrementBy2,
  decrementBy1,
  decrementBy2,
};
