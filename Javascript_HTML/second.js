function swap(obj) {
    temp = obj.a
    obj.a = obj.b
    obj.b = temp
}

myObj = {
    a: 10,
    b: 20
}

swap(myObj)

console.log(myObj.a);
console.log(myObj.b);





