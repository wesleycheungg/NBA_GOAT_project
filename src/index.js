
import players from "./scripts/data";

import curryDrawChart from "./scripts/draw-chart-curry";
import lebronDrawChart from "./scripts/draw-chart-lebron";
import mjDrawChart from "./scripts/draw-chart-jordan";
import kobeDrawChart from "./scripts/draw-chart-kobe";
import shaqDrawChart from "./scripts/draw-chart-shaq";

document.addEventListener("DOMContentLoaded", () => {


    const curry = document.getElementById("1")
    let playerName = document.getElementById("player-name")
    let playerTeam = document.getElementById("player-team")
    let playerNickName = document.getElementById("player-nickname")
    let playerImg = document.getElementById("player-img")
    curry.addEventListener("click", function() {
        playerName.innerHTML = players[0].fullName
        playerTeam.innerHTML = players[0].team
        playerNickName.innerHTML = players[0].nickname[0]
        playerImg.style.backgroundImage = `url("./src/img/bio/${players[0].img}.png")`
        curryDrawChart();
    })

    const lebron = document.getElementById("2")
    playerName = document.getElementById("player-name")
    playerTeam = document.getElementById("player-team")
    lebron.addEventListener("click", function () {
        playerName.innerHTML = players[1].fullName
        playerTeam.innerHTML = players[1].team
        playerNickName.innerHTML = players[1].nickname[0]
        lebronDrawChart();
    })

    const mj = document.getElementById("3")
    playerName = document.getElementById("player-name")
    playerTeam = document.getElementById("player-team")
    mj.addEventListener("click", function () {
        playerName.innerHTML = players[2].fullName
        playerTeam.innerHTML = players[2].team
        playerNickName.innerHTML = players[2].nickname[0]
        mjDrawChart();
    })

    const kobe = document.getElementById("4")
    playerName = document.getElementById("player-name")
    playerTeam = document.getElementById("player-team")
    kobe.addEventListener("click", function () {
        playerName.innerHTML = players[3].fullName
        playerTeam.innerHTML = players[3].team
        playerNickName.innerHTML = players[3].nickname[0]
        kobeDrawChart();
    })

    const shaq = document.getElementById("5")
    playerName = document.getElementById("player-name")
    playerTeam = document.getElementById("player-team")
    shaq.addEventListener("click", function () {
        playerName.innerHTML = players[4].fullName
        playerTeam.innerHTML = players[4].team
        playerNickName.innerHTML = players[4].nickname[1]
        shaqDrawChart();
    })

})

