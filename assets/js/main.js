const number = document.getElementById("strNumber")
const position = document.getElementById("strPosition")
const nation = document.getElementById("strNationality")
const team = document.getElementById("strTeam")
const name = document.getElementById("strPlayer")
searchPlayer.addEventListener("change", function (e) {
    fetch(`https://thesportsdb.com/api/v1/json/3/searchplayers.php?p=${e.target.value}`)
        .then((res) => res.json())
        .then((data) => {

            console.log(data)
        })
})
