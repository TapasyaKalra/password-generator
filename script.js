const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const symbols = "!@#$%_.";
const lengthSpan = document.getElementById('lengthSpan');
const lengthSlider = document.getElementById('lengthSlider');
const uppercaseCheckbox = document.getElementById('uppercase');
const lowercaseCheckbox = document.getElementById('lowercase');
const numericCheckbox = document.getElementById('numeric');
const symbolsCheckbox = document.getElementById('symbols');
const resultField = document.getElementById('resultField');
var passwordLength = 30;
var password = "";
var selectedChar = [];
var selectedCharIndex = 0;
// changing value of passwordLength variable accoring to slider input and displaying it
lengthSlider.oninput = () => {
    passwordLength = lengthSlider.value;
    lengthSpan.innerHTML = passwordLength;
}
// generating password
function generatePassword() {
    resultField.value = "";
    password = "";
    selectedChar = [];
    if (!checkOptions()) {
        alert("Please select a checkbox")
        return
    }
    // creating password string one character at a time
    while (password.length <= passwordLength) {
        if (uppercaseCheckbox.checked) {
            selectedCharIndex = Math.floor(Math.random() * uppercase.length);
            password += uppercase.charAt(selectedCharIndex);
        }
        if (lowercaseCheckbox.checked) {
            selectedCharIndex = Math.floor(Math.random() * lowercase.length);
            password += lowercase.charAt(selectedCharIndex)
        }
        if (numericCheckbox.checked) {
            password += Math.floor(Math.random() * 10);
        }
        if (symbolsCheckbox.checked) {
            selectedCharIndex = Math.floor(Math.random() * symbols.length);
            password += symbols.charAt(selectedCharIndex);
        }

    }
    // shuffling characters in the password
    password = [...password].sort(function () { return 0.5 - Math.random() }).join('');
    resultField.value = password;
}
// clearing result and checkboxes
function clearFields() {
    resultField.value = "";
    uppercaseCheckbox.checked = true;
    lowercaseCheckbox.checked = false;
    numericCheckbox.checked = false;
    symbolsCheckbox.checked = false;
    lengthSlider.value = 30;
    lengthSpan.innerHTML = 30;
}
// checking if anyone of the checkboxes are checked
function checkOptions() {
    if (uppercaseCheckbox.checked || lowercaseCheckbox.checked || numericCheckbox.checked || symbolsCheckbox.checked) {
        return true
    }
    else
        return false
}
// copying to clipbaord
function copyToClipboard() {
    navigator.clipboard.writeText(resultField.value);
    alert("Copied to Clipboard!");
}
