const x={
    name:'Katy',
    Surname:"Kov"
    }

const y={
    name:'Nik',
    Surname:"V",
    work:{r:'game',t:'yyy'},

    sayHi(){
// alert(this.Surname)
    }
}
y.sayHi()

if (JSON.stringify(x)===JSON.stringify(y)){
    console.log('true');
}else{
    console.log('false');
}

const z={...x}
console.log(z);

const w=Object.assign({},y)
console.log(w);

const q=[1,2,3  ]
console.log(Array.isArray(q));

const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number) => {
  console.log(number);
});

const doubNum = numbers.map((number) => { return number * 2;});
console.log(doubNum); // [2, 4, 6, 8, 10]

const num = [1, 2, 3, 4, 5];

console.log(num.includes(4));

console.log(num.find(number=> number === 4));

function registerGuest(name, callback) {
    console.log(`Реєструємо гостя ${name}.`);
    callback(name);
  }
  
  // Передаємо інлайн функцію greet у якості колбека
  registerGuest("Манго", function greet(name) {
    console.log(`Ласкаво просимо ${name}.`);
  });
  
  // Передаємо інлайн функцію notify у якості колбека
  registerGuest("Полі", function notify(name) {
    console.log(`Шановний(а) ${name}, ваш номер буде готовий за 30 хвилин.`);
  });

  const multiply = (a, b) => a * b;

  multiply(3,5)
  console.log(multiply(3,5));

  

  const myArrowFunction = (...args) => {
    console.log(args);
  };
  
  myArrowFunction(1, 2, 3);


  const myFunc = (...args) => {  console.log(args);};


  myFunc(56853,444,55,667,7788)


  let obj = Object.create(null);

  let obj1={}

  console.log(obj);
  console.log(obj1);

//   Object.freeze(obj)

  console.log(obj.name="Peta");

  function arrayDiff(a, b) {
   const c= b.join("")
   console.log(c);
    const q=a.filter(num=>{return num!== +c})
    console.log(q);
  }

arrayDiff([1,2],[1]); //== [2]


  arrayDiff([1,2,2,2,3],[2]) //== [1,3]


//   Ваша мета в цій ката — реалізувати різницеву функцію, яка віднімає один список з іншого та повертає результат.

// Він повинен видалити всі значення зі списку a, які присутні в списку, bзберігаючи їх порядок.

// arrayDiff([1,2],[1]) == [2]
// Якщо значення присутнє в b, усі його входження мають бути видалені з іншого:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

function maskify(cc) {
    if (cc.length <= 4) {
        return cc;
      }
      
      // Mask all but the last four characters
      return '#'.repeat(cc.length - 4) + cc.slice(-4);

      
    }
    

    maskify("4556364607935616");

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

      function problem(x){
        //your code here
        if(typeof x === 'string'){       
          return "Error"
        }
        return x*50+6
      }
problem("hello")

var summation = function (num) {
  // Code here
  let sum =0
  for(let i=1; i<=num; i++){
    sum+=i
  }
  console.log(sum);
  return sum;
}
summation(4)

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