
import players from "./scripts/data";

import curryDrawChart from "./scripts/draw-bar-charts/draw-chart-curry";
import lebronDrawChart from "./scripts//draw-bar-charts/draw-chart-lebron";
import mjDrawChart from "./scripts//draw-bar-charts/draw-chart-jordan";
import kobeDrawChart from "./scripts//draw-bar-charts/draw-chart-kobe";
import shaqDrawChart from "./scripts//draw-bar-charts/draw-chart-shaq";
import kareemDrawChart from "./scripts//draw-bar-charts/draw-chart-kareem";
import hakeemDrawChart from "./scripts//draw-bar-charts/draw-chart-hakeem";
import birdDrawChart from "./scripts//draw-bar-charts/draw-chart-bird";
import magicDrawChart from "./scripts//draw-bar-charts/draw-chart-magic";
import wiltDrawChart from "./scripts//draw-bar-charts/draw-chart-wilt";

import curryPieChart from "./scripts/draw-pie-charts/draw-pie-curry";
import lebronPieChart from "./scripts/draw-pie-charts/draw-pie-lebron";
import mjPieChart from "./scripts/draw-pie-charts/draw-pie-mj";
import kobePieChart from "./scripts/draw-pie-charts/draw-pie-kobe";
import shaqPieChart from "./scripts/draw-pie-charts/draw-pie-shaq";
import kareemPieChart from "./scripts/draw-pie-charts/draw-pie-kareem";
import hakeemPieChart from "./scripts/draw-pie-charts/draw-pie-hakeem";
import birdPieChart from "./scripts/draw-pie-charts/draw-pie-bird";
import magicPieChart from "./scripts/draw-pie-charts/draw-pie-magic";
import wiltPieChart from "./scripts/draw-pie-charts/draw-pie-wilt";


