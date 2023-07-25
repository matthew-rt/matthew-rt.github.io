document.addEventListener('DOMContentLoaded', function () {
    Highcharts.chart('container', {
        chart: {
            type: 'packedbubble',
            height: '100%',
            backgroundColor: null, // remove the chart background
            plotBackgroundColor: null // remove the plot background
        },
        title: {
            text: ''
        },
        tooltip: {
            useHTML: true,
            pointFormat: '<b>{point.name}:</b> {point.value}%'
        },
        plotOptions: {
            packedbubble: {
                minSize: '20%',
                maxSize: '100%',
                zMin: 0,
                zMax: 1000,
                layoutAlgorithm: {
                    gravitationalConstant: 0.05,
                    splitSeries: true,
                    seriesInteraction: false,
                    dragBetweenSeries: true,
                    parentNodeLimit: true
                },
                dataLabels: {
                    enabled: true,
                    format: '{point.name}',
                    filter: {
                        property: 'y',
                        operator: '>',
                        value: 250
                    },
                    style: {
                        color: 'black',
                        textOutline: 'none',
                        fontWeight: 'normal'
                    }
                }
            }
        },
        series: [{
            name: 'Financial support from family',
            data: [{
                name: 'Financial support from your family, friends or partner that doesn’t have to be repaid',
                value: 52.5
            }]
        }, {
            name: 'Term-time work',
            data: [{
                name: 'Earning from working during term-time',
                value: 65.5
            }]
        }, {
            name: 'Savings',
            data: [{
                name: 'Savings',
                value: 58.4
            }]
        }, {
            name: 'Trust fund',
            data: [{
                name: 'Personal trust fund or income from an investment',
                value: 2.9851
            }]
        }, {
            name: 'Disability grants',
            data: [{
                name: 'Disabled Students Allowance or other disability grants',
                value: 2.4254
            }]
        }, {
            name: 'Assistance fund',
            data: [{
                name: 'Support from Financial assistance fund / Hardship fund',
                value: 6.1567
            }]
        }]
    });
});
