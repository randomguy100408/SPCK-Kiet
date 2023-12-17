const strHeight = document.getElementById("height")
const positionPlayer = document.getElementById("strPosition")
const nationPlayer = document.getElementById("strNationality")
const teamplayer = document.getElementById("strTeam")
const namePlayer = document.getElementById("name")
searchPlayer.addEventListener("change", function (e) {
    fetch(`https://thesportsdb.com/api/v1/json/3/searchplayers.php?p=${e.target.value}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            strHeight.innerHTML = data.height 
        })
})
