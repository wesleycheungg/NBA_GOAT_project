function birdDrawChart() {
    var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,

    title:{
        text:"Career Accolades"
    },
    axisX:{
        gridThickness: 0,
        tickLength: 0,
        lineThickness: 1,
        labelFormatter: function () {
            return " ";
        }
    },
    axisY2:{
        gridColor: "rgba(1,77,101,.1)",
        gridThickness: 0,
        tickLength: 0,
        lineThickness: 0,
        labelFormatter: function () {
            return " ";
        }
    },
    data: [{
        indexLabelFontSize: 10,
        type: "bar",
        axisYType: "secondary",
        color: "rgba(0, 122, 51)",
        dataPoints: [
            {y: 0, indexLabel: "Rookie of the Year (0)" },
            {y: 0, indexLabel: "Scoring Champs (0)" },
            {y: 2, indexLabel: "Defensive Player of the Year (2)" },
            {y: 12, indexLabel: "All-Stars (12)" },
            {y: 3, indexLabel: "All-Defensive (3)" },
            {y: 10, indexLabel: "All-NBAs (10)" },
            {y: 2, indexLabel: "NBA-Finals MVPs (2)" },
            {y: 3, indexLabel: "MVPs (3)" },
            {y: 3, indexLabel: "NBA Titles (3)" },
        ]
        }]
    });

    chart.render();
}
export default birdDrawChart