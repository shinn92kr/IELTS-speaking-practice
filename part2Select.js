import { part23Questions } from "./questionStorage.js";

const questionsLst = part23Questions();
const keyList = Object.keys(questionsLst);
const keyListLen = keyList.length;

const ul = document.querySelector("ul");

function init() {
    for (let i = 0; i < keyListLen; i++) {
        const li = document.createElement("li");
        const form = document.createElement("form");
        const inputText = document.createElement("input");
        const inputButton = document.createElement("input");

        form.setAttribute("action", "./part2Question.html");
        form.setAttribute("method", "get");

        inputText.setAttribute("type", "text");
        inputText.setAttribute("name", "title");

        inputText.value = keyList[i];
        inputText.style.display = "none";

        inputButton.setAttribute("type", "submit");
        inputButton.value =
            "⭐" + keyList[i].replace("23", "2 / Part3").replace("3", "3 ");

        form.appendChild(inputText);
        form.appendChild(inputButton);
        li.appendChild(form);
        ul.appendChild(li);
    }
}

init();
