function hakeemPieChart() {
    CanvasJS.addColorSet("shaq",
        [//colorSet Array
            "#BA0C2F",
            "#753BBD"



        ]);


    var chart = new CanvasJS.Chart("pieChartContainer", {
        animationEnabled: true,
        colorSet: "hakeem",
        title: {

        },
        data: [{
            type: "pie",
            startAngle: 240,
            yValueFormatString: "##0.00\"%\"",
            indexLabel: "{label} {y}",
            dataPoints: [
                { y: 95, label: "HOUSTON ROCKETS (1984-2001)" },
                { y: 5, label: "TORONTO RAPTORS (2001-2002)" },

            ]
        }]
    });
    chart.render();

}

export default hakeemPieChart;