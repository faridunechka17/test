let tags = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1','div', 'div', 'li', 'h1', 'p', 'h1', 'ol', 'br'];
let tagConst = {};
tags.forEach(i => {
    tagConst[i] = (tagConst[i] || 0) + 1;
})
console.log(tagConst);


let a = [1,2,3,45,32,56,61, 23,12,2,34,5,6,3,76,67,87,76]
let b = [1,45,32,3,4,2,56,76,67,87,89,8,56,54]
let result = []


for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
            if (a[i] === b[j]){
                result.push(a[i])
            }
    }
}

console.log(result)