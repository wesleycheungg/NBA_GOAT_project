function wiltDrawChart() {
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
        color: "rgba(0, 47, 108)",
        dataPoints: [
            {y: 1, indexLabel: "Rookie of the Year (1)" },
            {y: 7, indexLabel: "Scoring Champ (7)" },
            {y: 11, indexLabel: "Total Rebound Champ (11)" },
            {y: 1, indexLabel: "Assist Champ (1)" },
            {y: 13, indexLabel: "All-Stars (13)" },
            {y: 10, indexLabel: "All-NBAs (10)" },
            {y: 2, indexLabel: "All-Defensive (2)" },
            {y: 1, indexLabel: "NBA-Finals MVPs (1)" },
            {y: 4, indexLabel: "MVPs (4)" },
            {y: 2, indexLabel: "NBA Titles (2)" },
        ]
        }]
    });

    chart.render();
}
export default wiltDrawChart