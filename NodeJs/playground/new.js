let realString = "$renish^ponkiya _renish@gmail.com [phone ]]rajkot";
realString = realString.replaceAll(" ", "")


let pos = {
    fname: NaN,
    lname: NaN,
    phone: NaN,
    email: NaN,
    city: NaN,
    
}

let count = 0;
for (let i = 0; i < realString.length; i++) {
    const element = realString[i];
    
    if (element == "$") {
        pos.fname = count++
    }
    else if (element == "^") {
        pos.lname = count++
    }
    else if (element == "_") {
        pos.email = count++
    }
    else if (element == "[") {
        pos.phone = count++
    }
    else if (element == "]") {
        pos.city = count++
    }
}

// realString.replaceAll("$",",")
realString = realString.split(/[$^_\\[\]]/)
realString = realString.slice(1)
console.log(realString);

console.log(pos);
