const RANDOM_TEAMS_NAMES = ['The Ichabods', 'The Alliance', 'The Brewers', 'The Judges', 'The Badasses', 'The Phenomenon', 'The Vicious', 'The Warriors', 'The Blues', 'The Brigade', 'The Violets', 'The Felons', 'The Dukes', 'The Boomers', 'The Sugar Babies', 'The Amigos', "The Bros", 'The No Sympathy', 'The Soul Spartans', 'The Not Bad At All', 'The Brute Force', 'The Ironmen', 'The Rule Breakers', 'The Chasers', 'The Blue Jackets', 'The Scorpions', 'The Trouble Makers', 'The Cupcakes', 'The Bullets', 'The Alpha Team', 'The Eliminators', 'The Destroyers', 'The The Electric Force', 'The Titans', 'The Blue Collars', 'The Alphas', 'The Rampage', 'The Thundering Herd', 'The Belles', 'The Blossoms', 'The Titans', 'The Boozy Bunch', 'The Lovable and Lazy', 'The Plenty of Twenties', 'The Masters', 'The Apocalypse', 'The Big Horns', 'The No Slice Left Behind', 'The Bisons', 'The Vikings', 'The Eruption', 'The Dangers', 'The Buffaloes', 'The Millennials'];
const RANDOM_NAMES = ['James', 'John', 'Robert', 'Michael', 'William', 'David', 'Richard', 'Charles', 'Joseph', 'Thomas', 'Christopher', 'Daniel', 'Paul', 'Mark', 'Donald', 'George', 'Kenneth', 'Steven', 'Edward', 'Brian', 'Ronald', 'Anthony', 'Kevin', 'Jason', 'Matthew', 'Gary', 'Timothy', 'Jose', 'Larry', 'Jeffrey', 'Frank', 'Scott', 'Eric', 'Stephen', 'Andrew', 'Raymond', 'Gregory', 'Joshua', 'Jerry', 'Dennis', 'Walter', 'Patrick', 'Peter', 'Harold', 'Douglas', 'Henry', 'Carl', 'Arthur', 'Ryan', 'Roger', 'Joe', 'Juan', 'Jack', 'Albert', 'Jonathan', 'Justin', 'Terry', 'Gerald', 'Keith', 'Samuel', 'Willie', 'Ralph', 'Lawrence', 'Nicholas', 'Roy', 'Benjamin', 'Bruce', 'Brandon', 'Adam', 'Harry', 'Fred', 'Wayne', 'Billy', 'Steve', 'Louis', 'Jeremy', 'Aaron', 'Randy', 'Howard', 'Eugene', 'Carlos', 'Russell', 'Bobby', 'Victor', 'Martin', 'Ernest', 'Phillip', 'Todd', 'Jesse', 'Craig', 'Alan', 'Shawn', 'Clarence', 'Sean', 'Philip', 'Chris', 'Johnny', 'Earl', 'Jimmy', 'Antonio', 'Danny', 'Bryan', 'Tony', 'Luis', 'Mike', 'Stanley', 'Leonard', 'Nathan', 'Dale', 'Manuel', 'Mary', 'Patricia', 'Linda', 'Barbara', 'Elizabeth', 'Jennifer', 'Maria', 'Susan', 'Margaret', 'Dorothy', 'Lisa', 'Nancy', 'Karen', 'Betty', 'Helen', 'Sandra', 'Donna', 'Carol', 'Ruth', 'Sharon', 'Michelle', 'Laura', 'Sarah', 'Kimberly', 'Deborah', 'Jessica', 'Shirley', 'Cynthia', 'Angela', 'Melissa', 'Brenda', 'Amy', 'Anna', 'Rebecca', 'Virginia', 'Kathleen', 'Pamela', 'Martha', 'Debra', 'Amanda', 'Stephanie', 'Carolyn', 'Christine', 'Marie', 'Janet', 'Catherine', 'Frances', 'Ann', 'Joyce', 'Diane', 'Alice', 'Julie', 'Heather', 'Teresa', 'Doris', 'Gloria', 'Evelyn', 'Jean', 'Cheryl', 'Mildred', 'Katherine', 'Joan', 'Ashley', 'Judith', 'Rose', 'Janice', 'Kelly', 'Nicole', 'Judy', 'Christina', 'Kathy', 'Theresa', 'Beverly', 'Denise', 'Tammy', 'Irene', 'Jane', 'Lori', 'Rachel', 'Marilyn', 'Andrea', 'Kathryn', 'Louise', 'Sara', 'Anne', 'Jacqueline', 'Wanda', 'Bonnie', 'Julia', 'Ruby', 'Lois', 'Tina', 'Phyllis', 'Norma', 'Paula', 'Diana', 'Annie', 'Lillian', 'Emily', 'Robin', 'Peggy', 'Crystal', 'Gladys', 'Rita', 'Dawn', 'Connie', 'Florence', 'Tracy', 'Edna', 'Tiffany'];
const RANDOM_EMOJIS = ['⏱', '⏲', 'Ⓜ', '✨', '❌', '❎', '❓', '❔', '❕', '❗', '➕', '➖', '➗', '➰', '➿', '🀄', '🃏', '🆎', '🆑', '🆒', '🆓', '🆔', '🆕', '🆖', '🆗', '🆘', '🆙', '🆚', '🈁', '🈚', '🈯', '🈲', '🈳', '🈴', '🈵', '🈶', '🈸', '🈹', '🈺', '🉐', '🉑', '🌀', '🌁', '🌂', '🌃', '🌄', '🌅', '🌆', '🌇', '🌈', '🌉', '🌊', '🌋', '🌌', '🌍', '🌎', '🌏', '🌐', '🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘', '🌙', '🌚', '🌛', '🌜', '🌝', '🌞', '🌟', '🌠', '🌡', '🌤', '🌥', '🌦', '🌧', '🌨', '🌩', '🌪', '🌫', '🌬', '🌭', '🌮', '🌯', '🌰', '🌱', '🌲', '🌳', '🌴', '🌵', '🌶', '🌷', '🌸', '🌹', '🌺', '🌻', '🌼', '🌽', '🌾', '🌿', '🍀', '🍁', '🍂', '🍃', '🍄', '🍅', '🍆', '🍇', '🍈', '🍉', '🍊', '🍋', '🍌', '🍍', '🍎', '🍏', '🍐', '🍑', '🍒', '🍓', '🍔', '🍕', '🍖', '🍗', '🍘', '🍙', '🍚', '🍛', '🍜', '🍝', '🍞', '🍟', '🍠', '🍡', '🍢', '🍣', '🍤', '🍥', '🍦', '🍧', '🍨', '🍩', '🍪', '🍫', '🍬', '🍭', '🍮', '🍯', '🍰', '🍱', '🍲', '🍳', '🍴', '🍵', '🍶', '🍷', '🍸', '🍹', '🍺', '🍻', '🍼', '🍽', '🍾', '🍿', '🎀', '🎁', '🎂', '🎃', '🎄', '🎅', '🎆', '🎇', '🎈', '🎉', '🎊', '🎋', '🎌', '🎍', '🎎', '🎏', '🎐', '🎑', '🎒', '🎓', '🎖', '🎗', '🎙', '🎚', '🎛', '🎞', '🎟', '🎠', '🎡', '🎢', '🎣', '🎤', '🎥', '🎦', '🎧', '🎨', '🎩', '🎪', '🎫', '🎬', '🎭', '🎮', '🎯', '🎰', '🎱', '🎲', '🎳', '🎴', '🎵', '🎶', '🎷', '🎸', '🎹', '🎺', '🎻', '🎼', '🎽', '🎾', '🎿', '🏀', '🏁', '🏂', '🏃', '🏄', '🏅', '🏆', '🏇', '🏈', '🏉', '🏊', '🏋', '🏌', '🏍', '🏎', '🏏', '🏐', '🏑', '🏒', '🏓', '🏔', '🏕', '🏖', '🏗', '🏘', '🏙', '🏚', '🏛', '🏜', '🏝', '🏞', '🏟', '🏠', '🏡', '🏢', '🏣', '🏤', '🏥', '🏦', '🏧', '🏨', '🏩', '🏪', '🏫', '🏬', '🏭', '🏮', '🏯', '🏰', '🏳', '🏴', '🏵', '🏷', '🏸', '🏹', '🏺', '🐀', '🐁', '🐂', '🐃', '🐄', '🐅', '🐆', '🐇', '🐈', '🐉', '🐊', '🐋', '🐌', '🐍', '🐎',
'🐏', '🐐', '🐑', '🐒', '🐓', '🐔', '🐕', '🐖', '🐗', '🐘', '🐙', '🐚', '🐛', '🐜', '🐝', '🐞', '🐟', '🐠', '🐡', '🐢', '🐣', '🐤', '🐥', '🐦', '🐧', '🐨', '🐩', '🐪', '🐫', '🐬', '🐭', '🐮', '🐯', '🐰', '🐱', '🐲', '🐳', '🐴', '🐵', '🐶', '🐷', '🐸', '🐹', '🐺', '🐻', '🐼', '🐽', '🐾', '🐿', '👀', '👁', '👂', '👃', '👄', '👅', '👆', '👇', '👈', '👉', '👊', '👋', '👌', '👍', '👎', '👏', '👐', '👑', '👒', '👓', '👔', '👕', '👖', '👗', '👘', '👙', '👚', '👛', '👜', '👝', '👞', '👟', '👠', '👡', '👢', '👣', '👤', '👥', '👦', '👧', '👨', '👩', '👪', '👫', '👬', '👭', '👮', '👯', '👰', '👱', '👲', '👳', '👴', '👵', '👶', '👷', '👸', '👹', '👺', '👻', '👼', '👽', '👾', '👿', '💀', '💁', '💂', '💃', '💄', '💅', '💆', '💇', '💈', '💉', '💊', '💋', '💌', '💍', '💎', '💏', '💐', '💑', '💒', '💓', '💔', '💕', '💖', '💗', '💘', '💙', '💚', '💛', '💜', '💝', '💞', '💟', '💠', '💡', '💢', '💣', '💤', '💥', '💦', '💧', '💨', '💩', '💪', '💫', '💬', '💭', '💮', '💯', '💰', '💱', '💲', '💳', '💴', '💵', '💶', '💷', '💸', '💹', '💺', '💻', '💼', '💽', '💾', '💿', '📀', '📁', '📂', '📃', '📄', '📅', '📆', '📇', '📈', '📉', '📊', '📋', '📌', '📍', '📎', '📏', '📐', '📑', '📒', '📓', '📔', '📕', '📖', '📗', '📘', '📙', '📚', '📛', '📜', '📝', '📞', '📟', '📠', '📡', '📢', '📣', '📤', '📥', '📦', '📧', '📨', '📩', '📪', '📫', '📬', '📭', '📮', '📯', '📰', '📱', '📲', '📳', '📴', '📵', '📶', '📷', '📸', '📹', '📺', '📻', '📼', '📽', '📿', '🔀', '🔁', '🔂', '🔃', '🔄', '🔅', '🔆', '🔇', '🔈', '🔉', '🔊', '🔋', '🔌', '🔍', '🔎', '🔏', '🔐', '🔑', '🔒', '🔓', '🔔', '🔕', '🔖', '🔗', '🔘', '🔙', '🔚', '🔛', '🔜', '🔝', '🔞', '🔟', '🔠', '🔡', '🔢', '🔣', '🔤', '🔥', '🔦', '🔧', '🔨', '🔩', '🔪', '🔫', '🔬', '🔭', '🔮', '🔯', '🔰', '🔱', '🔴', '🔵', '🔶', '🔷', '🔸', '🔹', '🔺', '🔻', '🔼', '🔽', '🕊', '🕎', '🕐', '🕑', '🕒', '🕓', '🕔', '🕕', '🕖', '🕗', '🕘', '🕙', '🕚', '🕛', '🕜', '🕝', '🕞', '🕟', '🕠', '🕡', '🕢', '🕣', '🕤', '🕥', '🕦', '🕧', '🕯', '🕰', '🕳', '🕴', '🕵', '🕶', '🕷', '🕸', '🕹', '🕺', '🖇', '🖊', '🖋', '🖌', '🖍', '🖐', '🖕', '🖖', '🖤', '🖥', '🖨', '🖱', '🖲', '🖼', '🗂', '🗃', '🗄', '🗑', '🗒', '🗓', '🗜', '🗝', '🗞', '🗡', '🗣', '🗨', '🗯', '🗳', '🗺', '🗻', '🗼', '🗽', '🗾', '🗿', '😀', '😁', '😂', '😃', '😄', '😅', '😆', '😇', '😈', '😉', '😊', '😋', '😌', '😍', '😎', '😏', '😐', '😑', '😒', '😓', '😔', '😕', '😖',
'😗', '😘', '😙', '😚', '😛', '😜', '😝', '😞', '😟', '😠', '😡', '😢', '😣', '😤', '😥', '😦', '😧', '😨', '😩', '😪', '😫', '😬', '😭', '😮', '😯', '😰', '😱', '😲', '😳', '😴', '😵', '😶', '😷', '😸', '😹', '😺', '😻', '😼', '😽', '😾', '😿', '🙀', '🙁', '🙂', '🙃', '🙄', '🙅', '🙆', '🙇', '🙈', '🙉', '🙊', '🙋', '🙌', '🙍', '🙎', '🙏', '🚀', '🚁', '🚂', '🚃', '🚄', '🚅', '🚆', '🚇', '🚈', '🚉', '🚊', '🚋', '🚌', '🚍', '🚎', '🚏', '🚐', '🚑', '🚒', '🚓', '🚔', '🚕', '🚖', '🚗', '🚘', '🚙', '🚚', '🚛', '🚜', '🚝', '🚞', '🚟', '🚠', '🚡', '🚢', '🚣', '🚤', '🚥', '🚦', '🚧', '🚨', '🚩', '🚪', '🚫', '🚬', '🚭', '🚮', '🚯', '🚰', '🚱', '🚲', '🚳', '🚴', '🚵', '🚶', '🚷', '🚸', '🚹', '🚺', '🚻', '🚼', '🚽', '🚾', '🚿', '🛀', '🛁', '🛂', '🛃', '🛄', '🛅', '🛋', '🛌', '🛍', '🛎', '🛏', '🛐', '🛑', '🛒', '🛠', '🛡', '🛢', '🛣', '🛤', '🛥', '🛩', '🛫', '🛬', '🛰', '🛳', '🛴', '🛵', '🛶', '🛷', '🛸', '🛹', '🛺', '🤐', '🤑', '🤒', '🤓', '🤔', '🤕', '🤖', '🤗', '🤘', '🤙', '🤚', '🤛', '🤜', '🤝', '🤞', '🤟', '🤠', '🤡', '🤢', '🤣', '🤤', '🤥', '🤦', '🤧', '🤨', '🤩', '🤪', '🤫', '🤬', '🤭', '🤮', '🤯', '🤰', '🤱', '🤲', '🤳', '🤴', '🤵', '🤶', '🤷', '🤸', '🤹', '🤺', '🤼', '🤽', '🤾', '🥀', '🥁', '🥂', '🥃', '🥄', '🥅', '🥇', '🥈', '🥉', '🥊', '🥋', '🥌', '🥍', '🥎', '🥏', '🥐', '🥑', '🥒', '🥓', '🥔', '🥕', '🥖', '🥗', '🥘', '🥙', '🥚', '🥛', '🥜', '🥝', '🥞', '🥟', '🥠', '🥡', '🥢', '🥣', '🥤', '🥥', '🥦', '🥧', '🥨', '🥩', '🥪', '🥫', '🦀', '🦁', '🦂', '🦃', '🦄', '🦅', '🦆', '🦇', '🦈', '🦉', '🦊', '🦋', '🦌', '🦍', '🦎', '🦏', '🦐', '🦑', '🦒', '🦓', '🦔', '🦕', '🦖', '🦗', '🧀', '🧐', '🧑', '🧒', '🧓', '🧔', '🧕', '🧖', '🧗', '🧘', '🧙', '🧚', '🧛', '🧜', '🧝', '🧞', '🧟', '🧠', '🧡', '🧢', '🧣', '🧤', '🧥'];

