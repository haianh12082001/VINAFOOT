// document.getElementById("content").innerHTML
var str = document.getElementById('ladi-headline-fixed');
var x = str.innerHTML
console.log(str)
for (var i = 0; i < str.length; i++) {
    console.log(str.charAt(i));

}
str.innerText = x.charAt(i)
// str.innerHTML = "<i>Hello</i>"