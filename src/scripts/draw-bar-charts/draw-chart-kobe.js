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
            {y: 1,  label: "Rookie of the Year", indexLabel: "Rookie of the Year (0)" },
            {y: 2,  label: "Scoring Champs", indexLabel: "Scoring Champs (2)" },
            {y: 18, label: "All-Stars",  indexLabel: "All-Stars (18)" },
            {y: 15, label: "All-NBAs",  indexLabel: "All-NBAs (15)" },
            {y: 2,  label: "NBA-Finals MVPs", indexLabel: "NBA-Finals MVPs (2)" },
            {y: 1,  label: "MVPs", indexLabel: "MVPs (1)" },
            {y: 5,  label: "NBA Titles", indexLabel: "NBA Titles (5)" },
        ]
        }]
    });

    chart.render();
}
export default kobeDrawChart