function lebronDrawChart() {
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
        color: "rgba(29, 66, 138)",
        dataPoints: [
            { y: 0, indexLabel: "Rookie of the Year (0)" },
            {y: 7, indexLabel: "All Stars (7)" },
            {y: 2, indexLabel: "Scoring Champs (2)" },
            {y: 7, indexLabel: "All-NBAs (7)" },
            {y: 0, indexLabel: "NBA-Finals MVPs (0)" },
            {y: 3, indexLabel: "MVPs (3)" },
            {y: 3, indexLabel: "NBA Titles (3)" },
        ]
        }]
    });

    chart.render();
}
export default lebronDrawChart