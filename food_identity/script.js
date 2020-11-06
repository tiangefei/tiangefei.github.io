// left part
transportation = document.getElementById("transportation_text");
process = document.getElementById("process_text");
production = document.getElementById("production_text");
scalability = document.getElementById("scalability_text");
food = document.getElementById("food_text");

transportation.addEventListener('mousemove', e => {
    document.getElementById("right").style.opacity = 0.5;
    document.getElementById("middle").style.opacity = 0.5;

    document.getElementById("transportation").style.opacity = 1;
    document.getElementById("transportation").style.display = "block";
    document.getElementById("transportation").style.opacity = 1;

    document.getElementById("leftline").classList.add("leftmove");
    document.getElementById("middlebottomline").classList.add("middlebottommove");

});

transportation.addEventListener('mouseout', e => {
    document.getElementById("right").style.opacity = 1;
    document.getElementById("middle").style.opacity = 1;

    document.getElementById("transportation").style.opacity = 1;
    document.getElementById("transportation").style.display = "none";
    document.getElementById("transportation").style.opacity = 1;

    document.getElementById("leftline").classList.remove("leftmove");
    document.getElementById("middlebottomline").classList.remove("middlebottommove");


});

process.addEventListener('mousemove', e => {
    document.getElementById("right").style.opacity = 0.2;
    document.getElementById("middle").style.opacity = 0.2;

    document.getElementById("process").style.opacity = 1;
    document.getElementById("process").style.display = "block";
    document.getElementById("process_data").style.display = "block";
    document.getElementById("process").style.opacity = 1;
    document.getElementById("leftline").classList.add("leftmove");
    document.getElementById("middlebottomline").classList.add("middlebottommove");


});

process.addEventListener('mouseout', e => {
    document.getElementById("right").style.opacity = 1;
    document.getElementById("middle").style.opacity = 1;

    document.getElementById("process").style.opacity = 1;
    document.getElementById("process").style.display = "none";
    document.getElementById("process_data").style.display = "none";
    document.getElementById("process").style.opacity = 1;

    document.getElementById("leftline").classList.remove("leftmove");
    document.getElementById("middlebottomline").classList.remove("middlebottommove");


});

production.addEventListener('mousemove', e => {
    document.getElementById("right").style.opacity = 0.2;
    document.getElementById("middle").style.opacity = 0.2;

    document.getElementById("production").style.opacity = 1;
    document.getElementById("production").style.display = "block";
    document.getElementById("production").style.opacity = 1;

    document.getElementById("leftline").classList.add("leftmove");
    document.getElementById("middlebottomline").classList.add("middlebottommove");


});

production.addEventListener('mouseout', e => {
    document.getElementById("right").style.opacity = 1;
    document.getElementById("middle").style.opacity = 1;

    document.getElementById("production").style.opacity = 1;
    document.getElementById("production").style.display = "none";
    document.getElementById("production").style.opacity = 1;

    document.getElementById("leftline").classList.remove("leftmove");
    document.getElementById("middlebottomline").classList.remove("middlebottommove");


});

scalability.addEventListener('mousemove', e => {
    document.getElementById("right").style.opacity = 0.2;
    document.getElementById("middle").style.opacity = 0.2;

    document.getElementById("scalability").style.opacity = 1;
    document.getElementById("scalability").style.display = "block";
    document.getElementById("scalability").style.opacity = 1;
});

scalability.addEventListener('mouseout', e => {
    document.getElementById("right").style.opacity = 1;
    document.getElementById("middle").style.opacity = 1;

    document.getElementById("scalability").style.opacity = 1;
    document.getElementById("scalability").style.display = "none";
    document.getElementById("scalability").style.opacity = 1;
});

food.addEventListener('mousemove', e => {
    document.getElementById("right").style.opacity = 0.2;
    document.getElementById("middle").style.opacity = 0.2;

    document.getElementById("food").style.opacity = 1;
    document.getElementById("food").style.display = "block";
    document.getElementById("food").style.opacity = 1;
});

food.addEventListener('mouseout', e => {
    document.getElementById("right").style.opacity = 1;
    document.getElementById("middle").style.opacity = 1;

    document.getElementById("food").style.opacity = 1;
    document.getElementById("food").style.display = "none";
    document.getElementById("food").style.opacity = 1;
});

// middle part
title = document.getElementById("title");
choose = document.getElementById("choose_text");
define = document.getElementById("define_text");

title.addEventListener('mousemove', e => {
    document.getElementById("center").style.display = "block";

    document.getElementById("leftline").classList.add("leftmove");
    document.getElementById("rightline").classList.add("rightmove");
    document.getElementById("middletopline").classList.add("middletopmove");
    document.getElementById("middlebottomline").classList.add("middlebottommove");
});

title.addEventListener('mouseout', e => {
    document.getElementById("center").style.display = "none";

    document.getElementById("leftline").classList.remove("leftmove");
    document.getElementById("rightline").classList.remove("rightmove");
    document.getElementById("middletopline").classList.remove("middletopmove");
    document.getElementById("middlebottomline").classList.remove("middlebottommove");
});

choose.addEventListener('mousemove', e => {
    document.getElementById("choose").style.display = "block";

    document.getElementById("leftline").classList.add("leftmove");
    document.getElementById("rightline").classList.add("rightmove");
    document.getElementById("middletopline").classList.add("middletopmove");
    document.getElementById("middlebottomline").classList.add("middlebottommove");
});

