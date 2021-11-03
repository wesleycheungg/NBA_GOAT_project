function shaqDrawChart() {
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
            {y: 1, label: "Rookie of the Year", indexLabel: "Rookie of the Year (1)" },
            {y: 2, label: "Scoring Champs", indexLabel: "Scoring Champs (2)" },
            {y: 15,label: "All-Stars",  indexLabel: "All-Stars (15)" },
            { y: 3,label: "All-Defensive",  indexLabel: "All-Defensive (3)" },
            {y: 14,label: "All-NBAs",  indexLabel: "All-NBAs (14)" },
            {y: 3, label: "NBA-Finals MVPs", indexLabel: "NBA-Finals MVPs (3)" },
            {y: 1, label: "MVPs", indexLabel: "MVPs (1)" },
            {y: 4, label: "NBA Titles", indexLabel: "NBA Titles (4)" },
        ]
        }]
    });

    chart.render();
}
export default shaqDrawChart