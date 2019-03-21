console.log("Hi");

var team1 = "Hentai Hooligans";
var team2 = "Animal Style";

var t1_p1 = 76561198082200400;
var t1_p2 = 76561197961009200;
var t1_p3 = 76561198037331400;
var t1_p4 = 76561198133908300;
var t1_p5 = 76561198798659600;

var t2_p1 = 76561198048742900;
var t2_p2 = 76561198055054700;
var t2_p3 = 76561198055191000;
var t2_p4 = 76561198169360500;
var t2_p5 = 76561198165334100;

var dmg_dict = {
    0:0,
    76561198082200400: 0,
    76561197961009200: 0,
    76561198037331400: 0,
    76561198133908300: 0,
    76561198798659600: 0,
    76561198048742900: 0,
    76561198055054700: 0,
    76561198055191000: 0,
    76561198169360500: 0,
    76561198165334100: 0
};

var taken_dict = {
    76561198082200400: 0,
    76561197961009200: 0,
    76561198037331400: 0,
    76561198133908300: 0,
    76561198798659600: 0,
    76561198048742900: 0,
    76561198055054700: 0,
    76561198055191000: 0,
    76561198169360500: 0,
    76561198165334100: 0
};

var player_dict = {
    76561198082200400: 0,
    76561197961009200: 1,
    76561198037331400: 2,
    76561198133908300: 3,
    76561198798659600: 4,
    76561198048742900: 5,
    76561198055054700: 6,
    76561198055191000: 7,
    76561198169360500: 8,
    76561198165334100: 9
};

var hitbox_dict = {
    "Head": 0,
    "Chest": 0,
    "Stomach": 0,
    "LeftArm": 0,
    "RightArm": 0,
    "Generic": 0,
    "LeftLeg": 0,
    "RightLeg": 0
};

var all_shots = 0;

