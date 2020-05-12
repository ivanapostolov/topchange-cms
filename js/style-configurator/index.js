function buildAppbar() {
    $(".appbar").addClass("mui-appbar mui--appbar-line-height mui--bg-color-cyan-800 mui--align-middle");
    $(".appbar-title").addClass("mui--align-middle");
    $(".appbar-button").addClass("mui--align-middle mui-btn mui-btn--flat mui--bg-color-grey-200 mui--color-cyan-800");
}

function buildStartPage() {
    $(".s-headline").addClass("mui--text-dark mui--text-headline mui--text-center");
    $(".s-option-panel").addClass("mui-panel mui--text-center");
    $(".s-option-title").addClass("mui--color-pink-600 mui--text-title");
    $(".s-option-description").addClass("mui--text-dark mui--text-subhead");
    $(".s-option-button").addClass("mui-btn mui-btn--primary mui--bg-color-cyan-800 mui-btn--raised");
}

function buildFixingPage() {
    $(".f-panel").addClass("mui-panel");
    $(".f-title").addClass("mui--color-pink-600 mui--text-title");
    $(".f-input-field").addClass("mui-textfield mui-textfield--float-label");
    $(".f-button").addClass("mui-btn mui-btn--primary mui--bg-color-cyan-800");
}

$(window).bind("load", function () {
    buildAppbar();
    buildStartPage();
    buildFixingPage();
});