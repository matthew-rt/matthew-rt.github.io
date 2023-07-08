
var trace1 = {
    x: [1.25, 1.25, 4, 4, 6.25, 6.25],
    y: [3.5, 2.5, 3.5, 2.5, 3.5, 2.5],
    text: ['Stipend', '£1458', 'Rent', '£740', 'Bills', '£200'],
    mode: 'text',
};
var stipendamount = 1458;
var stipendradius = 2.5;
var stipendarea = Math.PI * stipendradius * stipendradius;
var areaperpound = stipendarea / stipendamount;

var billsamount = 200;
var billsradius = ((billsamount * areaperpound) / Math.PI) ** 0.5;

var rentamount = 740;
var rentradius = ((rentamount * areaperpound) / Math.PI) ** 0.5;

var stipendcirclecenter = [1.25, 3];

var rentcirclecenter = [4, 3];

var billscirclecenter = [6.25, 3];


var layout = {
    paper_bgcolor: 'rgba(0,0,0,0)',
    plot_bgcolor: 'rgba(0,0,0,0)',
    font: {
        color: 'white',
        size: 24,
    },
    xaxis: {
        range: [0, 9],
        zeroline: false,
        gridwidth: 0,
        showgrid: false,
        visible: false,
    },
    yaxis: {
        range: [0, 6],
        zeroline: false,
        gridwidth: 0,
        showgrid: false,
        visible: false,
    },
    width: 1200,
    height: 800,
    shapes: [

        // Stipend Circle

        {
            type: 'circle',
            xref: 'x',
            yref: 'y',
            fillcolor: 'rgba(92, 93, 124,0.8)',
            x0: stipendcirclecenter[0] - stipendradius,
            y0: stipendcirclecenter[1] - stipendradius,
            x1: stipendcirclecenter[0] + stipendradius,
            y1: stipendcirclecenter[1] + stipendradius,
            line: {
                color: 'rgba(92, 93, 124,0.8)',
            }
        },

        // Rent Circle

        {
            type: 'circle',
            xref: 'x',
            yref: 'y',
            fillcolor: 'rgba(92, 93, 124,0.8)',
            x0: rentcirclecenter[0] - rentradius,
            y0: rentcirclecenter[1] - rentradius,
            x1: rentcirclecenter[0] + rentradius,
            y1: rentcirclecenter[1] + rentradius,
            line: {
                color: 'rgba(92, 93, 124,0.8)',
            }
        },

        //billscircle

        {
            type: 'circle',
            xref: 'x',
            yref: 'y',
            fillcolor: 'rgba(92, 93, 124,0.8)',
            x0: billscirclecenter[0] - billsradius,
            y0: billscirclecenter[1] - billsradius,
            x1: billscirclecenter[0] + billsradius,
            y1: billscirclecenter[1] + billsradius,
            line: {
                color: 'rgba(92, 93, 124,0.8)',
            }
        }
    ]
};


var config = {
    displayModeBar: false,
    responsive: true,
    showTips: false,
    staticPlot: true,
};
var data = [trace1];

Plotly.newPlot('circlechart', data, layout, config);