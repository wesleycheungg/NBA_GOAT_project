import Example from "./scripts/example";

import players from "./scripts/data";

import curryDrawChart from "./scripts/draw-chart-curry";
import lebronDrawChart from "./scripts/draw-chart-lebron";


document.addEventListener("DOMContentLoaded", () => {
    // console.log("hello world!")
    // const main = document.getElementById("main");
    // new Example(main);
    // const element = document.createElement('h1')
    // element.innerHTML = "The NBA GOAT Debate"
    // document.body.appendChild(element)

    const curry = document.getElementById("1")
    let playerName = document.getElementById("player-name")
    let playerTeam = document.getElementById("player-team")
    
    curry.addEventListener("click", function() {
        playerName.innerHTML = players[0].fullName
        playerTeam.innerHTML = players[0].team
    })

    // curryDrawChart();
    // lebronDrawChart();

})