const RANDOM_AVATARS_PATHS = ['assets/img/avatars/Robot_Avatars_46.png', 'assets/img/avatars/Robot_Avatars_47.png', 'assets/img/avatars/Robot_Avatars_45.png', 'assets/img/avatars/Robot_Avatars_44.png', 'assets/img/avatars/Robot_Avatars_50.png', 'assets/img/avatars/Robot_Avatars_40.png', 'assets/img/avatars/Robot_Avatars_41.png', 'assets/img/avatars/Robot_Avatars_43.png', 'assets/img/avatars/Robot_Avatars_8.png', 'assets/img/avatars/Robot_Avatars_9.png', 'assets/img/avatars/Robot_Avatars_42.png', 'assets/img/avatars/Robot_Avatars_19.png', 'assets/img/avatars/Robot_Avatars_25.png', 'assets/img/avatars/Robot_Avatars_31.png', 'assets/img/avatars/Robot_Avatars_30.png', 'assets/img/avatars/Robot_Avatars_24.png', 'assets/img/avatars/Robot_Avatars_18.png', 'assets/img/avatars/Robot_Avatars_32.png', 'assets/img/avatars/Robot_Avatars_26.png', 'assets/img/avatars/Robot_Avatars_27.png', 'assets/img/avatars/Robot_Avatars_33.png', 'assets/img/avatars/Robot_Avatars_37.png', 'assets/img/avatars/Robot_Avatars_23.png', 'assets/img/avatars/Robot_Avatars_22.png', 'assets/img/avatars/Robot_Avatars_36.png', 'assets/img/avatars/Robot_Avatars_20.png', 'assets/img/avatars/Robot_Avatars_34.png', 'assets/img/avatars/Robot_Avatars_35.png', 'assets/img/avatars/Robot_Avatars_21.png', 'assets/img/avatars/Robot_Avatars_38.png', 'assets/img/avatars/Robot_Avatars_10.png', 'assets/img/avatars/Robot_Avatars_11.png', 'assets/img/avatars/Robot_Avatars_39.png', 'assets/img/avatars/Robot_Avatars_13.png', 'assets/img/avatars/Robot_Avatars_12.png', 'assets/img/avatars/Robot_Avatars_16.png', 'assets/img/avatars/Robot_Avatars_17.png', 'assets/img/avatars/Robot_Avatars_15.png', 'assets/img/avatars/Robot_Avatars_29.png', 'assets/img/avatars/Robot_Avatars_28.png', 'assets/img/avatars/Robot_Avatars_14.png', 'assets/img/avatars/Robot_Avatars_4.png', 'assets/img/avatars/Robot_Avatars_5.png', 'assets/img/avatars/Robot_Avatars_7.png', 'assets/img/avatars/Robot_Avatars_6.png', 'assets/img/avatars/Robot_Avatars_49.png', 'assets/img/avatars/Robot_Avatars_2.png', 'assets/img/avatars/Robot_Avatars_3.png', 'assets/img/avatars/Robot_Avatars_48.png', 'assets/img/avatars/Robot_Avatars_1.png'];
const emojiPath = "assets/img/welcome/actions/emoji.png";
const minusPath = "assets/img/welcome/actions/minus.png";
const plusPath = "assets/img/welcome/actions/plus.png";
const randomImagePath = "assets/img/welcome/actions/random.png";
const trashPath = "assets/img/welcome/actions/trash.png"; 

