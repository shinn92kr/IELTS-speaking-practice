import { part1Questions, part23Questions } from "./questionStorage.js";

const part1 = part1Questions();
const part23 = part23Questions();
const part1KeyList = Object.keys(part1);
const part23KeyList = Object.keys(part23);
const part1KeyListLen = part1KeyList.length;
const part23KeyListLen = part23KeyList.length;

const randnumForpart1 = Math.floor(Math.random() * part1KeyListLen);
const randnumForpart23 = Math.floor(Math.random() * part23KeyListLen);

const part1Obj = part1[part1KeyList[randnumForpart1]].slice(1);
const part2Obj = part23[part23KeyList[randnumForpart23]][0];
const part3Obj = part23[part23KeyList[randnumForpart23]][1];
const obj = ["Part1", part1Obj, "Part2", part2Obj, "Part3", part3Obj];

const part1Len = part1Obj.length;
const part2Len = part2Obj.length;
const part3Len = part3Obj.length;

const question = document.querySelector("#main-question");
const index = document.querySelector(".index");
const nextDiv = document.querySelector(".next");
const nextButton = nextDiv.querySelector("span");

let c1 = 0;
let c2 = 0;

console.log(obj[4]);

function deleteChild() {
    const childNodeCount = question.childElementCount;
    for (let i = 0; i < childNodeCount; i++) {
        question.removeChild(question.firstChild);
    }
}

function init() {
    const span = document.createElement("span");
    span.innerText = obj[0];
    question.appendChild(span);
    c1++;
}

function clickNext() {
    if (c1 == 1 && c2 == 0) {
        deleteChild();
        const span = document.createElement("span");
        span.innerText = obj[c1][c2];
        question.appendChild(span);
        index.innerText = `PART1 ${c2 + 1}/${part1Len}`;
        c2++;
    } else if (c1 == 1 && c2 <= part1Len - 1) {
        deleteChild();
        const span = document.createElement("span");
        span.innerText = obj[c1][c2];
        question.appendChild(span);
        index.innerText = `PART1 ${c2 + 1}/${part1Len}`;
        c2++;
    } else if (c1 == 1 && c2 == part1Len) {
        deleteChild();
        index.style.visibility = "hidden";
        c1++;
        c2 = 0;
        const span = document.createElement("span");
        span.innerText = obj[c1];
        question.appendChild(span);
    } else if (c1 == 2) {
        deleteChild();
        c1++;
        for (let i = 0; i < part2Len; i++) {
            const span = document.createElement("span");
            if (i > 1 && i < part2Len - 1) {
                span.innerText = `\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0${obj[c1][i]}`;
            } else {
                span.innerText = obj[c1][i];
            }
            question.appendChild(span);
        }
    } else if (c1 == 3) {
        deleteChild();
        c1++;
        const span = document.createElement("span");
        span.innerText = obj[c1];
        question.appendChild(span);
        console.log(c1);
        c1++;
    } else if (c1 == 5 && c2 < part3Len) {
        deleteChild();
        const span = document.createElement("span");
        span.innerText = obj[c1][c2];
        question.appendChild(span);
        index.style.visibility = "visible";
        index.innerText = `PART3 ${c2 + 1}/${part3Len}`;
        c2++;
    } else if (c1 == 5 && c2 == part3Len) {
        deleteChild();
        index.style.visibility = "hidden";
        const span = document.createElement("span");
        const span1 = document.createElement("span");
        const span2 = document.createElement("span");
        span.innerText = "Congratulation!!🎉";
        span.style.marginBottom = "15px";
        span1.innerText = "You just finished IELTS speaking mock test!";
        span2.innerText = "I hope you can get your target score!";
        span.style.marginBottom = "15px";
        span1.style.marginBottom = "5px";
        question.appendChild(span);
        question.appendChild(span1);
        question.appendChild(span2);
        nextButton.style.display = "none";
    }
}

init();
nextButton.addEventListener("click", clickNext);
