var under_5 = 3;
var hours_5_15 = 7;
var hours_15_25 = 6;
var hours_25_35 = 2;
var over_35 = 4;

var remaining = stipend - housing - bills;

// creates a pie chart showing this data

var data = [
    {
        values: [under_5, hours_5_15, hours_15_25, hours_25_35, over_35],
        labels: ['Under 5 hours','5-15 hours', '15-25 hours', '25-35 hours', 'Over 35 hours'],
        type: 'pie',
        textinfo: "label+percent",
        textposition: "outside",
    }];

var layout = {
    paper_bgcolor: 'rgba(0,0,0,0)',
    plot_bgcolor: 'rgba(0,0,0,0)',
    height: 400,
    width: 500,
    showlegend: false,
    title: 'Distribution of additional hours worked per week',
    font: {
        family: 'Arial',
        size: 16,
        color: '#ffffff'

    },
    
};

var config = {
    responsive: true,
    displayModeBar: false,

};

Plotly.newPlot('dependents', data, layout, config);