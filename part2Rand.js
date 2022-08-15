import { part23Questions } from "./questionStorage.js";

const questionsLst = part23Questions();
const keyList = Object.keys(questionsLst);
const keyListLen = keyList.length;
const randNum = Math.floor(Math.random() * keyListLen);

const obj = questionsLst[keyList[randNum]];
const part2Len = obj[0].length;
const part3Len = obj[1].length;

const question = document.querySelector("#main-question");
// const part2QuestionFirst = question.querySelector(".part2First");
const index = document.querySelector(".index");
const beforeDiv = document.querySelector(".before");
const nextDiv = document.querySelector(".next");
const beforeButton = beforeDiv.querySelector("span");
const nextButton = nextDiv.querySelector("span");

let c1 = 0;
let c2 = 0;

function init() {
    for (let i = 0; i < part2Len; i++) {
        const span = document.createElement("span");
        if (i > 1 && i < part2Len - 1) {
            span.innerText = `\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0${obj[0][i]}`;
        } else {
            span.innerText = obj[c1][i];
        }
        question.appendChild(span);
    }
    beforeButton.style.visibility = "hidden";
}

function clickNext() {
    if (c1 == 0) {
        c1 = 1;
        const childNodeCount = question.childElementCount;
        for (let i = 0; i < childNodeCount; i++) {
            question.removeChild(question.firstChild);
        }
        const span = document.createElement("span");
        span.innerText = obj[c1][c2];
        question.appendChild(span);
        index.innerText = `${c2 + 1} / ${part3Len}`;
        beforeButton.style.visibility = "visible";
    } else {
        const span = question.querySelector("span");
        c2++;
        span.innerText = obj[c1][c2];
        index.innerText = `${c2 + 1} / ${part3Len}`;
        if (c2 == part3Len - 1) {
            nextButton.style.visibility = "hidden";
        }
    }
}

function clickBefore() {
    if (c1 !== 0 && c2 !== 0) {
        c2--;
        const span = question.querySelector("span");
        span.innerText = obj[c1][c2];
        index.innerText = `${c2 + 1} / ${part3Len}`;
        nextButton.style.visibility = "visible";
    } else {
        c1 = 0;
        question.removeChild(question.firstChild);
        for (let i = 0; i < part2Len; i++) {
            const span = document.createElement("span");
            if (i > 1 && i < part2Len - 1) {
                span.innerText = `\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0${obj[0][i]}`;
            } else {
                span.innerText = obj[c1][i];
            }
            question.appendChild(span);
            index.innerText = "";
        }
        nextButton.style.visibility = "visible";
        beforeButton.style.visibility = "hidden";
    }
}

init();
nextButton.addEventListener("click", clickNext);
beforeButton.addEventListener("click", clickBefore);
