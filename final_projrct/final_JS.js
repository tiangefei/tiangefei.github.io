function showData() {
    console.clear;
    d3.csv("../data/esea_master_dmg_demos.part1.csv", function(error, data) {
        console.log(data);  
    });
}

function countAK() {
    var count = 0;
    d3.csv("../data/esea_master_dmg_demos.part1.csv", function(error, data) {
        data.forEach(function(d) {
            if(d.wp=="AK47") {
                count += 1;
            }
        });
        console.log(count);  
    });
}

function countM4() {
    var count = 0;
    d3.csv("../data/esea_master_dmg_demos.part1.csv", function(error, data) {
        data.forEach(function(d) {
            if(d.wp=="M4A4") {
                count += 1;
            }
        });
        console.log(count);  
    });
}

function showWP() {
    d3.csv("../data/esea_master_dmg_demos.part1.csv", function(error, data) {
        data.forEach(function(d) {
            console.log(d.wp);
        });
    });
}

function headRate() {
    var count = 0;
    d3.csv("../data/esea_master_dmg_demos.part1.csv", function(error, data) {
        data.forEach(function(d) {
            if(d.hitbox == "Head") {
                count += 1;
            }
        });
        console.log(count + " shots are headshot, headshot rate: %" + count/759*100);
    });
}
