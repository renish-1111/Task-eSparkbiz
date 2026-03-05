const myArr = [
  {name:"X00",price:100 },
  {name:"X01",price:100 },
  {name:"X02",price:100 },
  {name:"X03",price:100 },
  {name:"X04",price:110 },
  {name:"X05",price:110 },
  {name:"X06",price:110 },
  {name:"X07",price:110 }
];

myArr.sort((a,b)=>{
    a.price - b.price
})

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index].name +" " + myArr[index].price
    console.log(element);
    
}
