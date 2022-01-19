const firstLine = document.getElementById("first-line");
const secLine = document.getElementById("second-line");
const mainBtns = document.getElementById("main-buttons");
const clearBtn = mainBtns.firstElementChild
const delBtn = mainBtns.lastElementChild;
const opBtns = Array.from(document.getElementById("operation-buttons").children);

clearBtn.addEventListener("click", clearF);
delBtn.addEventListener("click", delF);


opBtns.forEach(btn => {btn.addEventListener("click", printC);});

const n = opBtns.length;
const eqBtn = opBtns[n - 2];
eqBtn.addEventListener("click", performCalc);


// if (secLine.textContent.length > 13){
//     display only the last 13 digits and not anything before;
// }




function clearF(){
    firstLine.textContent = 0;
    secLine.textContent = 0;
}

function delLast(){
    let arr = [];
        for(let i = 0; i < secLine.textContent.length; i++){
            arr.push(secLine.textContent[i]);
        }
        arr.pop();
        let result = arr.join("");
        secLine.textContent = result;
}

function delF(){
    if (secLine.textContent.length > 1){
        delLast();
    }
    else {
        secLine.textContent = 0;
    }
}

function printC(e){
    if (secLine.textContent == 0){
        secLine.textContent = e.target.textContent;
    }
    else {
        secLine.textContent += e.target.textContent;
    }
}

function performCalc(){
    delLast();
    firstLine.textContent = secLine.textContent;
    if (secLine.textContent.includes("+")){
        sumCalc();
    }
    else if (secLine.textContent.includes("-")){
        subsCalc();
    }
    else if (secLine.textContent.includes("x")){
        multCalc();
    }
    else if (secLine.textContent.includes("÷")){
        divCalc();
    }
}

// function sumCalc(){
//        if ((secLine.textContent.length - 1) == + || secLine.textContent.includes dos ++){
//          return "ERROR, press CLEAR";
//        }
//     return 4 + 1;
// }
// function subsCalc(){
//        if ((secLine.textContent.length - 1) == - || secLine.textContent.includes dos --){
//          return "ERROR, press CLEAR";
//        }
//     return 4 - 1;
// }
// function multCalc(){
//        if ((secLine.textContent.length - 1) == x || secLine.textContent.includes dos xx){
//          return "ERROR, press CLEAR";
//        }
//     return 4 * 1;
// }
// function divCalc(){
//     if ((secLine.textContent.length - 1) == ÷ || secLine.textContent.includes dos ÷÷){
//        firstLine.textContent = "press CLEAR";
//        return "INPUT ERROR";
//     }
//     else if (detras del ÷ == 0){
//        firstLine.textContent = "press CLEAR";
//        return "MATH ERROR";
//     }
//     return 4 / 1;
// }