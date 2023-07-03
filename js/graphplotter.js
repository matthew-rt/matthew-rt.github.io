function graphplotter() {
    var slider = document.getElementById("hours");
    var output = document.getElementById("demo");

    var stipendrate = document.getElementById("stipendrate").value;
    var hours = slider.value;
    output.innerHTML = slider.value.concat(" hours");
    slider.oninput = function () {
        output.innerHTML = this.value.concat(" hours");
    }
    var stipendpart = {
        x: ["Fully funded", "Part time", "Unfunded"],
        y: [stipendrate / 12, stipendrate / 24, 0],
        name: "Stipend",
        type: "bar"
    }
    var earnings = {
        x: ["Fully funded", "Part time", "Unfunded"],
        y: [14 * hours * 4, 14 * hours * 4, 14 * hours * 4],
        name: "Earnings",
        type: "bar"
    }
    var data = [stipendpart, earnings];
    var layout = {
        barmode: 'stack',
        title: "How hours worked affect finances",
        yaxis: {
            range: [0, 2500],
            title: {
                text: 'Annual Earnings (£)',
            }
        },
        shapes: [
            {
                type: 'line',
                x0: -0.5,
                y0: 2400,
                x1: 2.5,
                y1: 2400,
                line: {
                    width: 4,
                    dash: 'dot',
                    color: 'rgb(255, 0, 0)',
                },
                label: {
                    text: 'Affordable housing threshold',
                    font: { size: 10, color: 'rgb(255, 0, 0)' },
                }

            }

        ],
        annotations: [
            {
                x: 0,
                y: 2500,
                xref: 'x',
                yref: 'y',
                text: 'Affordable housing threshold',
                font: { size: 15, color: 'rgb(255, 0, 0)' },
                showarrow: false,
            }
        ]
    };
    Plotly.newPlot('chart', data, layout, { displayModeBar: false });
}