//* Checking if the user created teams on the welcome page, if not: redirect

const debug = false;

if (!debug) {
    var gameVar = JSON.parse(sessionStorage.getItem("gameVar"));
    if (gameVar === null) {
        location.href = "index.html";
    }
}

//* Global variables
var turnIndex = 0;
var finalGameVar = [];
var pts = ["money", "culture", "fun", "pictures", "objects"];
var propLetters = ["A", "B", "C", "D"];

var routePlaceholder = document.getElementById("route-placeholder");

var teamNamePlaceholder = document.getElementById("team-name");
var avatarsPlaceholder = document.getElementById("avatars-placeholder");
var moneyPlaceholder = document.getElementById("money-placeholder");
var culturePlaceholder = document.getElementById("culture-placeholder");
var funPlaceholder = document.getElementById("fun-placeholder");
var picturesPlaceholder = document.getElementById("pictures-placeholder");

var imageDiapoPlaceholder = document.getElementById("diapo-to-place");
var textDiapoPlaceholder = document.getElementById("text-placeholder");

var propSection = document.getElementById("prop-section");

var inventory = document.getElementById("inventory");

//* Getting the assets
var collectableToPath = {};
var objectsUsed = []
Object.values(diapo).forEach((elt) => {
    if (elt["object"] != null) {
        objectsUsed.push(elt["object"]);
    }

    var lastPage = elt["pages"][elt["pages"].length - 1];
    propLetters.forEach((letter) => {
        if (lastPage["prop"] != null) {
            if (lastPage["prop"][letter] != null) {
                if (lastPage["prop"][letter]["requireObject"] != null) {
                    objectsUsed.push(lastPage["prop"][letter]["requireObject"]);
                }
            }
        }
    });
});
var collectable = [...new Set(objectsUsed)];
collectable.forEach((elt) => {
    collectableToPath[elt] = `assets/img/objects/${elt}.png`;
});

pts.forEach((elt) => {
    collectable.push(elt);
    collectableToPath[elt] = `assets/img/points/${elt}.png`;
});

//? Temporary gameVar (for debug)
if (debug) {
    var gameVar = [
        {
            teamName: "Team 1",
            members: ["Member 1", "Member 2", "Member 3"],
            avatars: {"Member 1": "assets/img/avatars/Robot_Avatars_1.png", "Member 2": "assets/img/avatars/Robot_Avatars_2.png", "Member 3": "assets/img/avatars/Robot_Avatars_3.png"},
            route: "1",
            pageIndex: 0,
            pts: {
                money: 1000,
                culture: 0,
                fun: 0,
                pictures: 0,
                objects: [],
                total: 0
            }
        },
        {
            teamName: "Team 2",
            members: ["Member 4", "Member 5", "Member 6"],
            avatars: {"Member 4": "assets/img/avatars/Robot_Avatars_4.png", "Member 5": "assets/img/avatars/Robot_Avatars_5.png", "Member 6": "assets/img/avatars/Robot_Avatars_6.png"},
            route: "1",
            pageIndex: 0,
            pts: {
                money: 1000,
                culture: 0,
                fun: 0,
                pictures: 0,
                objects: [],
                total: 0
            }
        }
    ];
}

//* Functions

function renderTeamTable() {
    teamNamePlaceholder.textContent = gameVar[turnIndex]["teamName"];

    avatarsPlaceholder.innerHTML = "";
    Object.values(gameVar[turnIndex]["avatars"]).forEach((avatarPath) => {
        var avatarImg = document.createElement("img");
        avatarImg.setAttribute("class", "avatar")
        avatarImg.setAttribute("src", avatarPath);
        avatarImg.setAttribute("alt", "");
        avatarsPlaceholder.appendChild(avatarImg);
    });

    updateTeamScores();
}

function updateTeamScores() {
    var pointsTable = gameVar[turnIndex]["pts"];

    moneyPlaceholder.textContent = pointsTable["money"];
    culturePlaceholder.textContent = pointsTable["culture"];
    funPlaceholder.textContent = pointsTable["fun"];
    picturesPlaceholder.textContent = pointsTable["pictures"];

    inventory.innerHTML = "";
    pointsTable["objects"].forEach((obj) => {
        var objImage = document.createElement("img");
        objImage.setAttribute("class", "pts")
        objImage.setAttribute("src", `assets/img/objects/${obj}.png`);
        objImage.setAttribute("alt", obj);
        inventory.appendChild(objImage);
    });
}