var createTeamButton = document.getElementById("create-team");
var addMemberButtons = Array.from(document.getElementsByClassName("add-member"));
var removeMemberButtons = Array.from(document.getElementsByClassName("remove-member"));

var emojiTeamButtons = Array.from(document.getElementsByClassName("emoji-team"));
var emojiMemberButtons = Array.from(document.getElementsByClassName("emoji-member"));

var randomTeamButtons = Array.from(document.getElementsByClassName("random-team"));
var randomMemberButtons = Array.from(document.getElementsByClassName("random-member"));

var playButton = document.getElementById("play");

var nbTeams = 2;
var nbPlayers = {1: 2, 2: 2};

//* Teams making system

createTeamButton.addEventListener("click", () => {
    nbTeams++;
    nbPlayers[nbTeams] = 0;
    createTeam(nbTeams);
});

addMemberButtons.forEach((elt) => {
    var teamNb = elt.getAttribute("data-team");
    elt.addEventListener("click", () => {
        addMember(teamNb, nbPlayers[teamNb] + 1);
    });
});

removeMemberButtons.forEach((elt) => {
    var teamNb = elt.getAttribute("data-team");
    var memberNb = elt.getAttribute("data-member");
    elt.addEventListener("click", () => {
        removeMember(teamNb, memberNb);
    });
});

