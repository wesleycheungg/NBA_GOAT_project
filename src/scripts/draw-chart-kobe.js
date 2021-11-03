function kobeDrawChart() {
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
        color: "rgba(253, 185, 39)",
        dataPoints: [
            {y: 1, indexLabel: "Rookie of the Year (0)" },
            {y: 2, indexLabel: "Scoring Champs (2)" },
            {y: 18, indexLabel: "All-Stars (18)" },
            {y: 15, indexLabel: "All-NBAs (15)" },
            {y: 2, indexLabel: "NBA-Finals MVPs (2)" },
            {y: 1, indexLabel: "MVPs (1)" },
            {y: 5, indexLabel: "NBA Titles (5)" },
        ]
        }]
    });

    chart.render();
}
export default kobeDrawChart