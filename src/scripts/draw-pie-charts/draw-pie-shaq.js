function shaqPieChart() {
    CanvasJS.addColorSet("shaq",
        [//colorSet Array
            "#0077C0",
            "#FDB927",
            "#98002E",
            "#E56020",
            "#041E42",
            "#007A33"




        ]);


    var chart = new CanvasJS.Chart("pieChartContainer", {
        animationEnabled: true,
        colorSet: "shaq",
        title: {
            text: "Teams Played For"
        },
        data: [{
            type: "pie",
            startAngle: 240,
            yValueFormatString: "##0.00\"%\"",
            indexLabel: "{label} {y}",
            dataPoints: [
                { y: 20, label: "ORLANDO MAGIC (1992-1996)" },
                { y: 40, label: "LOS ANGELES LAKERS (1996-2004)" },
                { y: 25, label: "MIAMI HEAT (2004-2007)" },
                { y: 18, label: "PHONEIX SUNS (2007-2009)" },
                { y: 5, label: "CLEVELAND CAVS (2009-2010)" },
                { y: 5, label: "BOSTON CELTICS (2010-2011)" },
            ]
        }]
    });
    chart.render();

}

export default shaqPieChart;