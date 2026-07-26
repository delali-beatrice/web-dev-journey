import {completeButton} from "./completeBtn.js";
import {deleteButton} from "./deleteBtn.js";

const input = document.getElementById("task-input");
const addBtn = document.getElementById("add-task-btn");
const list = document.getElementById("task-list");

addBtn.addEventListener("click", () => {
    const text = input.value.trim();
    if (text === "") {
        alert("Please input a task")
        return
    } else {

        // create li item
        const li = document.createElement("li");
        li.textContent = text;
        
        //  completed button
        const completeBtn = completeButton(li);

        // delete button
        const deleteBtn = deleteButton(li);

        li.appendChild(completeBtn);

        li.appendChild(deleteBtn);

        list.appendChild(li);

        input.value = "";
    }
});