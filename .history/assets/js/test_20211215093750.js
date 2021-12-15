// document.getElementById("content").innerHTML
var str = document.getElementById('ladi-headline-fixed');
var x = str.innerHTML
const array = [];
console.log(str)
for (var i = 0; i < x.length; i++) {
    // console.log(x.charAt(i));
    array.push(`${x.charAt(i)}`)
}

str.innerHTML = `<i>
                    ${for (var j = 0; j < array.length; j++) {
    console.log(array[j])
}}
                </i > `
// print(array);
// str.innerHTML = "<i>Hello</i>"