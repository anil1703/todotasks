let userInput = document.getElementById("userInputEvent");
let addButton = document.getElementById("addBtn");
let ulCont = document.getElementById("uListContainer");

function saveData() {
    localStorage.setItem("data", ulCont.innerHTML);
}

function retriveData() {
    ulCont.innerHTML = localStorage.getItem("data");
}

function checkedfunc(checkBoxName, labelId) {
    let check = document.getElementById(checkBoxName);
    let mark = document.getElementById(labelId);
    check.onclick = function() {
        mark.classList.toggle("check-mark");
        saveData();
    };

}

function removeTask(insideDiv2, checkList) {
    insideDiv2.onclick = function() {
        let removeList = document.getElementById(checkList);
        ulCont.removeChild(removeList);
        saveData();
    };


}

function addEventsToTask() {
    let userValue = userInput.value;
    let random = Math.ceil((Math.random() * 100));
    let checkBoxName = userValue + random;
    let checkList = "list" + random;
    let labelId = "label" + random;

    let liElement = document.createElement("li");
    liElement.id = checkList;
    liElement.classList.add("mb-4");
    ulCont.appendChild(liElement);

    let div1Ele = document.createElement("div");
    div1Ele.classList.add("d-flex", "flex-row");
    liElement.appendChild(div1Ele);

    let inputEle = document.createElement("input");
    inputEle.type = "checkbox";
    inputEle.classList.add("checkbox_style");
    inputEle.id = checkBoxName;
    div1Ele.appendChild(inputEle);

    let taskBoxDiv = document.createElement("div");
    taskBoxDiv.classList.add("taskBox");
    div1Ele.appendChild(taskBoxDiv);

    let div2Ele = document.createElement("div");
    div2Ele.classList.add("d-flex", "flex-row");
    taskBoxDiv.appendChild(div2Ele);

    let insideDiv1 = document.createElement("div");
    div2Ele.appendChild(insideDiv1);

    let labelEl = document.createElement("label");
    labelEl.htmlFor = checkBoxName;
    labelEl.id = labelId;
    labelEl.textContent = userValue;
    insideDiv1.appendChild(labelEl);

    let insideDiv2 = document.createElement("div");
    insideDiv2.classList.add("delete_icon");
    div2Ele.appendChild(insideDiv2);

    let iElement = document.createElement("i");
    iElement.classList.add("fa-solid", "fa-trash");
    insideDiv2.appendChild(iElement);


    checkedfunc(checkBoxName, labelId);
    removeTask(insideDiv2, checkList);
    saveData();
}
addButton.onclick = function() {
    if (userInput.value === "") {
        alert("You must write an Event...");
    } else {
        addEventsToTask();
        userInput.value = "";
    }
};

retriveData();