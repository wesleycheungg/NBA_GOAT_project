function mjPieChart() {
    CanvasJS.addColorSet("mj",
        [//colorSet Array
            "#CE1141",
            "#000000",
            "#002B5C"
        ]);


    var chart = new CanvasJS.Chart("pieChartContainer", {
        animationEnabled: true,
        colorSet: "mj",
        title: {

        },
        data: [{
            type: "pie",
            startAngle: 240,
            yValueFormatString: "##0.00\"%\"",
            indexLabel: "{label} {y}",
            dataPoints: [
                { y: 60, label: "CHICAGO BULLS (1984-1993)" },
                { y: 27, label: "CHICAGO BULLS (1994-1998)" },
                { y: 13, label: "WASHIGNTON WIZARDS (2001-2003)" },
            ]
        }]
    });
    chart.render();

}

export default mjPieChart;