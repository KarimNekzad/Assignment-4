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

var h1 = document.getElementsByTagName ("h1")

    var pass = document.getElementById("pw").value 

    if (pass === "12345678") {


        h1.innerHTML = "<h1>NonBook Login</h1>"

    } else {

        alert("Password is incorrect")

    }
