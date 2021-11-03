function shaqPieChart() {
    CanvasJS.addColorSet("kareem",
        [//colorSet Array
            "#009429",
            "#FDB927",
        ]);


    var chart = new CanvasJS.Chart("pieChartContainer", {
        animationEnabled: true,
        colorSet: "kareem",
        title: {

        },
        data: [{
            type: "pie",
            startAngle: 240,
            yValueFormatString: "##0.00\"%\"",
            indexLabel: "{label} {y}",
            dataPoints: [
                { y: 70, label: "MILWAUKEE BUCKS (1969-1975)" },
                { y: 30, label: "LOS ANGELES LAKERS (1975-89)" }
            ]
        }]
    });
    chart.render();

}

export default shaqPieChart;