function addMember(teamNb, memberNb, returnMembersDiv=false) {
    var memberDiv = document.createElement("div");
    memberDiv.setAttribute("class", "member");
    memberDiv.setAttribute("id", `member${memberNb}-team${teamNb}`);
    memberDiv.setAttribute("data-team", teamNb);
    memberDiv.setAttribute("data-member", memberNb);

    var randomPath = RANDOM_AVATARS_PATHS[Math.floor(Math.random() * RANDOM_AVATARS_PATHS.length)];
    var avatarImg = document.createElement("img");
    avatarImg.setAttribute("class", "avatar")
    avatarImg.setAttribute("src", randomPath);
    avatarImg.setAttribute("alt", "");

    var memberNameInput = document.createElement("input");
    memberNameInput.setAttribute("type", "text");
    memberNameInput.setAttribute("class", "member-name");
    memberNameInput.setAttribute("data-team", teamNb);
    memberNameInput.setAttribute("data-member", memberNb);
    memberNameInput.setAttribute("placeholder", `Player ${memberNb}`);

    var actionsDiv = document.createElement("div");
    actionsDiv.setAttribute("class", "actions");

    var emojiInput = document.createElement("img");
    emojiInput.setAttribute("src", emojiPath);
    emojiInput.setAttribute("alt", "😀");
    emojiInput.setAttribute("class", "emoji-member pres");
    // Adding emojis event listener
    emojiInput.addEventListener("click", () => {
        var parentInput = emojiInput.parentNode.previousElementSibling;
        addEmojis(parentInput);
    });
    
    var randomInput = document.createElement("img");
    randomInput.setAttribute("src", randomImagePath);
    randomInput.setAttribute("alt", "🎲");
    randomInput.setAttribute("class", "random-member pres");
    // Adding random names event listener
    randomInput.addEventListener("click", () => {
        var parentInput = randomInput.parentNode.previousElementSibling;
        chooseName(parentInput);
    });

    if (memberNb > 1 || teamNb > 2) {
        var removeInput = document.createElement("img"); // Remove the member
        removeInput.setAttribute("src", minusPath);
        removeInput.setAttribute("alt", "➖");
        removeInput.setAttribute("class", "remove-member pres");
        removeInput.setAttribute("data-team", teamNb);
        removeInput.setAttribute("data-member", memberNb);

        // Adding event listener
        removeInput.addEventListener("click", () => {
            removeMember(teamNb, memberNb);
        });
    }


    actionsDiv.appendChild(emojiInput);
    actionsDiv.appendChild(randomInput);
    if (memberNb > 1 || teamNb > 2) {
        actionsDiv.appendChild(removeInput);
    }

    memberDiv.appendChild(avatarImg);
    memberDiv.appendChild(memberNameInput);
    memberDiv.appendChild(actionsDiv);

    // Updating nbPlayers value
    nbPlayers[teamNb] = memberNb;

    if (returnMembersDiv === false) {
        var membersDiv = document.getElementById(`members-team${teamNb}`);

        // Changing last remove input
        var lastMember = membersDiv.lastElementChild;
        var lastRemoveInput = lastMember.getElementsByClassName("remove-member")[0];
        if (typeof(lastRemoveInput) !== "undefined") {
            lastRemoveInput.remove();
        }

        membersDiv.appendChild(memberDiv);
    } else {
        return memberDiv;
    }
}

