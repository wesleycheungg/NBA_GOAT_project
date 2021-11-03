
import players from "./scripts/data";

import curryDrawChart from "./scripts/draw-chart-curry";
import lebronDrawChart from "./scripts/draw-chart-lebron";
import mjDrawChart from "./scripts/draw-chart-jordan";
import kobeDrawChart from "./scripts/draw-chart-kobe";
import shaqDrawChart from "./scripts/draw-chart-shaq";
import kareemDrawChart from "./scripts/draw-chart-kareem";

import curryPieChart from "./scripts/draw-pie-charts/draw-pie-curry";
import lebronPieChart from "./scripts/draw-pie-charts/draw-pie-lebron";
import mjPieChart from "./scripts/draw-pie-charts/draw-pie-mj";
import kobePieChart from "./scripts/draw-pie-charts/draw-pie-kobe";
import shaqPieChart from "./scripts/draw-pie-charts/draw-pie-shaq";
import kareemPieChart from "./scripts/draw-pie-charts/draw-pie-kareem";


document.addEventListener("DOMContentLoaded", () => {


    const curry = document.getElementById("0")
    let playerName = document.getElementById("player-name")
    let playerTeam = document.getElementById("player-team")
    let playerNickName = document.getElementById("player-nickname")
    let playerImg = document.getElementById("player-img")

    let stats = document.querySelector(".career-stats")
    
    //stats
    let gamesPlayed = document.getElementById("G")
    let points = document.getElementById("PTS")
    let rebounds = document.getElementById("TRB")
    let assists = document.getElementById("AST")
    let fieldGoalsPercentage = document.getElementById("FG")
    let threePointFieldGoalPercentage = document.getElementById("FG3")
    let freeThrowPercentage = document.getElementById("FT")
    let effectiveFieldGoalPercentage = document.getElementById("eFG")
    let playerEfficiencyRating = document.getElementById("PER")
    let winShares = document.getElementById("WS")

    curry.addEventListener("click", function() {

        playerName.innerHTML = players[curry.id].fullName
        playerTeam.innerHTML = players[curry.id].team
        playerNickName.innerHTML = players[curry.id].nickname
        playerImg.src = "./src/img/bio/curry-bio.png"

        gamesPlayed.innerHTML = players[curry.id].stats["G"]
        points.innerHTML = players[curry.id].stats["PTS"]
        rebounds.innerHTML = players[curry.id].stats["TRB"]
        assists.innerHTML = players[curry.id].stats["AST"]
        fieldGoalsPercentage.innerHTML = players[curry.id].stats["FG%"]
        threePointFieldGoalPercentage.innerHTML = players[curry.id].stats["FG3%"]
        freeThrowPercentage.innerHTML = players[curry.id].stats["FT%"]
        effectiveFieldGoalPercentage.innerHTML = players[curry.id].stats["eFG%"]
        playerEfficiencyRating.innerHTML = players[curry.id].stats["PER"]
        winShares.innerHTML = players[curry.id].stats["WS"]

        stats.style.display = "block"

        curryPieChart();
        curryDrawChart();
        
    })

    const lebron = document.getElementById("1")
    lebron.addEventListener("click", function () {
        playerName.innerHTML = players[1].fullName
        playerTeam.innerHTML = players[1].team
        playerNickName.innerHTML = players[1].nickname
        playerImg.src = "./src/img/bio/lebron-bio.png"

        gamesPlayed.innerHTML = players[lebron.id].stats["G"]
        points.innerHTML = players[lebron.id].stats["PTS"]
        rebounds.innerHTML = players[lebron.id].stats["TRB"]
        assists.innerHTML = players[lebron.id].stats["AST"]
        fieldGoalsPercentage.innerHTML = players[lebron.id].stats["FG%"]
        threePointFieldGoalPercentage.innerHTML = players[lebron.id].stats["FG3%"]
        freeThrowPercentage.innerHTML = players[lebron.id].stats["FT%"]
        effectiveFieldGoalPercentage.innerHTML = players[lebron.id].stats["eFG%"]
        playerEfficiencyRating.innerHTML = players[lebron.id].stats["PER"]
        winShares.innerHTML = players[lebron.id].stats["WS"]

        lebronDrawChart();
        lebronPieChart();
    })

    const mj = document.getElementById("2")
    mj.addEventListener("click", function () {
        playerName.innerHTML = players[2].fullName
        playerTeam.innerHTML = players[2].team
        playerNickName.innerHTML = players[2].nickname
        playerImg.src = "./src/img/bio/mj-bio.png"

        gamesPlayed.innerHTML = players[mj.id].stats["G"]
        points.innerHTML = players[mj.id].stats["PTS"]
        rebounds.innerHTML = players[mj.id].stats["TRB"]
        assists.innerHTML = players[mj.id].stats["AST"]
        fieldGoalsPercentage.innerHTML = players[mj.id].stats["FG%"]
        threePointFieldGoalPercentage.innerHTML = players[mj.id].stats["FG3%"]
        freeThrowPercentage.innerHTML = players[mj.id].stats["FT%"]
        effectiveFieldGoalPercentage.innerHTML = players[mj.id].stats["eFG%"]
        playerEfficiencyRating.innerHTML = players[mj.id].stats["PER"]
        winShares.innerHTML = players[mj.id].stats["WS"]

        mjDrawChart();
        mjPieChart();
    })

    const kobe = document.getElementById("3")
    kobe.addEventListener("click", function () {
        playerName.innerHTML = players[3].fullName
        playerTeam.innerHTML = players[3].team
        playerNickName.innerHTML = players[3].nickname
        playerImg.src = "./src/img/bio/kobe-bio.png"

        gamesPlayed.innerHTML = players[kobe.id].stats["G"]
        points.innerHTML = players[kobe.id].stats["PTS"]
        rebounds.innerHTML = players[kobe.id].stats["TRB"]
        assists.innerHTML = players[kobe.id].stats["AST"]
        fieldGoalsPercentage.innerHTML = players[kobe.id].stats["FG%"]
        threePointFieldGoalPercentage.innerHTML = players[kobe.id].stats["FG3%"]
        freeThrowPercentage.innerHTML = players[kobe.id].stats["FT%"]
        effectiveFieldGoalPercentage.innerHTML = players[kobe.id].stats["eFG%"]
        playerEfficiencyRating.innerHTML = players[kobe.id].stats["PER"]
        winShares.innerHTML = players[kobe.id].stats["WS"]

        kobeDrawChart();
        kobePieChart();
    })

    const shaq = document.getElementById("4")
    shaq.addEventListener("click", function () {
        playerName.innerHTML = players[4].fullName
        playerTeam.innerHTML = players[4].team
        playerNickName.innerHTML = players[4].nickname
        playerImg.src = "./src/img/bio/shaq-bio.png"

        gamesPlayed.innerHTML = players[shaq.id].stats["G"]
        points.innerHTML = players[shaq.id].stats["PTS"]
        rebounds.innerHTML = players[shaq.id].stats["TRB"]
        assists.innerHTML = players[shaq.id].stats["AST"]
        fieldGoalsPercentage.innerHTML = players[shaq.id].stats["FG%"]
        threePointFieldGoalPercentage.innerHTML = players[shaq.id].stats["FG3%"]
        freeThrowPercentage.innerHTML = players[shaq.id].stats["FT%"]
        effectiveFieldGoalPercentage.innerHTML = players[shaq.id].stats["eFG%"]
        playerEfficiencyRating.innerHTML = players[shaq.id].stats["PER"]
        winShares.innerHTML = players[shaq.id].stats["WS"]


        shaqDrawChart();
        shaqPieChart();
    })

    const kareem = document.getElementById("5")
    kareem.addEventListener("click", function () {
        playerName.innerHTML = players[5].fullName
        playerTeam.innerHTML = players[5].team
        playerNickName.innerHTML = players[5].nickname
        playerImg.src = "./src/img/bio/kareem-bio.png"

        gamesPlayed.innerHTML = players[kareem.id].stats["G"]
        points.innerHTML = players[kareem.id].stats["PTS"]
        rebounds.innerHTML = players[kareem.id].stats["TRB"]
        assists.innerHTML = players[kareem.id].stats["AST"]
        fieldGoalsPercentage.innerHTML = players[kareem.id].stats["FG%"]
        threePointFieldGoalPercentage.innerHTML = players[kareem.id].stats["FG3%"]
        freeThrowPercentage.innerHTML = players[kareem.id].stats["FT%"]
        effectiveFieldGoalPercentage.innerHTML = players[kareem.id].stats["eFG%"]
        playerEfficiencyRating.innerHTML = players[kareem.id].stats["PER"]
        winShares.innerHTML = players[kareem.id].stats["WS"]


        kareemDrawChart();
        kareemPieChart();
    })

})

