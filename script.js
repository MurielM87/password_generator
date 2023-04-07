const passwordInput = document.querySelector(".password_box input");
copyIcon = document.querySelector(".password_box .copy_icon");
rangeInput = document.querySelector(".range_box input");
sliderNumber = document.querySelector(".range_box .slider_number");
generateButton = document.querySelector(".generate_button");

let allCharacters = "abcdefghijklmnopqrstuvwyzABCDEFGHIJKLMNOPQRSTUVWYZ0123456789^!$%|[](){}:;.,*+-=#@<>"
const generatePassword = () => {
    let newPassword = "";

    for(let i = 0; i < rangeInput.value; i++) {
        let randomNumbers = Math.floor(Math.random() * allCharacters.length);
        newPassword += allCharacters[randomNumbers];
    }
    passwordInput.value = newPassword;
    copyIcon.classList.replace("fa-check-circle", "fa-copy");
}

rangeInput.addEventListener("input", () => {
    sliderNumber.innerText = rangeInput.value;
    generatePassword();
});

//copy
copyIcon.addEventListener("click", () => {
    navigator.clipboard.writeText(passwordInput.value);
    copyIcon.classList.replace("fa-copy", "fa-check-circle");
})

generatePassword();
generateButton.addEventListener("click", generatePassword);