//Encoura-Positigen, by Chris Cavalier

//Importing required modules
const Button = require("tns-core-modules/ui/button").Button;
const view = require("tns-core-modules/ui/core/view");
var gestures = require("tns-core-modules/ui/gestures");
var labelModule = require("tns-core-modules/ui/label");

//Useful pre-generated function
function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new HomeViewModel();
}
exports.onNavigatingTo = onNavigatingTo;

//An array of encouraging strings to draw from
const encourageArray = [
    "You matter",
    "God loves you",
    "You are beautiful",
    "You are stronger than you seem",
    "You are braver than you believe",
    "You are smarter than you think"
];

//Set the encouragement text box using the getEncouragement function
function onEncourageTap(args) {
    view.getViewById("encouragement").text = getEncouragement();
}
exports.onEncourageTap = onEncourageTap;

//Get a random entry from the array of encouraging strings
function getEncouragement() {
    var random = Math.floor(Math.random() * encourageArray.length);
    return encourageArray[random];
}

//Set the page's greeting based on whether or not the user has set a unique username
function setGreeting() {
    if (appSettings.hasKey("username")) {
        view.getViewById("greeting").text = "Hey, " + appSettings.getString("username") + "....";
    } else {
        view.getViewById("greeting").text = "Hey...";
    }
}
exports.setGreeting = setGreeting;

function onHomeTap(args) {
    // Navigate to page called home-page”
    frame.topmost().navigate("home/home-page");
}
exports.onHomeTap = onHomeTap;

function onEncourageTap(args) {
    // Navigate to page called “encourage-page”
    frame.topmost().navigate("encouragement/encourage-page");
}
exports.onEncourageTap = onEncourageTap;

function onOptionsTap(args) {
    // Navigate to page called “options-page”
    frame.topmost().navigate("options/options-page");
}
exports.onOptionsTap = onOptionsTap;

function onAboutTap(args) {
    // Navigate to page called about-page”
    frame.topmost().navigate("about/about-page");
}
exports.onAboutTap = onAboutTap;

//Setting up a label to listen for gestures and navigate appropriately
var label = new labelModule.Label();
label.on(gestures.GestureTypes.swipe, function (args) {
    if (args.direction = "down") {
        onOptionsTap();
    } else if (args.direction = "up") {
        onHomeTap();
    }
});