function removeMember(teamNb, memberNb) {
    var memberDiv = document.getElementById(`member${memberNb}-team${teamNb}`);
    memberDiv.remove();

    nbPlayers[teamNb]--;

    var membersDiv = document.getElementById(`members-team${teamNb}`);
    if (membersDiv.childNodes.length === 0) {
        deleteTeam(teamNb);
    } else if (memberNb - 1 > 1 || teamNb > 2) {
        // Changing last remove input
        var lastMember = membersDiv.lastElementChild;
        var lastActionsDiv = lastMember.getElementsByClassName("actions")[0];

        var removeInput = document.createElement("img"); // Remove the member
        removeInput.setAttribute("src", minusPath);
        removeInput.setAttribute("alt", "➖");
        removeInput.setAttribute("class", "remove-member pres");
        removeInput.setAttribute("data-team", teamNb);
        removeInput.setAttribute("data-member", memberNb - 1);

        // Adding event listener
        removeInput.addEventListener("click", () => {
            removeMember(teamNb, memberNb - 1);
        });

        lastActionsDiv.appendChild(removeInput);
    }
}

function createTeam(teamNb) {
    var teamDiv = document.createElement("div");
    teamDiv.setAttribute("class", "team");
    teamDiv.setAttribute("id", `team${teamNb}`);
    teamDiv.setAttribute("data-team", teamNb);

    var teamNameDiv = document.createElement("div");
    teamNameDiv.setAttribute("class", "team-name-block");

    var teamNameInput = document.createElement("input");
    teamNameInput.setAttribute("type", "text");
    teamNameInput.setAttribute("class", "team-name");
    teamNameInput.setAttribute("data-team", teamNb);
    teamNameInput.setAttribute("placeholder", `Team ${teamNb}`);

    var actionsDiv = document.createElement("div");
    actionsDiv.setAttribute("class", "actions");

    var emojiInput = document.createElement("img");
    emojiInput.setAttribute("src", emojiPath);
    emojiInput.setAttribute("alt", "😀");
    emojiInput.setAttribute("class", "emoji-team pres");
    // Adding emojis event listener
    emojiInput.addEventListener("click", () => {
        var parentInput = emojiInput.parentNode.previousElementSibling;
        addEmojis(parentInput, true);
    });
    
    var randomInput = document.createElement("img");
    randomInput.setAttribute("src", randomImagePath);
    randomInput.setAttribute("alt", "🎲");
    randomInput.setAttribute("class", "random-team pres");
    // Adding random teams names event listener
    randomInput.addEventListener("click", () => {
        var parentInput = randomInput.parentNode.previousElementSibling;
        chooseName(parentInput, true);
    });

    var addInput = document.createElement("img"); // Add a member to the team
    addInput.setAttribute("src", plusPath);
    addInput.setAttribute("alt", "➕");
    addInput.setAttribute("class", "add-member pres");
    addInput.setAttribute("data-team", teamNb);
    // Adding event listener
    addInput.addEventListener("click", () => {
        addMember(teamNb, nbPlayers[teamNb] + 1);
    });

    if (teamNb > 2) {
        var deleteInput = document.createElement("img"); // Delete the team
        deleteInput.setAttribute("src", trashPath);
        deleteInput.setAttribute("alt", "🗑");
        deleteInput.setAttribute("class", "delete-team pres");
        deleteInput.setAttribute("data-team", teamNb);

        // Adding event listener
        deleteInput.addEventListener("click", () => {
            deleteTeam(teamNb);
        });
    }

    actionsDiv.appendChild(emojiInput);
    actionsDiv.appendChild(randomInput);
    actionsDiv.appendChild(addInput);
    if (teamNb > 2) {
        actionsDiv.appendChild(deleteInput);
    }

    teamNameDiv.appendChild(teamNameInput);
    teamNameDiv.appendChild(actionsDiv);

    teamDiv.appendChild(teamNameDiv);

    // Adding members
    var membersDiv = document.createElement("div");
    membersDiv.setAttribute("class", "members");
    membersDiv.setAttribute("id", `members-team${teamNb}`);
    membersDiv.setAttribute("data-team", teamNb);

    var memberDiv = addMember(teamNb, 1, true);

    membersDiv.appendChild(memberDiv);
    teamDiv.appendChild(membersDiv);

    var teamsDiv = document.getElementById("teams");
    teamsDiv.appendChild(teamDiv);
}

