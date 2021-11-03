function mjPieChart() {
    CanvasJS.addColorSet("kobe",
        [//colorSet Array
            "#552583"
        ]);


    var chart = new CanvasJS.Chart("pieChartContainer", {
        animationEnabled: true,
        colorSet: "kobe",
        title: {
            text: "Teams Played For"
        },
        data: [{
            type: "pie",
            startAngle: 240,
            yValueFormatString: "##0.00\"%\"",
            indexLabel: "{label} {y}",
            dataPoints: [
                { y: 100, label: "LOS ANGELES LAKERS (1998-2016)" }
            ]
        }]
    });
    chart.render();

}

export default mjPieChart;