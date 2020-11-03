// left part
transportation = document.getElementById("transportation");
process = document.getElementById("process");
production = document.getElementById("production");
scalability = document.getElementById("scalability");
food = document.getElementById("food");

transportation.addEventListener('mousemove', e => {
    document.getElementById("right").style.opacity = 0.2;
    document.getElementById("middle_1_").style.opacity = 0.2;

    document.getElementById("transportation").style.opacity = 1;
    document.getElementById("transportation_x5F_text").style.display = "block";
    document.getElementById("transportation_x5F_text").style.opacity = 1;

    document.getElementById("leftline").classList.add("leftmove");
    document.getElementById("middlebottomline").classList.add("middlebottommove");

});

transportation.addEventListener('mouseout', e => {
    document.getElementById("right").style.opacity = 1;
    document.getElementById("middle_1_").style.opacity = 1;

    document.getElementById("transportation").style.opacity = 1;
    document.getElementById("transportation_x5F_text").style.display = "none";
    document.getElementById("transportation_x5F_text").style.opacity = 1;

    document.getElementById("leftline").classList.remove("leftmove");
    document.getElementById("middlebottomline").classList.remove("middlebottommove");


});

process.addEventListener('mousemove', e => {
    document.getElementById("right").style.opacity = 0.2;
    document.getElementById("middle_1_").style.opacity = 0.2;

    document.getElementById("process").style.opacity = 1;
    document.getElementById("process_x5F_text").style.display = "block";
    document.getElementById("pie_2").style.display = "block"
    document.getElementById("process_x5F_text").style.opacity = 1;
    document.getElementById("leftline").classList.add("leftmove");
    document.getElementById("middlebottomline").classList.add("middlebottommove");


});

process.addEventListener('mouseout', e => {
    document.getElementById("right").style.opacity = 1;
    document.getElementById("middle_1_").style.opacity = 1;

    document.getElementById("process").style.opacity = 1;
    document.getElementById("process_x5F_text").style.display = "none";
    document.getElementById("pie_2").style.display = "none"
    document.getElementById("process_x5F_text").style.opacity = 1;

    document.getElementById("leftline").classList.remove("leftmove");
    document.getElementById("middlebottomline").classList.remove("middlebottommove");


});

production.addEventListener('mousemove', e => {
    document.getElementById("right").style.opacity = 0.2;
    document.getElementById("middle_1_").style.opacity = 0.2;

    document.getElementById("production").style.opacity = 1;
    document.getElementById("production_x5F_text").style.display = "block";
    document.getElementById("production_x5F_text").style.opacity = 1;

    document.getElementById("leftline").classList.add("leftmove");
    document.getElementById("middlebottomline").classList.add("middlebottommove");


});

production.addEventListener('mouseout', e => {
    document.getElementById("right").style.opacity = 1;
    document.getElementById("middle_1_").style.opacity = 1;

    document.getElementById("production").style.opacity = 1;
    document.getElementById("production_x5F_text").style.display = "none";
    document.getElementById("production_x5F_text").style.opacity = 1;

    document.getElementById("leftline").classList.remove("leftmove");
    document.getElementById("middlebottomline").classList.remove("middlebottommove");


});

scalability.addEventListener('mousemove', e => {
    document.getElementById("right").style.opacity = 0.2;
    document.getElementById("middle_1_").style.opacity = 0.2;

    document.getElementById("scalability").style.opacity = 1;
    document.getElementById("scalability_x5F_text").style.display = "block";
    document.getElementById("scalability_x5F_text").style.opacity = 1;
});

scalability.addEventListener('mouseout', e => {
    document.getElementById("right").style.opacity = 1;
    document.getElementById("middle_1_").style.opacity = 1;

    document.getElementById("scalability").style.opacity = 1;
    document.getElementById("scalability_x5F_text").style.display = "none";
    document.getElementById("scalability_x5F_text").style.opacity = 1;
});

food.addEventListener('mousemove', e => {
    document.getElementById("right").style.opacity = 0.2;
    document.getElementById("middle_1_").style.opacity = 0.2;

    document.getElementById("food").style.opacity = 1;
    document.getElementById("food_x5F_text").style.display = "block";
    document.getElementById("food_x5F_text").style.opacity = 1;
});

food.addEventListener('mouseout', e => {
    document.getElementById("right").style.opacity = 1;
    document.getElementById("middle_1_").style.opacity = 1;

    document.getElementById("food").style.opacity = 1;
    document.getElementById("food_x5F_text").style.display = "none";
    document.getElementById("food_x5F_text").style.opacity = 1;
});

// middle part
title = document.getElementById("title");

title.addEventListener('mousemove', e => {
    document.getElementById("center_text").style.display = "block";

    document.getElementById("leftline").classList.add("leftmove");
    document.getElementById("rightline").classList.add("rightmove");
    document.getElementById("middletopline").classList.add("middletopmove");
    document.getElementById("middlebottomline").classList.add("middlebottommove");
});

