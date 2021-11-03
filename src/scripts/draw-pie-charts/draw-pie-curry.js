function curryPieChart() {
    CanvasJS.addColorSet("curry",
        [//colorSet Array
            "#FFC72C"
        ]);

    var chart = new CanvasJS.Chart("pieChartContainer", {
        animationEnabled: true,
        colorSet: "curry",
        title: {
            text: "Teams Played For"
        },
        data: [{
            type: "pie",
            startAngle: 240,
            yValueFormatString: "##0.00\"%\"",
            dataPoints: [
                { y: 100, label: "GOLDEN STATE WARRIORS (2009-Current)" },
            ]
        }]
    });
    chart.render();

}

export default curryPieChart;