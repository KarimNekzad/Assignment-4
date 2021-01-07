// 1
function fightingbtns() {
    var btn = document.getElementsByTagName("button")

    var message = document.createTextNode("I'm right")

    btn[0].appendChild(message)
}

function otherbtn() {

    var btn = document.getElementsByTagName("button")

    var message = document.createTextNode("No I'm right!")

    btn[1].appendChild(message)

}

// 2

let part2 = document.getElementById("part2")
console.log(part2)

part2.addEventListener("mouseover", () => {
    alert("Hey, I told you not to hover over me!")
})

// 4

// below works test
// const checkpass = () => {
//     console.log('hi')
//     console.log('hi2')
//     const pass = '12345678'
//     const input = document.getElementById('password').value
//     if (pass === input) {
//         console.log('YAY')
//     }
// }

// const checkpass = () => {
//     console.log('hi')
//     console.log('hi2')
//     const pass = '12345678'
//     const input = document.getElementById('password').value
//     let msg = document.createElement("h1")
//     if (pass === input) {
//         let text = document.createTextNode("Correct")
//         msg.append(text)
//     } else {
//         alert("Incorrect Passowrd!")
//     }
//     document.body.appendChild(msg)
// }

const checkpass = () => {
    document.getElementById("part4-h1").innerText = "Type your password"
    console.log('hi')
    console.log('hi2')
    const pass = '12345678'
    const input = document.getElementById('password').value
    if (pass === input) {
        document.getElementById("part4-h1").innerText = "Correct!"
    } else {
        alert("Incorrect Passowrd!")
    }
}