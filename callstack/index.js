let index = 0
function foo() {
    index++
    foo()
}

foo()
console.log(index);