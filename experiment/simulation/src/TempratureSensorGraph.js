function tempratureSensorGraphCold(sensorData1, i) {
    // Ensure we have a valid sensorData1 object
    let sensorData = JSON.parse(JSON.stringify(sensorData1.coldReading));
    console.log(sensorData); // Check the data before proceeding

    // Ensure tt7 is not empty or undefined
    const categories = sensorData.map(data => data.tt7);
    console.log(categories); // Check categories before using them

    // Extracting other tt values as separate arrays
    const tt1Data = sensorData.map(data => parseFloat(data.tt1));
    const tt2Data = sensorData.map(data => parseFloat(data.tt2));
    const tt3Data = sensorData.map(data => parseFloat(data.tt3));
    const tt4Data = sensorData.map(data => parseFloat(data.tt4));
    const tt5Data = sensorData.map(data => parseFloat(data.tt5));
    const tt6Data = sensorData.map(data => parseFloat(data.tt6));
    const tt7Data = sensorData.map(data => parseFloat(data.tt7));

    // Check the extracted data arrays
    console.log(tt1Data); // tt1 values
    console.log(tt2Data); // tt2 values
    console.log(tt3Data); // tt3 values
    console.log(tt4Data); // tt4 values
    console.log(tt5Data); // tt5 values
    console.log(tt6Data); // tt6 values
    console.log(tt7Data); // tt7 values

    // Dynamically create the div ID for the graph
    const graphDiv = 'sensorGraphCold' + i;
    var TestCycleCount=parseInt(i+1);
    const chart = Highcharts.chart(graphDiv, {
    	credits: { enabled: false},
        chart: {
            type: 'line',
            backgroundColor: '#f4f4f4'
        },
        title: {
            text: 'COLD READINGS TEST CYCLE - '+(i+1)
        },
        xAxis: {
            categories: categories,
            title: {
                text: 'TT7'
            }
        },
        yAxis: {
            title: {
                text: 'Temprature'
            }
        },
        tooltip: {
            shared: true,
            crosshairs: true
        },
        series: [
            { name: 'TT1', data: tt1Data, color: '#FF6384' },
            { name: 'TT2', data: tt2Data, color: '#36A2EB' },
            { name: 'TT3', data: tt3Data, color: '#CC65FE' },
            { name: 'TT4', data: tt4Data, color: '#FFCE56' },
            { name: 'TT5', data: tt5Data, color: '#4BC0C0' },
            { name: 'TT6', data: tt6Data, color: '#000000' },
            { name: 'TT7', data: tt7Data, color: '#FA8072' }
        ]
    });

    // Handle checkbox toggle for series visibility
    $('.toggle-series').on('change', function () {
        const seriesIndex = $(this).data('series');
        const isVisible = $(this).is(':checked');
        chart.series[seriesIndex].setVisible(isVisible, false); // Toggle visibility
        chart.redraw(); // Redraw chart for better performance
    });
}
function tempratureSensorGraphHot(sensorData1, i) {
    // Ensure we have a valid sensorData1 object
    let sensorData = JSON.parse(JSON.stringify(sensorData1.hotReading));
    console.log(sensorData); // Check the data before proceeding

    // Ensure tt7 is not empty or undefined
    const categories = sensorData.map(data => data.tt8);
    console.log(categories); // Check categories before using them

    // Extracting other tt values as separate arrays
    const tt1Data = sensorData.map(data => parseFloat(data.tt1));
    const tt2Data = sensorData.map(data => parseFloat(data.tt2));
    const tt3Data = sensorData.map(data => parseFloat(data.tt3));
    const tt4Data = sensorData.map(data => parseFloat(data.tt4));
    const tt5Data = sensorData.map(data => parseFloat(data.tt5));
    const tt6Data = sensorData.map(data => parseFloat(data.tt6));
    const tt8Data = sensorData.map(data => parseFloat(data.tt8));

    // Check the extracted data arrays
    console.log(tt1Data); // tt1 values
    console.log(tt2Data); // tt2 values
    console.log(tt3Data); // tt3 values
    console.log(tt4Data); // tt4 values
    console.log(tt5Data); // tt5 values
    console.log(tt6Data); // tt6 values
    console.log(tt8Data); // tt7 values

    // Dynamically create the div ID for the graph
    const graphDiv = 'sensorGraphHot' + i;
    var TestCycleCount=parseInt(i+1);
    const chart = Highcharts.chart(graphDiv, {
    	credits: { enabled: false},
        chart: {
            type: 'line',
            backgroundColor: '#f4f4f4'
        },
        title: {
            text: 'HOT READINGS TEST CYCLE - '+(i+1)
        },
        xAxis: {
            categories: categories,
            title: {
                text: 'TT8'
            }
        },
        yAxis: {
            title: {
                text: 'Temprature'
            }
        },
        tooltip: {
            shared: true,
            crosshairs: true
        },
        series: [
            { name: 'TT1', data: tt1Data, color: '#FF6384' },
            { name: 'TT2', data: tt2Data, color: '#36A2EB' },
            { name: 'TT3', data: tt3Data, color: '#CC65FE' },
            { name: 'TT4', data: tt4Data, color: '#FFCE56' },
            { name: 'TT5', data: tt5Data, color: '#4BC0C0' },
            { name: 'TT6', data: tt6Data, color: '#000000' },
            { name: 'TT8', data: tt8Data, color: '#FA8072' }
        ]
    });

    // Handle checkbox toggle for series visibility
    $('.toggle-series').on('change', function () {
        const seriesIndex = $(this).data('series');
        const isVisible = $(this).is(':checked');
        chart.series[seriesIndex].setVisible(isVisible, false); // Toggle visibility
        chart.redraw(); // Redraw chart for better performance
    });
}