d3.queue()
    .defer(d3.csv, "/data/damage.csv")
    .defer(d3.csv, "/data/game.csv")
    .awaitAll(function(error, dataArray) {

    var damage = dataArray[0];
    var game = dataArray[1];

    var team1_score = 0;
    var team2_score = 0;

    var T_image;
        
    var CT_image;

    game.forEach(function(d) {
        if(d.winner_team == team1 && d.winner_side == "Terrorist") {
            T_image = document.createElementNS('http://www.w3.org/2000/svg', 'image');
            T_image.setAttribute('height', '25');
            T_image.setAttribute('width', '25');
            T_image.setAttributeNS('http://www.w3.org/1999/xlink','href','T.png');
            T_image.setAttribute('y', '12.5');
            T_image.setAttribute('x', 100 + (26 * (team1_score + team2_score)));
            team1_score += 1;
            document.getElementById('winner-line').append(T_image);
        }

        else if(d.winner_team == team1 && d.winner_side == "CounterTerrorist") {
            CT_image = document.createElementNS('http://www.w3.org/2000/svg', 'image');
            CT_image.setAttribute('y', '12.5');
            CT_image.setAttribute('x', 100 + (26 * (team1_score + team2_score)));
            CT_image.setAttribute('height', '25');
            CT_image.setAttribute('width', '25');
            CT_image.setAttributeNS('http://www.w3.org/1999/xlink','href','CT.png');
            team1_score += 1;
            document.getElementById('winner-line').append(CT_image);
        }

        else if(d.winner_team == team2 && d.winner_side == "Terrorist") {
            T_image = document.createElementNS('http://www.w3.org/2000/svg', 'image');
            T_image.setAttribute('height', '25');
            T_image.setAttribute('width', '25');
            T_image.setAttributeNS('http://www.w3.org/1999/xlink','href','T.png');
            T_image.setAttribute('y', '62.5');
            T_image.setAttribute('x', 100 + (26 * (team1_score + team2_score)));
            team2_score += 1;
            document.getElementById('winner-line').append(T_image);
        }

        else if(d.winner_team == team2 && d.winner_side == "CounterTerrorist") {
            CT_image = document.createElementNS('http://www.w3.org/2000/svg', 'image');
            CT_image.setAttribute('y', '62.5');
            CT_image.setAttribute('x', 100 + (26 * (team1_score + team2_score)));
            CT_image.setAttribute('height', '25');
            CT_image.setAttribute('width', '25');
            CT_image.setAttributeNS('http://www.w3.org/1999/xlink','href','CT.png');
            team2_score += 1;
            document.getElementById('winner-line').append(CT_image);
        }
    });

    team1_text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        team1_text.textContent = team1_score;
        team1_text.setAttribute('x', '755');
        team1_text.setAttribute('y', '35');
        team1_text.setAttribute('id', 'svgtext');
        team1_text.setAttribute('fill', 'white');

    document.getElementById('winner-line').append(team1_text);

    team2_text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        team2_text.textContent = team2_score;
        team2_text.setAttribute('x', '755');
        team2_text.setAttribute('y', '80');
        team2_text.setAttribute('id', 'svgtext');
        team2_text.setAttribute('fill', 'white');

    document.getElementById('winner-line').append(team2_text);

    damage.forEach(function (d) {
        dmg_dict[d.att_id] = dmg_dict[d.att_id] + parseInt(d.hp_dmg);
        taken_dict[d.vic_id] = taken_dict[d.vic_id] + parseInt(d.hp_dmg);
    });


    var playerbar;
    var playertext;
    var dmgtext;

    for(var key in dmg_dict) {
        if(key != 0) {
            playerbar = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                playerbar.setAttribute('x', 325);
                playerbar.setAttribute('y', 20 + parseInt(player_dict[key]) * 32.5);
                playerbar.setAttribute('height', '20');
                playerbar.setAttribute('width', parseInt(dmg_dict[key]) / 8);
                playerbar.setAttribute('fill', 'white');
            document.getElementById("dmg").appendChild(playerbar);

            playertext = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                if(player_dict[key] <= 4) {
                    playertext.textContent = "Team1 : Player " + (player_dict[key] + 1);
                }
                if(player_dict[key] > 4 ) {
                    playertext.textContent = "Team2 : Player " + (player_dict[key] - 4);
                }
                playertext.setAttribute('x', '180');
                playertext.setAttribute('y', 35 + player_dict[key] * 32.5);
                playertext.setAttribute('id', 'playertext');
                playertext.setAttribute('fill', 'white');
            document.getElementById("charts-line").appendChild(playertext);

            dmgtext = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                dmgtext.textContent = dmg_dict[key];
                dmgtext.setAttribute('x', '750');
                dmgtext.setAttribute('y', 35 + player_dict[key] * 32.5);
                dmgtext.setAttribute('id', 'dmgtext');
                dmgtext.setAttribute('fill', 'white');
            document.getElementById("dmg").appendChild(dmgtext);
        }
    }

    var takenbar;
    var takentext;

    for(var key in taken_dict) {
        takenbar = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            takenbar.setAttribute('x', 325);
            takenbar.setAttribute('y', 20 + parseInt(player_dict[key]) * 32.5);
            takenbar.setAttribute('height', '20');
            takenbar.setAttribute('id', 'takenbar')
            takenbar.setAttribute('width', parseInt(taken_dict[key]) / 8);
            takenbar.setAttribute('fill', 'gold');
        document.getElementById("taken").appendChild(takenbar);

        takentext = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            takentext.textContent = taken_dict[key];
            takentext.setAttribute('x', '750');
            takentext.setAttribute('y', 35 + player_dict[key] * 32.5);
            takentext.setAttribute('id', 'takentext');
            takentext.setAttribute('fill', 'gold');
            document.getElementById("taken").appendChild(takentext);
    }

    var ratio = 6.66;
    var greendot;
    var reddot;

    damage.forEach(function (d) {
        greendot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            greendot.setAttribute('cx', (parseFloat(d.att_pos_x) + 4820) / ratio);
            greendot.setAttribute('cy', 808 - (parseFloat(d.att_pos_y) + 3591) / ratio);
            greendot.setAttribute('fill', 'green');
            greendot.setAttribute('r', '2');
        document.getElementById("position-line").appendChild(greendot);

        reddot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            reddot.setAttribute('cx', (parseFloat(d.vic_pos_x) + 4820) / ratio);
            reddot.setAttribute('cy', 808 - (parseFloat(d.vic_pos_y) + 3591) / ratio);
            reddot.setAttribute('fill', 'red');
            reddot.setAttribute('r', '2');
        document.getElementById("position-line").appendChild(reddot);
    });

    damage.forEach(function (d) {
        hitbox_dict[d.hitbox] += 1;
        all_shots += 1;
    });


    for(var key in hitbox_dict) {
        document.getElementById(key).textContent = (hitbox_dict[key] / all_shots  * 100).toFixed(2) + "%";
    }

    var weapons_dict = {};
    var weapons_count = 0;

    damage.forEach(function (d) {
        if(weapons_dict[d.wp] != undefined) {
            weapons_dict[d.wp] += parseInt(d.hp_dmg);
        }
        else{
            weapons_dict[d.wp] = parseInt(d.hp_dmg);
            weapons_count += 1;
        }
    });

    var weapon_text;
    var damage_bar;
    var count = 0;

    for (var key in weapons_dict) {
        weapon_text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            weapon_text.textContent = key;
            weapon_text.setAttribute('x', '180');
            weapon_text.setAttribute('y', 25 + 18 * count);
            weapon_text.setAttribute('id', 'weapon_text');
            weapon_text.setAttribute('fill', 'tomato');
            document.getElementById("graphs-line").appendChild(weapon_text);
        damage_bar = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            damage_bar.setAttribute('x', '260');
            damage_bar.setAttribute('y', 13 + 18 * count);
            damage_bar.setAttribute('height', '15');
            damage_bar.setAttribute('width', weapons_dict[key] / 12);
            damage_bar.setAttribute('fill', 'tomato');
        document.getElementById("graphs-line").appendChild(damage_bar);

        count += 1;
    }
})

document.getElementById("taken").style.display = "none";

function showDmg() {
    document.getElementById("taken").style.display = "none";
    document.getElementById("dmg").style.display = "block";
}

function showTaken() {
    document.getElementById("taken").style.display = "block";
    document.getElementById("dmg").style.display = "none";
}
var hitboxs = ["Chest", "Head", "Stomach", "LeftArm", "RightArm", "LeftLeg", "RightLeg", "Generic"];

for(i = 0; i < hitboxs.length; i++) {
    document.getElementById(hitboxs[i]).style.display = "none";
}

function showHitbox(hitbox) {
    for(i = 0; i < hitboxs.length; i++) {
        document.getElementById(hitboxs[i]).style.display = "none";
    }
    document.getElementById(hitbox).style.display = "block";
}

function showHead() {
    showHitbox("Head");
}
function showChest() {
    showHitbox("Chest");
}
function showStomach() {
    showHitbox("Stomach");
}
function showLeftArm() {
    showHitbox("LeftArm");
}
function showRightArm() {
    showHitbox("RightArm");
}
function showLeftLeg() {
    showHitbox("LeftLeg");
}
function showRightLeg() {
    showHitbox("RightLeg");
}
function showGeneric() {
    showHitbox("Generic");
}



