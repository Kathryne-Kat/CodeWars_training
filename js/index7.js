//#1
// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.
// The binary number returned should be a string.
// Examples:(Input1, Input2 --> Output (explanation)))
// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
function addBinary(a,b) {
   return  (a+b).toString(2); //
}

// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
// #Examples:
// Kata.getMiddle("test") should return "es"
// Kata.getMiddle("testing") should return "t"
function getMiddle(s)
{
  let str=s.length;
  if(str%2===0){
    return s[(str/2)-1]+s[(str/2)]
  }
  
  if(str%2!==0){
    return s[((str-1)/2)]
  }
}

getMiddle("test")
getMiddle("testing")

const binaryArrayToNumber = arr => {
  return parseInt(arr.join(''), 2)
};

binaryArrayToNumber([0,0,1,1])