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
            { y: 0, label: "Rookie of the Year", indexLabel: "Rookie of the Year (0)" },
            { y: 0, label: "Scoring Champs", indexLabel: "Scoring Champs (0)" },
            { y: 2, label: "Defensive Player of the Year", indexLabel: "Defensive Player of the Year (2)" },
            {y: 12, label: "All-Stars", indexLabel: "All-Stars (12)" },
            { y: 3, label: "All-Defensive", indexLabel: "All-Defensive (3)" },
            { y: 10, label: "All-NBAs", indexLabel: "All-NBAs (10)" },
            { y: 2, label: "NBA-Finals MVPs", indexLabel: "NBA-Finals MVPs (2)" },
            { y: 3, label: "MVPs", indexLabel: "MVPs (3)" },
            { y: 3, label: "NBA Titles", indexLabel: "NBA Titles (3)" },
        ]
        }]
    });

    chart.render();
}
export default birdDrawChart