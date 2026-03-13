document.getElementById("click").addEventListener("click", function () {
    alert("click box!")
})
document.getElementById("dblclick").addEventListener("dblclick", function () {
    alert("dblclick box!")
})
document.getElementById("contextmenu").addEventListener("contextmenu", function () {
    alert("contextmenu box!")
})
document.getElementById("mousedown").addEventListener("mousedown", function () {
    alert("after mouse click excecute")
})
document.getElementById("mouseup").addEventListener("mouseup", function () {
    alert("after release mouse click excecute!")
})
document.getElementById("mouseover").addEventListener("mouseover", function () {
    alert("execute on hover!")
})
document.getElementById("mouseout").addEventListener("mouseout", function () {
    alert("execute on hover out!")
})
document.getElementById("mouseenter").addEventListener("mouseenter", function () {
    alert("execute on hover!")
})
document.getElementById("mouseleave").addEventListener("mouseleave", function () {
    alert("execute on hover out!")
})

count = 0
document.getElementById("mousemove").addEventListener("mousemove", function () {
    document.getElementById("mousemove").style.backgroundColor = `rgb(${count++},${count++},${count++})`
})
document.getElementById("mousemove").addEventListener("mouseout", function () {
    document.getElementById("mousemove").style.backgroundColor = "white"
    count = 0
})
document.getElementById("input").addEventListener("input", function (e) {
    document.getElementById("inputkey").innerHTML = e.target.value
})
document.getElementById("change").addEventListener("change", function (e) {
    document.getElementById("changekey").innerHTML = e.target.value
})
document.getElementById("focus").addEventListener("focus", function (e) {
    document.getElementById("focuskey").innerHTML = e.target.value
})
document.getElementById("focusin").addEventListener("focusin", function (e) {
    document.getElementById("focusinkey").innerHTML = e.target.value
})
document.getElementById("focusout").addEventListener("focusout", function (e) {
    document.getElementById("focusoutkey").innerHTML = e.target.value
})
document.getElementById("blur").addEventListener("blur", function (e) {
    document.getElementById("blurkey").innerHTML = e.target.value
})
document.getElementById("keyup").addEventListener("keyup", function (e) {
    document.getElementById("keyupkey").innerHTML = e.target.value
})
document.getElementById("keydown").addEventListener("keydown", function (e) {
    document.getElementById("keydownkey").innerHTML = e.target.value
})
document.getElementById("submit").addEventListener("submit", function (e) {
    e.preventDefault()
    alert("submit form")
})
document.getElementById("copy").addEventListener("copy", function (e) {
    alert("copy paste engineer")
})
document.getElementById("paste").addEventListener("paste", function (e) {
    alert("copy paste engineer")
})
document.getElementById("cut").addEventListener("cut", function () {
    alert("copy cut engineer")
})
document.getElementById("drag").addEventListener("drag", ()=> {
    alert("drag")
})
document.getElementById("select").addEventListener("select", ()=> {
    alert("why select")
})
