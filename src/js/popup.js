const { default: wow } = require("./popup/example");

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    wow();
});