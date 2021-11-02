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
        color: "rgba(253, 185, 39)",
        dataPoints: [
            {y: 1, indexLabel: "Rookie of the Year (1)" },
            {y: 1, indexLabel: "Scoring Champs (1)" },
            {y: 17, indexLabel: "All-Stars (17)" },
            {y: 17, indexLabel: "All-NBAs (17)" },
            {y: 4, indexLabel: "NBA-Finals MVPs (4)" },
            {y: 4, indexLabel: "MVPs (4)" },
            {y: 4, indexLabel: "NBA Titles (4)" },
        ]
        }]
    });

    chart.render();
}
export default lebronDrawChart