//* Checking if the user finished game on the game page, if not: redirect on the welcome page

const debug = false;

if (!debug) {
    var finalGameVar = JSON.parse(sessionStorage.getItem("finalGameVar"));
    if (finalGameVar === null) {
        location.href = "index.html";
    }
}

//* Global variables
var resultsDiv = document.getElementById("results");
var homeButton = document.getElementById("home");

//? Temporary finalGameVar (for debug)
if (debug) {
    var finalGameVar = [
        {
            teamName: "Team 1",
            members: ["Member 1", "Member 2", "Member 3"],
            avatars: {"Member 1": "assets/img/avatars/Robot_Avatars_1.png", "Member 2": "assets/img/avatars/Robot_Avatars_2.png", "Member 3": "assets/img/avatars/Robot_Avatars_3.png"},
            route: "1",
            pageIndex: 0,
            pts: {
                money: 500,
                culture: 4,
                fun: 1,
                pictures: 8,
                objects: [],
                total: 18
            }
        },
        {
            teamName: "Team 2",
            members: ["Member 4", "Member 5", "Member 6"],
            avatars: {"Member 4": "assets/img/avatars/Robot_Avatars_4.png", "Member 5": "assets/img/avatars/Robot_Avatars_5.png", "Member 6": "assets/img/avatars/Robot_Avatars_6.png"},
            route: "1",
            pageIndex: 0,
            pts: {
                money: 700,
                culture: -2,
                fun: 8,
                pictures: 9,
                objects: [],
                total: 22
            }
        }
    ];
}

//* Displaying results

finalGameVar.sort((a, b) => {
    return b["pts"]["total"] - a["pts"]["total"];
});

var placeNum = 1;
finalGameVar.forEach((team) => {
    var place;
    if (placeNum === 1) {
        place = "first";
    } else if (placeNum === 2) {
        place = "second";
    } else if (placeNum === 3) {
        place = "third";
    } else {
        place = "other";
    }

    resultsDiv.innerHTML += `<div class="team-line"><p class="place ${place}">${placeNum}°</p><p class="team-name">${team["teamName"]}</p><p class="total">${team["pts"]["total"]} <img class="total-img" src="assets/img/points/photoshop/yellow-coin.png" alt=""></p></div>`;

    placeNum++;
});

//* Creating home button

homeButton.addEventListener("click", () => {
    sessionStorage.clear();
    location.href = "index.html";
});