choose.addEventListener('mouseout', e => {
    document.getElementById("choose").style.display = "none";

    document.getElementById("leftline").classList.remove("leftmove");
    document.getElementById("rightline").classList.remove("rightmove");
    document.getElementById("middletopline").classList.remove("middletopmove");
    document.getElementById("middlebottomline").classList.remove("middlebottommove");
});

define.addEventListener('mousemove', e => {
    document.getElementById("define").style.display = "block";

    document.getElementById("leftline").classList.add("leftmove");
    document.getElementById("rightline").classList.add("rightmove");
    document.getElementById("middletopline").classList.add("middletopmove");
    document.getElementById("middlebottomline").classList.add("middlebottommove");
});

define.addEventListener('mouseout', e => {
    document.getElementById("define").style.display = "none";

    document.getElementById("leftline").classList.remove("leftmove");
    document.getElementById("rightline").classList.remove("rightmove");
    document.getElementById("middletopline").classList.remove("middletopmove");
    document.getElementById("middlebottomline").classList.remove("middlebottommove");
});
//right part
demand = document.getElementById("demand_text");
retailing = document.getElementById("retailing_text");
consumption = document.getElementById("consumption_text");
culture = document.getElementById("culture_text");
identity = document.getElementById("identity_text");

demand.addEventListener('mousemove', e => {
    document.getElementById("left").style.opacity = 0.2;
    document.getElementById("middle").style.opacity = 0.2;

    document.getElementById("demand").style.opacity = 1;
    document.getElementById("demand").style.display = "block";
    document.getElementById("demand").style.opacity = 1;

    document.getElementById("rightline").classList.add("rightmove");
    document.getElementById("middletopline").classList.add("middletopmove");

});

demand.addEventListener('mouseout', e => {
    document.getElementById("left").style.opacity = 1;
    document.getElementById("middle").style.opacity = 1;

    document.getElementById("demand").style.opacity = 1;
    document.getElementById("demand").style.display = "none";
    document.getElementById("demand").style.opacity = 1;

    document.getElementById("rightline").classList.remove("rightmove");
    document.getElementById("middletopline").classList.remove("middletopmove");

});

retailing.addEventListener('mousemove', e => {
    document.getElementById("left").style.opacity = 0.2;
    document.getElementById("middle").style.opacity = 0.2;

    document.getElementById("retailing").style.opacity = 1;
    document.getElementById("retailing").style.display = "block";
    document.getElementById("retailing").style.opacity = 1;

    document.getElementById("rightline").classList.add("rightmove");
    document.getElementById("middletopline").classList.add("middletopmove");

});

retailing.addEventListener('mouseout', e => {
    document.getElementById("left").style.opacity = 1;
    document.getElementById("middle").style.opacity = 1;

    document.getElementById("retailing").style.opacity = 1;
    document.getElementById("retailing").style.display = "none";
    document.getElementById("retailing").style.opacity = 1;

    document.getElementById("rightline").classList.remove("rightmove");
    document.getElementById("middletopline").classList.remove("middletopmove");

});

consumption.addEventListener('mousemove', e => {
    document.getElementById("left").style.opacity = 0.2;
    document.getElementById("middle").style.opacity = 0.2;

    document.getElementById("consumption").style.opacity = 1;
    document.getElementById("consumption").style.display = "block";
    document.getElementById("consumption_data").style.display = "block";
    document.getElementById("consumption").style.opacity = 1;

    document.getElementById("rightline").classList.add("rightmove");
    document.getElementById("middletopline").classList.add("middletopmove");

});

consumption.addEventListener('mouseout', e => {
    document.getElementById("left").style.opacity = 1;
    document.getElementById("middle").style.opacity = 1;

    document.getElementById("consumption").style.opacity = 1;
    document.getElementById("consumption").style.display = "none";
    document.getElementById("consumption_data").style.display = "none";
    document.getElementById("consumption").style.opacity = 1;

    document.getElementById("rightline").classList.remove("rightmove");
    document.getElementById("middletopline").classList.remove("middletopmove");

});

culture.addEventListener('mousemove', e => {
    document.getElementById("left").style.opacity = 0.2;
    document.getElementById("middle").style.opacity = 0.2;

    document.getElementById("culture").style.opacity = 1;
    document.getElementById("culture").style.display = "block";
    document.getElementById("culture").style.opacity = 1;
});

culture.addEventListener('mouseout', e => {
    document.getElementById("left").style.opacity = 1;
    document.getElementById("middle").style.opacity = 1;

    document.getElementById("culture").style.opacity = 1;
    document.getElementById("culture").style.display = "none";
    document.getElementById("culture").style.opacity = 1;
});

identity.addEventListener('mouseover', e => {
    console.log("mouse in");

    document.getElementById("left").style.opacity = 0.2;
    document.getElementById("middle").style.opacity = 0.2;

    document.getElementById("identity").style.opacity = 1;
    document.getElementById("identity").style.display = "block";
    document.getElementById("identity").style.opacity = 1;
});

identity.addEventListener('mouseout', e => {
    console.log("mouse out");

    document.getElementById("left").style.opacity = 1;
    document.getElementById("middle").style.opacity = 1;

    document.getElementById("identity").style.opacity = 1;
    document.getElementById("identity").style.display = "none";
    document.getElementById("identity").style.opacity = 1;
});










