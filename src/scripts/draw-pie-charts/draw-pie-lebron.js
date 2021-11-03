function lebronPieChart() {
    CanvasJS.addColorSet("lebron",
        [//colorSet Array
            "#860038",
            "#98002E",
            "#041E42",
            "#552583"
        ]);


    var chart = new CanvasJS.Chart("pieChartContainer", {
        animationEnabled: true,
        colorSet: "lebron",
        title: {
            text: "Teams Played For"
        },
        data: [{
            type: "pie",
            startAngle: 240,
            yValueFormatString: "##0.00\"%\"",
            indexLabel: "{label} {y}",
            dataPoints: [
                { y: 41, label: "CLEVELAND CAVS (2003-2010)" },
                { y: 18, label: "MIAMI HEAT (2011-2014)" },
                { y: 24, label: "CLEVELAND CAVS (2015-2018)" },
                { y: 18, label: "LOS ANGELES LAKERS (2019-Current)" },
            ]
        }]
    });
    chart.render();

}

export default lebronPieChart;