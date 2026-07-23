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
        const completeBtn = document.createElement("button");
        completeBtn.classList.add("completeBtn");
        completeBtn.textContent = "Mark as Complete";
        completeBtn.addEventListener("click", () => {
            
            li.classList.toggle("done");

            if (li.classList.contains("done")) {
                completeBtn.textContent = "Completed";
            } else {
                completeBtn.textContent = "Mark as Complete";
            }
        });

        // delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("deleteBtn")
        deleteBtn.addEventListener("click", (e) => {
            e.stopPropagation(); // don't trigger the li click
            li.remove();
        });

        li.appendChild(completeBtn);

        li.appendChild(deleteBtn);

        list.appendChild(li);

        input.value = "";
    }
});