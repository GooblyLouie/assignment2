//Encoura-Positigen, by Chris Cavalier

var gestures = require("tns-core-modules/ui/gestures");
var labelModule = require("tns-core-modules/ui/label");

//Useful pre-generated function
function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new HomeViewModel();
}
exports.onNavigatingTo = onNavigatingTo;

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
    if (args.direction = "up") {
        onOptionsTap();
    }
});