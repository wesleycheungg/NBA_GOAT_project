function wiltPieChart() {
    CanvasJS.addColorSet("wilt",
        [//colorSet Array
            "#FFCD00",
            "#ED174C",
            "#FDB927"
        ]);


    var chart = new CanvasJS.Chart("pieChartContainer", {
        animationEnabled: true,
        colorSet: "wilt",
        title: {

        },
        data: [{
            type: "pie",
            startAngle: 240,
            yValueFormatString: "##0.00\"%\"",
            indexLabel: "{label} {y}",
            dataPoints: [
                { y: 40, label: "PHW & SFW (1959-1965)" },
                { y: 33, label: "PHILIDEPHIA 76ERS (1964-1968)" },
                { y: 27, label: "LOS ANGELES LAKERS(1968-1973)" },
            ]
        }]
    });
    chart.render();

}

export default wiltPieChart;