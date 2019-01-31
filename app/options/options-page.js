//Encoura-Positigen, by Chris Cavalier

//Importing required modules
var dialogs = require("tns-core-modules/ui/dialogs");
const appSettings = require("application-settings");
const switchModule = require("tns-core-modules/ui/switch");
const view = require("tns-core-modules/ui/core/view");
var application = require("application");
const frame = getFrameById("myFrame");
var gestures = require("tns-core-modules/ui/gestures");
var labelModule = require("tns-core-modules/ui/label");

//Useful pre-generated function
function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new HomeViewModel();
}
exports.onNavigatingTo = onNavigatingTo;

//A function that creates a dialog box to prompt the user to enter and submit a new username, then saves it as a setting
function usernamePrompt() {
    dialogs.prompt("Please enter your desired username and confirm", "user").then(function (r) {
        if (r.result) {
            appSettings.set("username", r.text);
        }
    });
}
exports.usernamePrompt = usernamePrompt;

//A function that uses the modeChecked setting to set the Dark Mode switch appropriately on page load
function setCheck() {
    const mySwitch = view.getViewById("switch");
    if (appSettings.hasKey("modeChecked")) {
        mySwitch.checked = appSettings.getBoolean("modeChecked");
    } else {
        mySwitch.checked = false;
    }
}
exports.setCheck = setCheck;

//Sets up the Dark Mode switch, which toggles the loaded css file for the application and then reloads the page
const mySwitch = view.getViewById("switch");
mySwitch.on("checkedChange", (args) => {
    if (mySwitch.checked) {
        application.cssSelectorsCache = application.loadCss("app.css");
        application.cssFile = ("app.css");
        appSettings.set("modeChecked", false);
    } else {
        application.cssSelectorsCache = application.loadCss("app-dark.css");
        application.cssFile = ("app-dark.css");
        appSettings.set("modeChecked", true);
    }
    frame.navigate("options-page");
});

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
        onAboutTap();
    } else if (args.direction = "up") {
        onEncourageTap();
    }
});