title.addEventListener('mouseout', e => {
    document.getElementById("center_text").style.display = "none";

    document.getElementById("leftline").classList.remove("leftmove");
    document.getElementById("rightline").classList.remove("rightmove");
    document.getElementById("middletopline").classList.remove("middletopmove");
    document.getElementById("middlebottomline").classList.remove("middlebottommove");
});

//right part
demand = document.getElementById("demand");
retailing = document.getElementById("retailing");
consumption = document.getElementById("consumption");
culture = document.getElementById("culture");
identity = document.getElementById("identity");

demand.addEventListener('mousemove', e => {
    document.getElementById("left_1_").style.opacity = 0.2;
    document.getElementById("middle_1_").style.opacity = 0.2;

    document.getElementById("demand").style.opacity = 1;
    document.getElementById("preference_x5F_text").style.display = "block";
    document.getElementById("preference_x5F_text").style.opacity = 1;

    document.getElementById("rightline").classList.add("rightmove");
    document.getElementById("middletopline").classList.add("middletopmove");

});

demand.addEventListener('mouseout', e => {
    document.getElementById("left_1_").style.opacity = 1;
    document.getElementById("middle_1_").style.opacity = 1;

    document.getElementById("demand").style.opacity = 1;
    document.getElementById("preference_x5F_text").style.display = "none";
    document.getElementById("preference_x5F_text").style.opacity = 1;

    document.getElementById("rightline").classList.remove("rightmove");
    document.getElementById("middletopline").classList.remove("middletopmove");

});

retailing.addEventListener('mousemove', e => {
    document.getElementById("left_1_").style.opacity = 0.2;
    document.getElementById("middle_1_").style.opacity = 0.2;

    document.getElementById("retailing").style.opacity = 1;
    document.getElementById("fooddiversity_x5F_text").style.display = "block";
    document.getElementById("fooddiversity_x5F_text").style.opacity = 1;

    document.getElementById("rightline").classList.add("rightmove");
    document.getElementById("middletopline").classList.add("middletopmove");

});

retailing.addEventListener('mouseout', e => {
    document.getElementById("left_1_").style.opacity = 1;
    document.getElementById("middle_1_").style.opacity = 1;

    document.getElementById("retailing").style.opacity = 1;
    document.getElementById("fooddiversity_x5F_text").style.display = "none";
    document.getElementById("fooddiversity_x5F_text").style.opacity = 1;

    document.getElementById("rightline").classList.remove("rightmove");
    document.getElementById("middletopline").classList.remove("middletopmove");

});

consumption.addEventListener('mousemove', e => {
    document.getElementById("left_1_").style.opacity = 0.2;
    document.getElementById("middle_1_").style.opacity = 0.2;

    document.getElementById("consumption").style.opacity = 1;
    document.getElementById("cultureexchange_x5F_text").style.display = "block";
    document.getElementById("pie").style.display = "block"
    document.getElementById("cultureexchange_x5F_text").style.opacity = 1;

    document.getElementById("rightline").classList.add("rightmove");
    document.getElementById("middletopline").classList.add("middletopmove");

});

consumption.addEventListener('mouseout', e => {
    document.getElementById("left_1_").style.opacity = 1;
    document.getElementById("middle_1_").style.opacity = 1;

    document.getElementById("consumption").style.opacity = 1;
    document.getElementById("cultureexchange_x5F_text").style.display = "none";
    document.getElementById("pie").style.display = "none"
    document.getElementById("cultureexchange_x5F_text").style.opacity = 1;

    document.getElementById("rightline").classList.remove("rightmove");
    document.getElementById("middletopline").classList.remove("middletopmove");

});

culture.addEventListener('mousemove', e => {
    document.getElementById("left_1_").style.opacity = 0.2;
    document.getElementById("middle_1_").style.opacity = 0.2;

    document.getElementById("culture").style.opacity = 1;
    document.getElementById("culture_x5F_text").style.display = "block";
    document.getElementById("culture_x5F_text").style.opacity = 1;
});

culture.addEventListener('mouseout', e => {
    document.getElementById("left_1_").style.opacity = 1;
    document.getElementById("middle_1_").style.opacity = 1;

    document.getElementById("culture").style.opacity = 1;
    document.getElementById("culture_x5F_text").style.display = "none";
    document.getElementById("culture_x5F_text").style.opacity = 1;
});

identity.addEventListener('mouseover', e => {
    console.log("mouse in");

    document.getElementById("left_1_").style.opacity = 0.2;
    document.getElementById("middle_1_").style.opacity = 0.2;

    document.getElementById("identity").style.opacity = 1;
    document.getElementById("identity_x5F_text").style.display = "block";
    document.getElementById("identity_x5F_text").style.opacity = 1;
});

identity.addEventListener('mouseout', e => {
    console.log("mouse out");

    document.getElementById("left_1_").style.opacity = 1;
    document.getElementById("middle_1_").style.opacity = 1;

    document.getElementById("identity").style.opacity = 1;
    document.getElementById("identity_x5F_text").style.display = "none";
    document.getElementById("identity_x5F_text").style.opacity = 1;
});










