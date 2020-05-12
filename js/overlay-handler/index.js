function submitButton(action) {
    if ($("#AuthenticationField").val() == "fixpass") {
        $("#mui-overlay").remove();
        switch (action) {
            case "update-percent":
                updatePercentRequest($("#UpdatePercentAbbr").val(), $("#UpdatePercentValue").val());
                break;
            case "update-manually":
                updateManuallyRequest($("#UpdateManuallyAbbr").val(), $("#UpdateManuallyValue").val());
                break;
            case "reload":
                reloadRequest();
                break;
            default:
                break;
        }
    } else {
        getResponseOverlay("Wrong Password")
    }
}

function getAuthenticationOverlay(action) {
    // initialize modal element
    let modalEl = document.createElement('div');
    modalEl.classList.add("o-container", "mui--z2", "mui--text-center");

    let titleEl = document.createElement('div');
    titleEl.classList.add("o-title", "mui--color-pink-600");

    let inputContainerEl = document.createElement('div');
    inputContainerEl.classList.add("o-input", "mui-textfield", "mui-textfield--float-label");

    let inputEl = document.createElement('input');
    inputEl.setAttribute("type", "password");
    inputEl.setAttribute("id", "AuthenticationField");

    let labelEl = document.createElement('label');

    let buttonEl = document.createElement('button');
    buttonEl.classList.add("mui-btn", "mui-btn--raised", "mui-btn--primary");
    buttonEl.setAttribute("onclick", "submitButton('" + action + "')");

    inputContainerEl.appendChild(inputEl);
    inputContainerEl.appendChild(labelEl);

    labelEl.innerHTML = "Password";
    titleEl.innerHTML = "Authentication!";
    buttonEl.innerHTML = "Submit";

    modalEl.appendChild(titleEl);
    modalEl.appendChild(inputContainerEl);
    modalEl.appendChild(buttonEl);
    // show modal
    mui.overlay('on', modalEl);
}