function birdPieChart() {
    CanvasJS.addColorSet("bird",
        [//colorSet Array
            "#BA9653"
        ]);


    var chart = new CanvasJS.Chart("pieChartContainer", {
        animationEnabled: true,
        colorSet: "bird",
        title: {
            text: "Teams Played For"
        },
        data: [{
            type: "pie",
            startAngle: 240,
            yValueFormatString: "##0.00\"%\"",
            indexLabel: "{label} {y}",
            dataPoints: [
                { y: 100, label: "BOSTON CELTICS (1979-1992)" }
            ]
        }]
    });
    chart.render();

}

export default birdPieChart;