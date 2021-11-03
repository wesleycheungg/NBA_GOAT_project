function magicPieChart() {
    CanvasJS.addColorSet("magic",
        [//colorSet Array
            "#552583"
        ]);


    var chart = new CanvasJS.Chart("pieChartContainer", {
        animationEnabled: true,
        colorSet: "magic",
        title: {
            text: "Teams Played For"
        },
        data: [{
            type: "pie",
            startAngle: 240,
            yValueFormatString: "##0.00\"%\"",
            indexLabel: "{label} {y}",
            dataPoints: [
                { y: 100, label: "LOS ANGELES LAKERS (1979-1996)" }
            ]
        }]
    });
    chart.render();

}

export default magicPieChart;