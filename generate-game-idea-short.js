const gameGenres = [
    "Action",
    "Adventure",
    "Role-playing",
    "Strategy",
    "Simulation",
    "Sports",
    "Racing",
    "Puzzle",
    "Fighting",
    "Platformer",
    "Stealth",
    "Survival",
    "Horror",
    "Open World",
    "First-person Shooter",
    "Third-person Shooter",
    "Tactical Shooter",
    "Rhythm",
    "Massively Multiplayer Online (MMO)",
    "Turn-based Strategy",
    "Real-time Strategy",
    "Tower Defense",
    "Card",
    "Educational",
    "Party",
    "Trivia",
    "Casual",
    "Arcade",
    "Roguelike",
    "Metroidvania",
    "Point-and-Click",
    "Visual Novel",
    "Life Simulation",
    "City Building",
    "God Game",
    "Sandbox",
    "Flight Simulation"
    // Add more genres as desired
];

const gameSettings = [
    "Fantasy World",
    "Sci-Fi Space Station",
    "Post-Apocalyptic Wasteland",
    "Medieval Kingdom",
    "Ancient Egypt",
    "Wild West",
    "Modern City",
    "Haunted Mansion",
    "Underwater Abyss",
    "Jungle/Amazon",
    "Cyberpunk Metropolis",
    "Futuristic Mars Colony",
    "Gothic Castle",
    "Pirate Island"
    // Add more settings as desired
];

const gameMechanics = [
    "Movement",
    "Jumping",
    "Shooting",
    "Combat",
    "Exploration",
    "Puzzle-solving",
    "Platforming",
    "Stealth",
    "Resource Management",
    "Leveling Up",
    "Character Customization",
    "Questing",
    "Crafting",
    "Trading",
    "Inventory Management",
    "Decision-making",
    "Dialogue Choices",
    "Multiple Endings",
    "Time Manipulation",
    "Physics-based Gameplay",
    "Cooperative Play",
    "Competitive Play",
    "Turn-based Combat",
    "Real-time Combat",
    "Steering and Maneuvering",
    "Teamwork",
    "Pattern Recognition"
    // Add more mechanics as desired
];

const gameObjectives = [
    "Defeat the final boss",
    "Rescue a captured ally",
    "Collect all hidden artifacts",
    "Reach the highest level",
    "Complete a challenging puzzle",
    "Build a thriving civilization",
    "Win a championship or tournament",
    "Explore every area on the map",
    "Discover the truth behind a mystery",
    "Survive against waves of enemies",
    "Obtain the rarest item in the game",
    "Conquer all enemy territories",
    "Create and maintain a successful business",
    "Maximize your score or high score",
    "Unlock all achievements or trophies"
    // Add more objectives as desired
];

const unusualMechanics = [
    "One screen",
    "Invisible walls",
    "Unexplained controls",
    "Playable with one hand",
    "Playable with one finger",
    "No tutorials",
    "No saving",
    "No main character",
    "No UI",
    "Real-world weather is in-game weather",
    "Music gets progressively worse",
    "Graphics get progressively worse",
    "World deteriorates over time",
    "Reverse gravity",
    "Time only moves when the player moves",
    "Pixelated graphics",
    "Text-based gameplay",
    "Gameplay affected by microphone input"
    // Add more mechanics or constraints as desired
];

function pickRandom(items) {
    return items[Math.floor(Math.random() * items.length)];
}


function generateIdea() {
    $("#genre").find(".game_idea_generator-text").text(pickRandom(gameGenres));
    $("#setting").find(".game_idea_generator-text").text(pickRandom(gameSettings));
    $("#mechanic").find(".game_idea_generator-text").text(pickRandom(gameMechanics));
    $("#objective").find(".game_idea_generator-text").text(pickRandom(gameObjectives));
    $("#unusual-mechanic").find(".game_idea_generator-text").text(pickRandom(unusualMechanics));
}

$(document).ready(generateIdea);

$("#refresh-idea").on("click", generateIdea);

$("#genre").on("click", function () {
    $(this).find(".game_idea_generator-text").text(pickRandom(gameGenres));
})

$("#setting").on("click", function () {
    $(this).find(".game_idea_generator-text").text(pickRandom(gameSettings));
})

$("#mechanic").on("click", function () {
    $(this).find(".game_idea_generator-text").text(pickRandom(gameMechanics));
})

$("#objective").on("click", function () {
    $(this).find(".game_idea_generator-text").text(pickRandom(gameObjectives));
})

$("#unusual-mechanic").on("click", function () {
    $(this).find(".game_idea_generator-text").text(pickRandom(unusualMechanics));
})