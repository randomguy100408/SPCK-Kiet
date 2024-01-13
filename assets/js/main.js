const strHeight = document.getElementById("height")
const strPosition = document.getElementById("position")
const strNationality = document.getElementById("nation")
const strTeam = document.getElementById("club")
const strPlayer = document.getElementById("name")
const strWeight = document.getElementById("weight")
const strNumber = document.getElementById("number")
const strGender = document.getElementById("gender")
const strSide = document.getElementById("side")
const dateBorn = document.getElementById("born")
const idPlayer = document.getElementById("playerPic")
const strKit = document.getElementById("kit")
searchPlayer.addEventListener("change", function (e) {
    fetch(`https://cors-anywhere.herokuapp.com/https://thesportsdb.com/api/v1/json/3/searchplayers.php?p=${e.target.value}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            strHeight.innerHTML = data.player[0].strHeight.substring(0, 6) || '--'
            strPosition.innerHTML = data.player[0].strPosition || '--'
            strPlayer.innerHTML = data.player[0].strPlayer || '--'
            strWeight.innerHTML = data.player[0].strWeight.substring(0, 5) || '--'
            strNumber.innerHTML = data.player[0].strNumber || '--'
            strGender.innerHTML = data.player[0].strGender || '--'
            strSide.innerHTML = data.player[0].strSide || '--'
            dateBorn.innerHTML = data.player[0].dateBorn || '--'
            strKit.innerHTML = data.player[0].strKit.substring(0, 4) || '--'
            idPlayer.src = data.player[0].strCutout || "https://s1.fifaaddict.com/fo4/players/ypypbgak.png?20230921"
            strNationality.innerHTML = data.player[0].strNationality || '--'
            strTeam.innerHTML = data.player[0].strTeam || '--'
        })
})
