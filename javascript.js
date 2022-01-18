const firstLine = document.getElementById("first-line");
const secLine = document.getElementById("second-line");
const mainBtns = document.getElementById("main-buttons");
const clearBtn = mainBtns.firstElementChild
const delBtn = mainBtns.lastElementChild;
const opBtns = Array.from(document.getElementById("operation-buttons").children);

clearBtn.addEventListener("click", clearF);
delBtn.addEventListener("click", delF);


opBtns.forEach(btn => {btn.addEventListener("click", printC);});


function clearF(){
    firstLine.textContent = 0;
    secLine.textContent = 0;
}

function delF(){
    if(secLine.textContent != 0){
        let arr = [];
        for(let i = 0; i < secLine.textContent.length; i++){
            arr.push(secLine.textContent[i]);
        }
        arr.pop();
        let result = arr.join("");
        secLine.textContent = result;
    }
}

function printC(e){
    secLine.textContent += e.target.textContent;
}