// document.getElementById("content").innerHTML
var str = document.getElementById('ladi-headline-fixed');
var x = str.innerHTML
const array = [];
console.log(str)
for (var i = 0; i < x.length; i++) {
    // console.log(x.charAt(i));

    array.push(`${x.charAt(i)}`)
}
document.getElementById('ladi-headline-fixed').innerHTML = "";
array.slice().reverse().forEach((tag) => {
    // x.remove();  
    if (tag === " ") {
        tag = "&nbsp;"
    }
    let liTag = `
                
                <span>${tag}</span>
                `
    str.insertAdjacentHTML('afterbegin', liTag)
    // console.log(str.insertAdjacentHTML('afterbegin', liTag))
})

