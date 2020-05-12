function getResponseOverlay(response) {
    // initialize modal element
    let modalEl = document.createElement('div');
    modalEl.classList.add("o-container", "mui--z2", "mui--text-center");

    let titleEl = document.createElement('div');
    titleEl.classList.add("o-title", "mui--color-pink-600");

    let messageEl = document.createElement('div');
    messageEl.classList.add("mui--text-subhead", "mui--color-cyan-800");

    titleEl.innerHTML = "Response Message";
    messageEl.innerHTML = response;

    modalEl.appendChild(titleEl);
    modalEl.appendChild(messageEl);
    // show modal
    mui.overlay('on', modalEl);
}

function updatePercentRequest(abbr , pct) {
    $.ajax
        ({
            type: "POST",
            crossDomain: true,
            //the url where you want to sent the userName and password to
            url: 'https://fixing-topchange.herokuapp.com/api/update_percent',
            contentType: 'application/json',
            async: false,
            //json object to sent to the authentication url
            data: JSON.stringify({ "abbreviation": abbr, "percent": pct }),
            success: function () {
                getResponseOverlay("Success");
            },
            error: function () { 
                getResponseOverlay("Error");
            },
        });
}

function updateManuallyRequest(abbr , value) {
    $.ajax
        ({
            type: "POST",
            crossDomain: true,
            //the url where you want to sent the userName and password to
            url: 'https://fixing-topchange.herokuapp.com/api/update_manually',
            contentType: 'application/json',
            async: false,
            //json object to sent to the authentication url
            data: JSON.stringify({ "abbreviation": abbr, "value": value }),
            success: function () {
                getResponseOverlay("Success");
            },
            error: function () { 
                getResponseOverlay("Error");
            },
        });
}

function reloadRequest(abbr , value) {
    $.ajax
        ({
            type: "POST",
            crossDomain: true,
            //the url where you want to sent the userName and password to
            url: 'https://fixing-topchange.herokuapp.com/api/reload',
            contentType: 'application/json',
            async: false,
            //json object to sent to the authentication url
            data: JSON.stringify({ }),
            success: function () {
                getResponseOverlay("Success");
            },
            error: function () { 
                getResponseOverlay("Error");
            },
        });
}