document.addEventListener("DOMContentLoaded", () => {


    let instructions = document.getElementById("instructions")


    let playerName = document.getElementById("player-name")
    let playerTeam = document.getElementById("player-team")
    let playerNickName = document.getElementById("player-nickname")
    let playerImg = document.getElementById("player-img")
    let playerBackground = document.getElementById("background")
    let playerQuote = document.getElementById("player-quote")

    //stats
    let stats = document.querySelector(".career-stats")
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

    let stephIcon = document.getElementById("img0")
    let lebronIcon = document.getElementById("img1")
    let mjIcon = document.getElementById("img2")
    let kobeIcon = document.getElementById("img3")
    let shaqIcon = document.getElementById("img4")
    let kareemIcon = document.getElementById("img5")
    let hakeemIcon = document.getElementById("img6")
    let birdIcon = document.getElementById("img7")
    let magicIcon = document.getElementById("img8")
    let wiltIcon = document.getElementById("img9")

    let main = document.querySelector(".flex-box-row")

    const curry = document.getElementById("0")
    curry.addEventListener("click", function() {
        main.style.backgroundColor = "white"

        stephIcon.style.filter = "grayscale(0)"
        stephIcon.style.border = "2px solid yellow"
        lebronIcon.style.filter = "grayscale(1)"
        lebronIcon.style.border = "0px"
        mjIcon.style.filter = "grayscale(1)"
        mjIcon.style.border = "0px"
        kobeIcon.style.filter = "grayscale(1)"
        kobeIcon.style.border = "0px"
        shaqIcon.style.filter = "grayscale(1)"
        shaqIcon.style.border = "0px"
        kareemIcon.style.filter = "grayscale(1)"
        kareemIcon.style.border = "0px"
        hakeemIcon.style.filter = "grayscale(1)"
        hakeemIcon.style.border = "0px"
        birdIcon.style.filter = "grayscale(1)"
        birdIcon.style.border = "0px"
        magicIcon.style.filter = "grayscale(1)"
        magicIcon.style.border = "0px"
        wiltIcon.style.filter = "grayscale(1)"
        wiltIcon.style.border = "0px"


        playerName.innerHTML = players[curry.id].fullName
        playerTeam.innerHTML = players[curry.id].team
        playerNickName.innerHTML = players[curry.id].nickname
        playerImg.src = "./src/img/bio/curry-bio.png"
        playerQuote.innerHTML = players[curry.id].quote

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
        instructions.style.display ="none"
        // playerBackground.style.backgroundImage = "url('/src/img/background/steph-background.png')"

        curryPieChart();
        curryDrawChart();
        
    })

    const lebron = document.getElementById("1")
    lebron.addEventListener("click", function () {
        main.style.backgroundColor = "white"

        stephIcon.style.filter = "grayscale(1)"
        stephIcon.style.border = "0px"
        lebronIcon.style.filter = "grayscale(0)"
        lebronIcon.style.border = "2px solid yellow"
        mjIcon.style.filter = "grayscale(1)"
        mjIcon.style.border = "0px"
        kobeIcon.style.filter = "grayscale(1)"
        kobeIcon.style.border = "0px"
        shaqIcon.style.filter = "grayscale(1)"
        shaqIcon.style.border = "0px"
        kareemIcon.style.filter = "grayscale(1)"
        kareemIcon.style.border = "0px"
        hakeemIcon.style.filter = "grayscale(1)"
        hakeemIcon.style.border = "0px"
        birdIcon.style.filter = "grayscale(1)"
        birdIcon.style.border = "0px"
        magicIcon.style.filter = "grayscale(1)"
        magicIcon.style.border = "0px"
        wiltIcon.style.filter = "grayscale(1)"
        wiltIcon.style.border = "0px"

        playerName.innerHTML = players[lebron.id].fullName
        playerTeam.innerHTML = players[lebron.id].team
        playerNickName.innerHTML = players[lebron.id].nickname
        playerImg.src = "./src/img/bio/lebron-bio.png"
        playerQuote.innerHTML = players[lebron.id].quote

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

        stats.style.display = "block"
        instructions.style.display = "none"
        // playerBackground.style.backgroundImage = "url('/src/img/background/lebron-background.png')"

        lebronDrawChart();
        lebronPieChart();
    })

    const mj = document.getElementById("2")
    mj.addEventListener("click", function () {
        main.style.backgroundColor = "white"

        stephIcon.style.filter = "grayscale(1)"
        stephIcon.style.border = "0px"
        lebronIcon.style.filter = "grayscale(1)"
        lebronIcon.style.border = "0px"
        mjIcon.style.filter = "grayscale(0)"
        mjIcon.style.border = "2px solid yellow"
        kobeIcon.style.filter = "grayscale(1)"
        kobeIcon.style.border = "0px"
        shaqIcon.style.filter = "grayscale(1)"
        shaqIcon.style.border = "0px"
        kareemIcon.style.filter = "grayscale(1)"
        kareemIcon.style.border = "0px"
        hakeemIcon.style.filter = "grayscale(1)"
        hakeemIcon.style.border = "0px"
        birdIcon.style.filter = "grayscale(1)"
        birdIcon.style.border = "0px"
        magicIcon.style.filter = "grayscale(1)"
        magicIcon.style.border = "0px"
        wiltIcon.style.filter = "grayscale(1)"
        wiltIcon.style.border = "0px"

        playerName.innerHTML = players[mj.id].fullName
        playerTeam.innerHTML = players[mj.id].team
        playerNickName.innerHTML = players[mj.id].nickname
        playerImg.src = "./src/img/bio/mj-bio.png"
        playerQuote.innerHTML = players[mj.id].quote

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

        stats.style.display = "block"
        instructions.style.display = "none"
        // playerBackground.style.backgroundImage = "url('/src/img/background/mj-background.png')"


        mjDrawChart();
        mjPieChart();
    })

    const kobe = document.getElementById("3")
    kobe.addEventListener("click", function () {
        main.style.backgroundColor = "white"

        stephIcon.style.filter = "grayscale(1)"
        stephIcon.style.border = "0px"
        lebronIcon.style.filter = "grayscale(1)"
        lebronIcon.style.border = "0px"
        mjIcon.style.filter = "grayscale(1)"
        mjIcon.style.border = "0px"
        kobeIcon.style.filter = "grayscale(0)"
        kobeIcon.style.border = "2px solid yellow"
        shaqIcon.style.filter = "grayscale(1)"
        shaqIcon.style.border = "0px"
        kareemIcon.style.filter = "grayscale(1)"
        kareemIcon.style.border = "0px"
        hakeemIcon.style.filter = "grayscale(1)"
        hakeemIcon.style.border = "0px"
        birdIcon.style.filter = "grayscale(1)"
        birdIcon.style.border = "0px"
        magicIcon.style.filter = "grayscale(1)"
        magicIcon.style.border = "0px"
        wiltIcon.style.filter = "grayscale(1)"
        wiltIcon.style.border = "0px"

        playerName.innerHTML = players[kobe.id].fullName
        playerTeam.innerHTML = players[kobe.id].team
        playerNickName.innerHTML = players[kobe.id].nickname
        playerImg.src = "./src/img/bio/kobe-bio.png"
        playerQuote.innerHTML = players[kobe.id].quote

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

        stats.style.display = "block"
        instructions.style.display = "none"
        // playerBackground.style.backgroundImage = "url('/src/img/background/kobe-background.png')"

        kobeDrawChart();
        kobePieChart();
    })

    const shaq = document.getElementById("4")
    shaq.addEventListener("click", function () {
        main.style.backgroundColor = "white"

        stephIcon.style.filter = "grayscale(1)"
        stephIcon.style.border = "0px"
        lebronIcon.style.filter = "grayscale(1)"
        lebronIcon.style.border = "0px"
        mjIcon.style.filter = "grayscale(1)"
        mjIcon.style.border = "0px"
        kobeIcon.style.filter = "grayscale(1)"
        kobeIcon.style.border = "0px"
        shaqIcon.style.filter = "grayscale(0)"
        shaqIcon.style.border = "2px solid yellow"
        kareemIcon.style.filter = "grayscale(1)"
        kareemIcon.style.border = "0px"
        hakeemIcon.style.filter = "grayscale(1)"
        hakeemIcon.style.border = "0px"
        birdIcon.style.filter = "grayscale(1)"
        birdIcon.style.border = "0px"
        magicIcon.style.filter = "grayscale(1)"
        magicIcon.style.border = "0px"
        wiltIcon.style.filter = "grayscale(1)"
        wiltIcon.style.border = "0px"

        wiltIcon.style.border = "0px"
        playerName.innerHTML = players[shaq.id].fullName
        playerTeam.innerHTML = players[shaq.id].team
        playerNickName.innerHTML = players[shaq.id].nickname
        playerImg.src = "./src/img/bio/shaq-bio.png"
        playerQuote.innerHTML = players[shaq.id].quote

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

        stats.style.display = "block"
        instructions.style.display = "none"
        // playerBackground.style.backgroundImage = "url('/src/img/background/shaq-background.png')"

        shaqDrawChart();
        shaqPieChart();
    })

    const kareem = document.getElementById("5")
    kareem.addEventListener("click", function () {
        main.style.backgroundColor = "white"

        stephIcon.style.filter = "grayscale(1)"
        stephIcon.style.border = "0px"
        lebronIcon.style.filter = "grayscale(1)"
        lebronIcon.style.border = "0px"
        mjIcon.style.filter = "grayscale(1)"
        mjIcon.style.border = "0px"
        kobeIcon.style.filter = "grayscale(1)"
        kobeIcon.style.border = "0px"
        shaqIcon.style.filter = "grayscale(1)"
        shaqIcon.style.border = "0px"
        kareemIcon.style.filter = "grayscale(0)"
        kareemIcon.style.border = "2px solid yellow"
        hakeemIcon.style.filter = "grayscale(1)"
        hakeemIcon.style.border = "0px"
        birdIcon.style.filter = "grayscale(1)"
        birdIcon.style.border = "0px"
        magicIcon.style.filter = "grayscale(1)"
        magicIcon.style.border = "0px"
        wiltIcon.style.filter = "grayscale(1)"
        wiltIcon.style.border = "0px"

        playerName.innerHTML = players[kareem.id].fullName
        playerTeam.innerHTML = players[kareem.id].team
        playerNickName.innerHTML = players[kareem.id].nickname
        playerImg.src = "./src/img/bio/kareem-bio.png"
        playerQuote.innerHTML = players[kareem.id].quote

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

        stats.style.display = "block"
        instructions.style.display = "none"
        // playerBackground.style.backgroundImage = "url('/src/img/background/kareem-background.png')"


        kareemDrawChart();
        kareemPieChart();
    })

    const hakeem = document.getElementById("6")
    hakeem.addEventListener("click", function () {
        main.style.backgroundColor = "white";

        stephIcon.style.filter = "grayscale(1)"
        stephIcon.style.border = "0px"
        lebronIcon.style.filter = "grayscale(1)"
        lebronIcon.style.border = "0px"
        mjIcon.style.filter = "grayscale(1)"
        mjIcon.style.border = "0px"
        kobeIcon.style.filter = "grayscale(1)"
        kobeIcon.style.border = "0px"
        shaqIcon.style.filter = "grayscale(1)"
        shaqIcon.style.border = "0px"
        kareemIcon.style.filter = "grayscale(1)"
        kareemIcon.style.border = "0px"
        hakeemIcon.style.filter = "grayscale(0)"
        hakeemIcon.style.border = "2px solid yellow"
        birdIcon.style.filter = "grayscale(1)"
        birdIcon.style.border = "0px"
        magicIcon.style.filter = "grayscale(1)"
        magicIcon.style.border = "0px"
        wiltIcon.style.filter = "grayscale(1)"
        wiltIcon.style.border = "0px"

        playerName.innerHTML = players[hakeem.id].fullName
        playerTeam.innerHTML = players[hakeem.id].team
        playerNickName.innerHTML = players[hakeem.id].nickname
        playerImg.src = "./src/img/bio/hakeem-bio.png"
        playerQuote.innerHTML = players[hakeem.id].quote

        gamesPlayed.innerHTML = players[hakeem.id].stats["G"]
        points.innerHTML = players[hakeem.id].stats["PTS"]
        rebounds.innerHTML = players[hakeem.id].stats["TRB"]
        assists.innerHTML = players[hakeem.id].stats["AST"]
        fieldGoalsPercentage.innerHTML = players[hakeem.id].stats["FG%"]
        threePointFieldGoalPercentage.innerHTML = players[hakeem.id].stats["FG3%"]
        freeThrowPercentage.innerHTML = players[hakeem.id].stats["FT%"]
        effectiveFieldGoalPercentage.innerHTML = players[hakeem.id].stats["eFG%"]
        playerEfficiencyRating.innerHTML = players[hakeem.id].stats["PER"]
        winShares.innerHTML = players[hakeem.id].stats["WS"]

        stats.style.display = "block"
        instructions.style.display = "none"
        // playerBackground.style.backgroundImage = "url('/src/img/background/hakeem-background.png')"

        hakeemDrawChart();
        hakeemPieChart();
    })

    const bird = document.getElementById("7")
    bird.addEventListener("click", function () {
        main.style.backgroundColor = "white";

        stephIcon.style.filter = "grayscale(1)"
        stephIcon.style.border = "0px"
        lebronIcon.style.filter = "grayscale(1)"
        lebronIcon.style.border = "0px"
        mjIcon.style.filter = "grayscale(1)"
        mjIcon.style.border = "0px"
        kobeIcon.style.filter = "grayscale(1)"
        kobeIcon.style.border = "0px"
        shaqIcon.style.filter = "grayscale(1)"
        shaqIcon.style.border = "0px"
        kareemIcon.style.filter = "grayscale(1)"
        kareemIcon.style.border = "0px"
        hakeemIcon.style.filter = "grayscale(1)"
        hakeemIcon.style.border = "0px"
        birdIcon.style.filter = "grayscale(0)"
        birdIcon.style.border = "2px solid yellow"
        magicIcon.style.filter = "grayscale(1)"
        magicIcon.style.border = "0px"
        wiltIcon.style.filter = "grayscale(1)"
        wiltIcon.style.border = "0px"

        playerName.innerHTML = players[bird.id].fullName
        playerTeam.innerHTML = players[bird.id].team
        playerNickName.innerHTML = players[bird.id].nickname
        playerImg.src = "./src/img/bio/bird-bio.png"
        playerQuote.innerHTML = players[bird.id].quote

        gamesPlayed.innerHTML = players[bird.id].stats["G"]
        points.innerHTML = players[bird.id].stats["PTS"]
        rebounds.innerHTML = players[bird.id].stats["TRB"]
        assists.innerHTML = players[bird.id].stats["AST"]
        fieldGoalsPercentage.innerHTML = players[bird.id].stats["FG%"]
        threePointFieldGoalPercentage.innerHTML = players[bird.id].stats["FG3%"]
        freeThrowPercentage.innerHTML = players[bird.id].stats["FT%"]
        effectiveFieldGoalPercentage.innerHTML = players[bird.id].stats["eFG%"]
        playerEfficiencyRating.innerHTML = players[bird.id].stats["PER"]
        winShares.innerHTML = players[bird.id].stats["WS"]

        stats.style.display = "block"
        instructions.style.display = "none"
        // playerBackground.style.backgroundImage = "url('/src/img/background/bird-background.png')"

        birdDrawChart();
        birdPieChart();
    })

    const magic = document.getElementById("8")
    magic.addEventListener("click", function () {
        main.style.backgroundColor = "white";

        stephIcon.style.filter = "grayscale(1)"
        stephIcon.style.border = "0px"
        lebronIcon.style.filter = "grayscale(1)"
        lebronIcon.style.border = "0px"
        mjIcon.style.filter = "grayscale(1)"
        mjIcon.style.border = "0px"
        kobeIcon.style.filter = "grayscale(1)"
        kobeIcon.style.border = "0px"
        shaqIcon.style.filter = "grayscale(1)"
        shaqIcon.style.border = "0px"
        kareemIcon.style.filter = "grayscale(1)"
        kareemIcon.style.border = "0px"
        hakeemIcon.style.filter = "grayscale(1)"
        hakeemIcon.style.border = "0px"
        birdIcon.style.filter = "grayscale(1)"
        birdIcon.style.border = "0px"
        magicIcon.style.filter = "grayscale(0)"
        magicIcon.style.border = "2px solid yellow"
        wiltIcon.style.filter = "grayscale(1)"
        wiltIcon.style.border = "0px"

        playerName.innerHTML = players[magic.id].fullName
        playerTeam.innerHTML = players[magic.id].team
        playerNickName.innerHTML = players[magic.id].nickname
        playerImg.src = "./src/img/bio/magic-bio.png"
        playerQuote.innerHTML = players[magic.id].quote

        gamesPlayed.innerHTML = players[magic.id].stats["G"]
        points.innerHTML = players[magic.id].stats["PTS"]
        rebounds.innerHTML = players[magic.id].stats["TRB"]
        assists.innerHTML = players[magic.id].stats["AST"]
        fieldGoalsPercentage.innerHTML = players[magic.id].stats["FG%"]
        threePointFieldGoalPercentage.innerHTML = players[magic.id].stats["FG3%"]
        freeThrowPercentage.innerHTML = players[magic.id].stats["FT%"]
        effectiveFieldGoalPercentage.innerHTML = players[magic.id].stats["eFG%"]
        playerEfficiencyRating.innerHTML = players[magic.id].stats["PER"]
        winShares.innerHTML = players[magic.id].stats["WS"]

        stats.style.display = "block"
        instructions.style.display = "none"
        // playerBackground.style.backgroundImage = "url('/src/img/background/magic-background.png')"

        magicDrawChart();
        magicPieChart();
    })

    const wilt = document.getElementById("9")
    wilt.addEventListener("click", function () {
        main.style.backgroundColor = "white";
        
        stephIcon.style.filter = "grayscale(1)"
        stephIcon.style.border = "0px"
        lebronIcon.style.filter = "grayscale(1)"
        lebronIcon.style.border = "0px"
        mjIcon.style.filter = "grayscale(1)"
        mjIcon.style.border = "0px"
        kobeIcon.style.filter = "grayscale(1)"
        kobeIcon.style.border = "0px"
        shaqIcon.style.filter = "grayscale(1)"
        shaqIcon.style.border = "0px"
        kareemIcon.style.filter = "grayscale(1)"
        kareemIcon.style.border = "0px"
        hakeemIcon.style.filter = "grayscale(1)"
        hakeemIcon.style.border = "0px"
        birdIcon.style.filter = "grayscale(1)"
        birdIcon.style.border = "0px"
        magicIcon.style.filter = "grayscale(1)"
        magicIcon.style.border = "0px"
        wiltIcon.style.filter = "grayscale(0)"
        wiltIcon.style.border = "2px solid yellow"

        playerName.innerHTML = players[wilt.id].fullName
        playerTeam.innerHTML = players[wilt.id].team
        playerNickName.innerHTML = players[wilt.id].nickname
        playerImg.src = "./src/img/bio/wilt-bio.png"
        playerQuote.innerHTML = players[wilt.id].quote

        gamesPlayed.innerHTML = players[wilt.id].stats["G"]
        points.innerHTML = players[wilt.id].stats["PTS"]
        rebounds.innerHTML = players[wilt.id].stats["TRB"]
        assists.innerHTML = players[wilt.id].stats["AST"]
        fieldGoalsPercentage.innerHTML = players[wilt.id].stats["FG%"]
        threePointFieldGoalPercentage.innerHTML = players[wilt.id].stats["FG3%"]
        freeThrowPercentage.innerHTML = players[wilt.id].stats["FT%"]
        effectiveFieldGoalPercentage.innerHTML = players[wilt.id].stats["eFG%"]
        playerEfficiencyRating.innerHTML = players[wilt.id].stats["PER"]
        winShares.innerHTML = players[wilt.id].stats["WS"]

        stats.style.display = "block"
        instructions.style.display = "none"
        // playerBackground.style.backgroundImage = "url('/src/img/background/wilt-background.png')"

        wiltDrawChart();
        wiltPieChart();
    })

})

