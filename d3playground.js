console.log("hahaha");

var jstitle = document.getElementById("title");

jstitle.className = "big";
jstitle.style.color = "red";
jstitle.style.fontFamily = "Comic Sans MS"

var title = d3.select("#title");

title
    .attr("class", "big")
    .style("color", "red")
    .style("font-family", "Comic Sans MS")

function changeColor(color) {
    d3.selectAll(".dot").attr("fill", color)
}

var svg = d3.select("svg");
var circles = svg.selectAll(".dot")

function dance() {
    circles.attr("cx", function() {
        return Math.random() * 200;
    });
}

var starterData = [
    {name:"Eric", height: 100},
    {name:"Cric", height: 120},
    {name:"Bric", height: 150},
    {name:"Aric", height: 80}
]

function redrawCircle() {
    var newCircles = svg.selectAll("dot")
        .data(starterData);

    newCircles.enter().append("circle")
        .attr("class", "dot")
        .attr("cx", function() {
            return Math.random * 200;
        })
        .attr("cy", 50)
        .attr("r", 20);

    newCircles.attr("r", function(d) {
        return d.height / 2;
    });

    newCircles.exit().remove();
}

