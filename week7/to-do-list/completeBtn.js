export function completeButton(li) {
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

    return completeBtn;
}