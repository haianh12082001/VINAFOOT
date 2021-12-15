// document.getElementById("content").innerHTML
var str = document.getElementById('ladi-headline-fixed');
var x = str.innerHTML
console.log(str)
for (var i = 0; i < x.length; i++) {
    console.log(x.charAt(i));
    str.innerText = x.charAt(i)
}

// str.innerHTML = "<i>Hello</i>"