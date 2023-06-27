var yeararray = []

startyear = 2006
endyear = 2022

while (startyear <= endyear) {
    yeararray.push(startyear)
    startyear += 1
}

var stipend = {
    type: 'scatter',
    x: yeararray,
    y: [12300, 12600, 12940, 13290, 13590, 13590, 13590, 13726, 13863, 14071, 14296, 14553, 14777, 15009, 15285, 15609, 17668],
    name: "Stipend",
    mode: "lines",
    line: {
        color: 'rgb(0, 128, 128)',
        width: 3
    }
};

var minimumwage = [5.35, 5.52, 5.73, 5.8, 5.93, 6.08, 6.19, 6.31, 6.5, 6.7, 6.95, 7.05, 7.38, 7.70, 8.20, 8.36, 9.18];

var allowance = [5035, 5225, 6035, 6475, 6475, 7475, 8105, 9440, 10000, 10600, 11000, 11500, 11850, 12500, 12500, 12570, 12570];

var taxrate = [.22, .22, .20, .20, .20, .20, .20, .20, .20, .20, .20, .20, .20, .20, .20, .20, .20];

var nationalinsurancemin = [97, 100, 105, 110, 110, 139, 146, 149, 153, 155, 155, 157, 162, 166, 183, 184, 190];

var nationalinsurancerate = [0.11, 0.11, 0.11, 0.11, 0.11, 0.12, 0.12, 0.12, 0.12, 0.12, 0.12, 0.12, 0.12, 0.12, 0.12, 0.12];

var weeklyearnings = []
for (let i = 0; i <= minimumwage.length; i++) {
    weeklyearnings.push(minimumwage[i] * 40)
}

var nationalinsurancedeductions = []

for (let i = 0; i <= nationalinsurancemin.length; i++) {
    nationalinsurancedeductions.push(((weeklyearnings[i] - nationalinsurancemin[i]) * nationalinsurancerate[i]) * 52);
}

var taxdeductions = []

for (let i = 0; i <= minimumwage.length; i++) {
    taxdeductions.push(((minimumwage[i] * 50 * 52 - allowance[i]) * taxrate[i]));
}
var combineddeudctions = []
for (let i = 0; i <= minimumwage.length; i++) {
    combineddeudctions.push(nationalinsurancedeductions[i] + taxdeductions[i])
}

var minwageearnings = []
for (let i = 0; i <= minimumwage.length; i++) {
    minwageearnings.push(weeklyearnings[i] * 52 - combineddeudctions[i])
}

var minwage = {
    type: 'scatter',
    x: yeararray,
    y: minwageearnings,
    name: "Minimum wage (after tax)",
    mode: "lines",
    line: {
        color: 'rgb(187, 133, 171)',
        width: 3
    }
};

var layout = {
    title: {
        text: 'Stipend vs Minimum Wage',
        font: {
            family: 'Courier New, monospace',
            size: 24
        },
        xref: 'paper',
        x: 0.05,
    },
    xaxis: {
        title: {
            text: 'Year',
        },
    },
    yaxis: {
        title: {
            text: 'Annual Earnings (£)',
        }
    }
};

var data = [stipend, minwage];

Plotly.newPlot('mincomp', data, layout);