function bristolbudget() {
    var tuitionslider = document.getElementById("TuitionFees");
    var output = document.getElementById("tuition");

    output.innerHTML = "Average Tuition Fees: £".concat(tuitionslider.value);
    tuitionslider.oninput = function () {
        output.innerHTML = "Average Tuition Fees: £".concat(this.value);
    }
    numberofstudents = 2265;
    var tuitionfee = tuitionslider.value;
    console.log(tuitionfee);
    console.log(tuitionfee * numberofstudents / (10 ** 6));
    var incomelist = [tuitionfee * numberofstudents / (10 ** 6), 375.6, 192.8, 277]
    var incomelabels = ['Research tuition fees', 'Other Tuition Fees', 'Research Grants', 'Other']

    var expenditurelist = [440.9, 103.6, 40.8, 217.9]
    var expenditurelabels = ['Staff costs', 'Department Costs', 'Research Grants', 'Other']

    var data = [{
        values: incomelist,
        labels: incomelabels,
        type: 'pie',
        hole: 0.4,
        name: 'Income',
        domain: { column: 0 },
        textinfo: "label+percent",
        textposition: "inside",

    }, {
        values: expenditurelist,
        labels: expenditurelabels,
        type: 'pie',
        hole: 0.4,
        name: 'Expenditure',
        domain: { column: 1 },
        textinfo: "label+percent",
        textposition: "inside",
    }];

    var layout = {
        title: "Bristol University Budget Breakdown",
        // height: 800,
        // width: 1000,
        paper_bgcolor: 'rgba(0,0,0,0)',
        plot_bgcolor: 'rgba(0,0,0,0)',
        grid: { rows: 1, columns: 2 },
        font: {
            family: 'Arial',
            size: 16,
            color: '#ffffff'

        },
        showlegend: false,
        annotations: [
            {
                font: {
                    size: 16,
                    color: '#ffffff'

                },
                showarrow: false,
                //makes the text read: Income and then the sum of all values in the list
                text: '£'.concat(incomelist.reduce((a, b) => a + b, 0).toFixed(1).toString()).concat("m"),
                x: 0.2,
                y: 0.5
            },
            {
                font: {
                    size: 16,
                    color: '#ffffff'

                },
                showarrow: false,
                text: '£'.concat(expenditurelist.reduce((a, b) => a + b, 0).toFixed(1).toString()).concat("m"),
                x: 0.81,
                y: 0.5
            },
            {
                font: { size: 20, color: '#ffffff' },
                showarrow: false,
                text: 'Income',
                x: 0.2,
                y: 1.15
            },
            {
                font: { size: 20, color: '#ffffff' },
                showarrow: false,
                text: 'Expenditure',
                x: 0.815,
                y: 1.15,
            }

        ]


    };


    Plotly.newPlot('budgetpie', data, layout);
}