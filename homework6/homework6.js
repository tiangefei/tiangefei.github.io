console.log("Hi");

d3.csv("data/esea_master_dmg_demos.part1.csv", function(error, data) {
    data.forEach(function(d) {
        d.export = parseFloat(d.wp);
    });
    console.log("csv:", data);
});