function deleteTeam(teamNb) {
    var teamDiv = document.getElementById(`team${teamNb}`);
    teamDiv.remove();

    delete nbPlayers[teamNb];

    while (typeof(nbPlayers[nbTeams]) === "undefined") {
        nbTeams--;
    }
}

//* Random emojis button system

emojiTeamButtons.forEach((elt) => {
    var parentInput = elt.parentNode.previousElementSibling;
    elt.addEventListener("click", () => {
        addEmojis(parentInput, true);
    });
});

emojiMemberButtons.forEach((elt) => {
    var parentInput = elt.parentNode.previousElementSibling;
    elt.addEventListener("click", () => {
        addEmojis(parentInput);
    });
});

function addEmojis(input, leftToo=false) {
    var value = input.value.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');

    input.value = value + RANDOM_EMOJIS[Math.floor(Math.random() * RANDOM_EMOJIS.length)];

    if (leftToo) {
        value = input.value;
        input.value = RANDOM_EMOJIS[Math.floor(Math.random() * RANDOM_EMOJIS.length)] + value;
    }
}

//* Random (teams) names button system

randomTeamButtons.forEach((elt) => {
    var parentInput = elt.parentNode.previousElementSibling;
    elt.addEventListener("click", () => {
        chooseName(parentInput, true);
    });
});