function renderSlide() {
    // Clearing all the past content
    routePlaceholder.innerHTML = "";
    imageDiapoPlaceholder.src = "";
    textDiapoPlaceholder.innerHTML = "";
    // propSection.style.display = "none";
    propLetters.forEach((letter) => {
        document.getElementById(`prop${letter}-button`).replaceWith(document.getElementById(`prop${letter}-button`).cloneNode(true));

        document.getElementById(`prop${letter}-button`).setAttribute("data-valid", false);

        document.getElementById(`prop${letter}-button`).style.display = "none";
        document.getElementById(`need-money${letter}`).style.display = "none";
        document.getElementById(`need-object${letter}`).style.display = "none";

        document.getElementById(`prop${letter}-text`).innerHTML = "";
        document.getElementById(`money-number${letter}`).innerHTML = "";
        document.getElementById(`money-image${letter}`).src = "";
        document.getElementById(`object-image${letter}`).src = "";
    });

    var route = gameVar[turnIndex]["route"];
    var pageIndex = gameVar[turnIndex]["pageIndex"];

    routePlaceholder.textContent = route;

    imageDiapoPlaceholder.src = diapo[route]["pages"][pageIndex]["pathToImg"];
    
    var textToUpdate = diapo[route]["pages"][pageIndex]["text"];
    collectable.forEach((elt) => {
        if (textToUpdate.includes(`<${elt}>`)) {
            textToUpdate = textToUpdate.replace(`<${elt}>`, `<img class="pts" src="${collectableToPath[elt]}" alt="">`);
        }
    });
    textDiapoPlaceholder.innerHTML = `<p id="text-to-place">${textToUpdate}</p>`;

    if (diapo[route]["pages"][pageIndex]["prop"] != null) {
        // propSection.style.display = "block";
        propLetters.forEach((letter) => {
            if (diapo[route]["pages"][pageIndex]["prop"][letter] != null) {
                document.getElementById(`prop${letter}-button`).style.display = "block";

                document.getElementById(`prop${letter}-text`).textContent = diapo[route]["pages"][pageIndex]["prop"][letter]["propText"];

                if (diapo[route]["pages"][pageIndex]["prop"][letter]["requireMoney"] !== 0) {
                    document.getElementById(`need-money${letter}`).style.display = "block";
                    document.getElementById(`money-number${letter}`).textContent = diapo[route]["pages"][pageIndex]["prop"][letter]["requireMoney"];
                    document.getElementById(`money-image${letter}`).src = collectableToPath["money"];
                }

                if (diapo[route]["pages"][pageIndex]["prop"][letter]["requireObject"] != null) {
                    document.getElementById(`need-object${letter}`).style.display = "block";
                    document.getElementById(`object-image${letter}`).src = collectableToPath[diapo[route]["pages"][pageIndex]["prop"][letter]["requireObject"]];
                }

                var validResponse = true;

                if (diapo[route]["pages"][pageIndex]["prop"][letter]["requireMoney"] !== 0 && diapo[route]["pages"][pageIndex]["prop"][letter]["requireObject"] != null) {
                    validResponse = false;
                    if (gameVar[turnIndex]["pts"]["money"] >= diapo[route]["pages"][pageIndex]["prop"][letter]["requireMoney"] && gameVar[turnIndex]["pts"]["objects"].includes(diapo[route]["pages"][pageIndex]["prop"][letter]["requireObject"])) {
                        validResponse = true;
                    }
                } else {
                    if (diapo[route]["pages"][pageIndex]["prop"][letter]["requireMoney"] !== 0) {
                        validResponse = false;
                        if (gameVar[turnIndex]["pts"]["money"] >= diapo[route]["pages"][pageIndex]["prop"][letter]["requireMoney"]) {
                            validResponse = true;
                        }
                    } else if (diapo[route]["pages"][pageIndex]["prop"][letter]["requireObject"] != null) {
                        validResponse = false;
                        if (gameVar[turnIndex]["pts"]["objects"].includes(diapo[route]["pages"][pageIndex]["prop"][letter]["requireObject"])) {
                            validResponse = true;
                        }
                    }
                }
                if (validResponse) {
                    document.getElementById(`prop${letter}-button`).setAttribute("data-valid", true);
                    document.getElementById(`prop${letter}-button`).addEventListener("click", () => {
                        changeRoute(diapo[route]["pages"][pageIndex]["prop"][letter]["toDiapo"]);
                    });
                }
            }
        });
    }
}

function changeRoute(route) {
    gameVar[turnIndex]["route"] = route;
    gameVar[turnIndex]["pageIndex"] = 0;

    gameVar[turnIndex]["pts"]["money"] += diapo[route]["money"];
    gameVar[turnIndex]["pts"]["culture"] += diapo[route]["culture"];
    gameVar[turnIndex]["pts"]["fun"] += diapo[route]["fun"];
    gameVar[turnIndex]["pts"]["pictures"] += diapo[route]["pictures"];
    if (diapo[route]["object"] != null) {
        gameVar[turnIndex]["pts"]["objects"].push(diapo[route]["object"]);
    }

    updateTeamScores();
    renderSlide();
}

document.addEventListener("keyup", (key) => {
    if (key.code === "Space" || key.code === "Enter") {
        key.preventDefault();

        var currentRoute = gameVar[turnIndex]["route"];
        var currentIndex = gameVar[turnIndex]["pageIndex"];
        if (diapo[currentRoute]["pages"][currentIndex]["prop"] == null) {

            if (diapo[currentRoute]["endOfGame"]) {
                gameVar[turnIndex]["pts"]["total"] = Math.round((gameVar[turnIndex]["pts"]["money"] * 0.01) + gameVar[turnIndex]["pts"]["culture"] + gameVar[turnIndex]["pts"]["fun"] + gameVar[turnIndex]["pts"]["pictures"]);
                finalGameVar.push(gameVar[turnIndex]);
                gameVar = gameVar.slice(0, turnIndex).concat(gameVar.slice(turnIndex+1, gameVar.length));

                if (gameVar.length === 0) {
                    sessionStorage.setItem("finalGameVar", JSON.stringify(finalGameVar));
                    location.href = "results.html";
                }

                if (turnIndex > (gameVar.length - 1)) {
                    turnIndex = 0;
                }

            } else if (diapo[currentRoute]["endOfDay"]) {
                gameVar[turnIndex]["route"] = diapo[currentRoute]["futureRoute"];
                gameVar[turnIndex]["pageIndex"] = 0;

                turnIndex++;
                if (turnIndex > (gameVar.length - 1)) {
                    turnIndex = 0;
                }

            } else {
                gameVar[turnIndex]["pageIndex"]++;
            }

            renderTeamTable();
            renderSlide();
        }
    }

    else if (key.code === "ArrowLeft") {
        key.preventDefault();

        if (gameVar[turnIndex]["pageIndex"] !== 0) {
            gameVar[turnIndex]["pageIndex"]--;

            renderSlide();
        }
    }
});

renderTeamTable();
renderSlide();
