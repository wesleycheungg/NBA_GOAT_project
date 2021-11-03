function hakeemDrawChart() {
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
        color: "rgba(186,12,47)",
        dataPoints: [
            {y: 0, indexLabel: "Rookie of the Year (0)" },
            {y: 3, indexLabel: "Block Champs (3)" },
            {y: 0, indexLabel: "Scoring Champs (0)" },
            {y: 12, indexLabel: "All-Stars (12)" },
            {y: 9, indexLabel: "All-Defensive (9)" },
            {y: 12, indexLabel: "All-NBAs (12)" },
            {y: 2, indexLabel: "NBA-Finals MVPs (2)" },
            {y: 1, indexLabel: "MVPs (1)" },
            {y: 2, indexLabel: "NBA Titles (2)" },
        ]
        }]
    });

    chart.render();
}
export default hakeemDrawChart