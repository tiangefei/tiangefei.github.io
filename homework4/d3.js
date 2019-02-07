var jstitle = document.getElementById("title");

jstitle.className = "big";
jstitle.style.color = "red";
jstitle.style.fontFamily = "Comic Sans MS"

var title = d3.select("#title");

title
    .attr("class", "big")
    .style("color", "red")
    .style("font-family", "Comic Sans MS")

var starterData = [
    {month:1, myUsage: 892, aveUsage: 589},
    {month:2, myUsage: 875, aveUsage: 612},
    {month:3, myUsage: 632, aveUsage: 623},
    {month:4, myUsage: 923, aveUsage: 604}
]

var svg = d3.select("svg");
var myRects = svg.selectAll(".myRect");
var aveRects = svg.selectAll(".aveRect");

console.log(myRects);
console.log(window.innerWidth);

function showMine() {
    var newRects = myRects.data(starterData);

    newRects.enter().append("rect")
        .attr("class", "myRect")
        .attr("width", 20)
        .attr("fill", "black");

    newRects.attr("x", function(d) {
        return 140 + (d.month-1) * 60;
    });

    newRects.attr("height", function(d) {
        return d.myUsage / 3;
    });

    newRects.attr("y", function(d) {
        return 420 - d.myUsage / 3;
    });

    newRects.exit().remove();
}

function showAve() {
    var newRects = aveRects.data(starterData);

    newRects.enter().append("rect")
        .attr("class", "aveRect")
        .attr("width", 20)
        .attr("fill", "red");

    newRects.attr("x", function(d) {
        return 160 + (d.month-1) * 60;
    });

    newRects.attr("height", function(d) {
        return d.aveUsage / 3;
    });

    newRects.attr("y", function(d) {
        return 420 - d.aveUsage / 3;
    });

    newRects.exit().remove();
}



