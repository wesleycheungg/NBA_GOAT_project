function hakeemDrawChart() {
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
        color: "rgba(186,12,47)",
        dataPoints: [
            {y: 0, label: "Rookie of the Year", indexLabel: "Rookie of the Year (0)" },
            {y: 3, label: "Block Champs", indexLabel: "Block Champs (3)" },
            {y: 0, label: "Scoring Champs", indexLabel: "Scoring Champs (0)" },
            {y: 12,label: "All-Stars", indexLabel: "All-Stars (12)" },
            {y: 9, label: "All-Defensive", indexLabel: "All-Defensive (9)" },
            {y: 12,label: "All-NBAs", indexLabel: "All-NBAs (12)" },
            {y: 2, label: "NBA-Finals MVPs", indexLabel: "NBA-Finals MVPs (2)" },
            {y: 1, label: "MVPs", indexLabel: "MVPs (1)" },
            {y: 2, label: "NBA Titles", indexLabel: "NBA Titles (2)" },
        ]
        }]
    });

    chart.render();
}
export default hakeemDrawChart