const form = document.querySelector(".feedback-form");
const inputEmail = form.elements.email;
const textarea = form.elements.message;
const localStorageKey = "feedback-form-state";

updateFormInformation();

form.addEventListener("input", getFormInformation);
function getFormInformation() {
    const formObj = {
        email: inputEmail.value.trim(),
        message: textarea.value.trim()
    };
    localStorage.setItem(localStorageKey, JSON.stringify(formObj));
};

function updateFormInformation() {
    const savedFormInfo = JSON.parse(localStorage.getItem(localStorageKey)) || {};
    inputEmail.value = savedFormInfo.email ?? "";
    if (savedFormInfo) {
        textarea.value = savedFormInfo.message ?? "";
    }
};

form.addEventListener("submit", sentInformation);
function sentInformation(evt) {
    evt.preventDefault();
    const savedFormInfo = JSON.parse(localStorage.getItem(localStorageKey)) || {};

    if (savedFormInfo.email && savedFormInfo.message) {
        console.log(savedFormInfo);
    }
    localStorage.removeItem(localStorageKey);
    form.reset();
};

// const form = document.querySelector(".feedback-form");
// const localStorageKey = "feedback-form-state";

// form.addEventListener("input", getFormInformation);
// form.addEventListener("submit", sentInformation);

// let savedFormInfo = JSON.parse(localStorage.getItem(localStorageKey)) || {};
// const { email, message } = form.elements;

// email.value = savedFormInfo.email ?? "";
// message.value = savedFormInfo.message ?? "";

// function getFormInformation(evt) {
//     savedFormInfo[evt.target.name] = evt.target.value.trim();
//     localStorage.setItem(localStorageKey, JSON.stringify(savedFormInfo));
// };

// function sentInformation(evt) {
//     evt.preventDefault();
//     console.log(savedFormInfo);
//     savedFormInfo = {};
//     form.reset();
//     localStorage.removeItem(localStorageKey);
// };