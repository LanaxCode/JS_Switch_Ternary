// const sub = dokument.getElemenById("sub")
const password = document.getElementById("pass")

const text = document.getElementById("text")



function check() {
    // console.log(num.value)
    let passSave = password.value.length >= 8

    passSave ? text.innerHTML = "<span style='color: green;'>Welcome to your Account</span>" : text.innerHTML = "<span style='color: red;'>Your Password is to short</span>"
}



