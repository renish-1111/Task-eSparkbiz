
var count = 2
function addData(){
    let no= document.getElementById("no").value
    let fname=document.getElementById("fname").value
    let lname=document.getElementById("lname").value
    let enroll=document.getElementById("enroll").value
    let phone = document.getElementById("phone").value
    let table = document.getElementById("add").innerHTML
    console.log(no);
    
    let td = `<tr id="${count}">
    <td>${no}</td>
    <td>${fname}</td>
    <td>${lname}</td>
    <td>${enroll}</td>
    <td>${phone}</td>
    <td><button onClick="remove(${count})" id="">Delete</button></td>
    </tr>`
    count++;
    console.log(count);
    
    document.getElementById("add").innerHTML = document.getElementById("add").innerHTML + td
    
}

function remove(num){
    document.getElementById(num).remove()
}