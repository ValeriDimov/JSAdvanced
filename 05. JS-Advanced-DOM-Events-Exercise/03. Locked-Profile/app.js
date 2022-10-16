function lockedProfile() {
    let userOneDiv = document.querySelector('input[name="user1Username"]').parentElement;
    let userOneButton = userOneDiv.getElementsByTagName("BUTTON")[0];
    userOneButton.addEventListener('click', showInfo);

    let userTwoDiv = document.querySelector('input[name="user2Username"]').parentElement;
    let userTwoButton = userTwoDiv.getElementsByTagName("BUTTON")[0];
    userTwoButton.addEventListener('click', showInfo);

    let user3Div = document.querySelector('input[name="user3Username"]').parentElement;
    let user3Button = user3Div.getElementsByTagName("BUTTON")[0];
    user3Button.addEventListener('click', showInfo);

    function showInfo(e) {
        let userDiv = e.target.parentElement;
        let radioBtn = userDiv.querySelectorAll('input[type="radio"]')[0];
        let emailAndAge = userDiv.querySelectorAll('input[type="email"]')[0];
        let userButton = userDiv.getElementsByTagName("BUTTON")[0];

        if (!radioBtn.checked && emailAndAge.parentElement.style.display !== "block") {
            emailAndAge.parentElement.style.display = "block";
            userButton.textContent = "Hide it";
            return;
        }

        if (!radioBtn.checked && emailAndAge.parentElement.style.display === "block") {
            emailAndAge.parentElement.style.display = "none";
            userButton.textContent = "Show more";
        }
    }

}