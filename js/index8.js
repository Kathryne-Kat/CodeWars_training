//#1
function maskify(cc) {
    if (cc.length <= 4) {
        return cc;
      }      
      return '#'.repeat(cc.length - 4) + cc.slice(-4);      
    }   

    maskify("4556364607935616");
//#2
    function findSmallestInt(args) {
      //return Math.min(...args)
        let min=args[0];
        for(let i=0; i<=args.length-1; i++){
          if(args[i]<min){
            min=args[i]
          }
        }
        console.log(min);
        return min;
      }

      findSmallestInt([78,56,232,12,8])
//#3
      function problem(x){
        //your code here
        if(typeof x === 'string'){       
          return "Error"
        }
        return x*50+6
      }
problem("hello")
//#4
let summation = function (num) {
  // Code here
  let sum =0
  for(let i=1; i<=num; i++){
    sum+=i
  }
  console.log(sum);
  return sum;
}
summation(4)
//#5
const reverseSeq = n => {
  let arr=[]
  for(let i=n; i>0; i--){
    console.log(i);
    arr.push(i)
  }
  console.log(arr);
  return arr;
};
reverseSeq(5)
//#6
// Write function bmi that calculates body mass index (bmi = weight / height2).
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"
function bmi(weight, height) {
  let bmi=0;
  bmi=weight/(height*height)
  if(bmi<=18.5){
    return 'Underweight'
  }
   if(bmi<=25 && bmi>18.5){
    return "Normal"
  }
   if(bmi<=30 && bmi>25){
    return "Overweight"
  }
   if(bmi>30){
    return "Obese"
  }  
}

