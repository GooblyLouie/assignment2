//Encoura-Positigen, by Chris Cavalier

//Importing required modules
const HomeViewModel = require("./home-view-model");
const Button = require("tns-core-modules/ui/button").Button;
const tabViewModule = require("tns-core-modules/ui/tab-view");
const view = require("tns-core-modules/ui/core/view");
const appSettings = require("application-settings");
let getFrameById = require("tns-core-modules/ui/frame").getFrameById;
const frame = getFrameById("myFrame");
var gestures = require("tns-core-modules/ui/gestures");
var labelModule = require("tns-core-modules/ui/label");

//Useful pre-generated function
function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new HomeViewModel();
}
exports.onNavigatingTo = onNavigatingTo;

//Set the title based on whether or not the user has set a unique username
function setUsername() {
    const dashboard = view.getViewById("dashboard");
    if (appSettings.hasKey("username")) {
       dashboard.text = appSettings.getString("username") + "'s Dashboard";
    } else {
        dashboard.text = "User's Dashboard";
    }
}
exports.setUsername = setUsername;

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
        onEncourageTap();
    }
});