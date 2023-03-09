// const sub = dokument.getElemenById("sub")
const num = document.getElementById("age")
const text = document.getElementById("text")



function check() {
    // console.log(num.value)

    let age = num.value >= 18

    age ? text.innerHTML = "du bist volljährig" : text.innerHTML = "du bist zu jung"
}

