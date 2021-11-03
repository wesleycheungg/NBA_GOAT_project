function mjDrawChart() {
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
        color: "rgba(206, 17, 65)",
        dataPoints: [
            {y: 1, indexLabel: "Rookie of the Year (1)" },
            {y: 10, indexLabel: "Scoring Champs (10)" },
            {y: 14, indexLabel: "All-Stars (14)" },
            {y: 11, indexLabel: "All-NBAs (11)" },
            {y: 9, indexLabel: "All-Defensive (9)" },
            {y: 6, indexLabel: "NBA-Finals MVPs (6)" },
            {y: 5, indexLabel: "MVPs (5)" },
            {y: 6, indexLabel: "NBA Titles (6)" },
        ]
        }]
    });

    chart.render();
}
export default mjDrawChart