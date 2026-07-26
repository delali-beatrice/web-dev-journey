export function deleteButton (li) {
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("deleteBtn")

    deleteBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // don't trigger the li click
    li.remove();
    });

    return deleteBtn;
}