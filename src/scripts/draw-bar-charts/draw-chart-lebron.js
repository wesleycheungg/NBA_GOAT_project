function lebronDrawChart() {
    var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,

    title:{
        text: "Career Accolades",
        fontFamily: 'Rock Salt'
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
            {y: 1, label: "Scoring Champs", indexLabel: "Scoring Champs (1)" },
            {y: 17,label: "All-Stars",  indexLabel: "All-Stars (17)" },
            {y: 17,label: "All-NBAs",  indexLabel: "All-NBAs (17)" },
            {y: 4, label: "NBA-Finals MVPs", indexLabel: "NBA-Finals MVPs (4)" },
            {y: 4, label: "MVPs", indexLabel: "MVPs (4)" },
            {y: 4, label: "NBA Titles", indexLabel: "NBA Titles (4)" },
        ]
        }]
    });

    chart.render();
}
export default lebronDrawChart