randomMemberButtons.forEach((elt) => {
    var parentInput = elt.parentNode.previousElementSibling;
    elt.addEventListener("click", () => {
        chooseName(parentInput);
    });
});

function chooseName(input, isTeam=false) {
    if (isTeam) {
        input.value = RANDOM_TEAMS_NAMES[Math.floor(Math.random() * RANDOM_TEAMS_NAMES.length)];
    } else {
        input.value = RANDOM_NAMES[Math.floor(Math.random() * RANDOM_NAMES.length)];
    }
}

//* Play button system

playButton.addEventListener("click", () => {
    var teamsInputs = Array.from(document.getElementsByClassName("team-name"));
    var membersInputs = Array.from(document.getElementsByClassName("member-name"));

    teamsInputs.forEach((elt) => {
        if (elt.value === "") {
            chooseName(elt, true);
            addEmojis(elt, true);
        }
    });

    membersInputs.forEach((elt) => {
        if (elt.value === "") {
            chooseName(elt);
            addEmojis(elt);
        }
    });
    
    var gameVar = [];
    var teams = Array.from(document.getElementsByClassName("team"));
    teams.forEach((team) => {
        var teamNameValue = team.getElementsByClassName("team-name")[0].value;
        var members = {};
        Array.from(team.getElementsByClassName("member-name")).forEach((member) => {
            members[member.value] = member.previousElementSibling.src;
        });

        gameVar.push(
            {
                teamName: teamNameValue,
                members: Object.keys(members),
                avatars: members,
                route: "1",
                pageIndex: 0,
                pts: {
                    money: 300,
                    culture: 0,
                    fun: 0,
                    pictures: 0,
                    objects: [],
                    total: 0
                }
            }
        );
    });

    sessionStorage.setItem("gameVar", JSON.stringify(gameVar));
    location.href = "game.html";
});
