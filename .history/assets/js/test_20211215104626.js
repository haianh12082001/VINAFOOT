// document.getElementById("content").innerHTML
var str = document.getElementById('ladi-headline-fixed');
var x = str.innerHTML
const array = [];
console.log(str)
for (var i = 0; i < x.length; i++) {
    // console.log(x.charAt(i));
    array.push(`${x.charAt(i)}`)
}
array.slice().reverse().forEach((tag) => {
    let liTag = `
                <i>${tag}</i>
                `
    // console.log(tag)
    str.insertAdjacentHTML('afterbegin', liTag)
    // console.log(str.insertAdjacentHTML('afterbegin', liTag))
})

// str.innerHTML = `<i>

//                 </i>`
// print(array);
// str.innerHTML = "<i>Hello</i>"