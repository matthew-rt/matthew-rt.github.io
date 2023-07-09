var stipend = 1472;
var housing = 642;
var bills = 100;

var remaining = stipend - housing - bills;

// creates a pie chart showing this data

var data = [
    {
        values: [housing, bills, remaining],
        labels: ['Housing', 'Bills', 'Remaining'],
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
    title: 'Monthly Housing Costs',
    font: {
        family: 'Arial',
        size: 16,
        color: '#ffffff'

    }
};

var config = {
    responsive: true,
    displayModeBar: false,
};

Plotly.newPlot('housingcostspie', data, layout, config);