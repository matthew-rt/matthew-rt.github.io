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
        height: 800,
        width: 1000,
        grid: { rows: 1, columns: 2 },
        showlegend: false,
        annotations: [
            {
                font: {
                    size: 20
                },
                showarrow: false,
                text: 'Income',
                x: 0.18,
                y: 0.5
            },
            {
                font: {
                    size: 20
                },
                showarrow: false,
                text: 'Expenditure',
                x: 0.84,
                y: 0.5
            }
        ]


    };


    Plotly.newPlot('budgetpie', data, layout);
}