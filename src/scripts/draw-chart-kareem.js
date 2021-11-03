function kareemDrawChart() {
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
        color: "rgba(85, 37, 130)",
        dataPoints: [
            {y: 1, indexLabel: "Rookie of the Year (1)" },
            {y: 4, indexLabel: "Block Champs (4)" },
            {y: 2, indexLabel: "Scoring Champs (2)" },
            {y: 19, indexLabel: "All-Stars (19)" },
            { y: 11, indexLabel: "All-Defensive (11)" },
            {y: 15, indexLabel: "All-NBAs (15)" },
            {y: 2, indexLabel: "NBA-Finals MVPs (2)" },
            {y: 6, indexLabel: "MVPs (6)" },
            {y: 6, indexLabel: "NBA Titles (6)" },
        ]
        }]
    });

    chart.render();
}
export default kareemDrawChart