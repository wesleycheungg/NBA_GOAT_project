function wiltDrawChart() {
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
        color: "rgba(0, 47, 108)",
        dataPoints: [
            {y: 1, label: "Rookie of the Year", indexLabel: "Rookie of the Year (1)" },
            {y: 7, label: "Scoring Champ", indexLabel: "Scoring Champ (7)" },
            {y: 11,label: "Total Rebound Champ",  indexLabel: "Total Rebound Champ (11)" },
            {y: 1, label: "Assist Champ", indexLabel: "Assist Champ (1)" },
            {y: 13,label: "All-Stars",  indexLabel: "All-Stars (13)" },
            {y: 10,label: "All-NBAs",  indexLabel: "All-NBAs (10)" },
            {y: 2, label: "All-Defensive", indexLabel: "All-Defensive (2)" },
            {y: 1, label: "NBA-Finals MVPs", indexLabel: "NBA-Finals MVPs (1)" },
            {y: 4, label: "MVPs", indexLabel: "MVPs (4)" },
            {y: 2, label: "NBA Titles", indexLabel: "NBA Titles (2)" },
        ]
        }]
    });

    chart.render();
}
export default wiltDrawChart