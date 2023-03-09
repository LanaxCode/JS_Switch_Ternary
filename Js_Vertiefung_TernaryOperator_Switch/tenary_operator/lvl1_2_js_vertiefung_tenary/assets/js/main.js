// const sub = dokument.getElemenById("sub")
const password = document.getElementById("pass")

const text = document.getElementById("text")



function check() {
    // console.log(num.value)
    let passSave = password.value.length >= 8

    passSave ? text.innerHTML = "Welcome to your Account" : text.innerHTML = "Your Password is short"
}



