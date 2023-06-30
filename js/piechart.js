function stipendadjuster(stipend) {
    var slider = document.getElementById("myRange2");
    var output = document.getElementById("demo2");

    output.innerHTML = "Yearly stipend: £".concat(slider.value);
    slider.oninput = function () {
        output.innerHTML = "Yearly stipend: £".concat(this.value);
    }
    var ukritotalbudget = 7904000000

    var numberofstudents = 22000;

    var data = [{
        values: [stipend * numberofstudents, ukritotalbudget - stipend * numberofstudents],
        labels: ['Stipends', 'Other'],
        type: 'pie'
    }];

    var layout = {
        title: "UKRI Budget Breakdown",
        height: 400,
        width: 500
    };

    Plotly.newPlot('piechart', data, layout);

}