const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g",
    "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%",
    "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

let lengthEl = document.getElementById("length-el")
let passwordBtn1 = document.getElementById("pass1-el")
let passwordBtn2 = document.getElementById("pass2-el")

function randomCharacter() {
    return Math.floor(Math.random() * characters.length)
}

function constructPassword() {
    let password = ""
    for (let i = 0; i < parseInt(lengthEl.value); i++) {
        password += characters[randomCharacter()]
    }
    return password
}

function generatePasswords() {
    passwordBtn1.textContent = constructPassword()
    passwordBtn2.textContent = constructPassword()
}
