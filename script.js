// 2

let part2 = document.getElementById("part2")
console.log(part2)

part2.addEventListener("mouseover", () => {
    alert("Hey, I told you not to hover over me!")
})

function validate () {

    var pass = document.getElementById ("pw")

    if (pass.value != 12345678) {

        var h1 = document.getElementsByTagName ("h1")
        h1[0].innerHTML = "NonBook Login"

    } else {

        alert("Password is incorrect")

    }

}