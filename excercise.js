//Exercise #1
//Part1
const customerLine = ["Sofia", "David", "Juan"];
//Part2
customerLine.push("Sara","Augustin");  // ["Sofia", "David", "Juan", "Sara", "Augustin"]
const beingCalled = customerLine.shift();
console.log(beingCalled); // "Sofia"
console.log(customerLine); // ["David", "Juan", "Sara", "Augustin"]
customerLine.splice(1,0, "Renata");
//Part3
console.log(customerLine); //[ 'David', 'Renata', 'Juan', 'Sara', 'Augustin' ]
//หรือ
const davidIndex = customerLine.indexOf("David"); //หาindexของDavid
console.log(davidIndex); // index 0
customerLine.splice(davidIndex + 1,0, "Renata"); //ใช้.splice()เพื่อใส่Renataต่อจากindexของDevid(0)+1คือ index1 , 0=ไม่ต้องการลบelementใดออกเลย
console.log(customerLine); //[ 'David', 'Renata', 'Juan', 'Sara', 'Augustin' ]


//Exercise #2
for (let i = 1; i <= 5; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
      line += "* ";
    }
    console.log(line);
  }


  //Exercise #3
//ข้อ1
let xValue = 5; 

while (xValue > 0) {
  console.log(xValue);
  xValue -= 0.5;
} // 5, 4.5, 4, 3.5, 3, 2.5, 2, 1.5, 1, 0.5


//ข้อ2
let num = 1;
while (num <= 100) {
  if (num % 2 !== 0) {
    console.log(num);
  }
  num++;
} // 1 3 5 7 9 ... 99

 //ข้อ3
  function bracKets(n) {
      let i = 1;
      while (i <= n) {
        console.log(`[${i}]`);
        i++;
      }
    }
    bracKets(1) //[1]

//ข้อ4

function calculateSum(n) {
    let i = 1;
    let sum = 0;
    while (i <= n) {
      sum += i;
      i++;
    }
    return sum;
  }
  
  console.log(calculateSum(5)); // 15