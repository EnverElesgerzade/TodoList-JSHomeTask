let inp = document.querySelector("#addInp");
let btn = document.querySelector("#addBtn");
let count = document.querySelector("#count");
let todoList = document.createElement("div");
document.body.append(todoList);
btn.addEventListener("click", () => {
    let inpvalue = inp.value;
    inp.value = "";

    let newInp = document.createElement("input");
    newInp.value = inpvalue;
    newInp.disabled = true;

newInp.style.width = "330px";
newInp.style.height = "30px";

    let delBtn = document.createElement("button");
    let updBtn = document.createElement("button");
    let box = document.createElement("div");
box.style.gap = "10px";
box.style.display = "flex";
  delBtn.textContent = "🗑️";
updBtn.textContent = "✏️";

    box.append(newInp, delBtn, updBtn);
    todoList.append(box);
    count.textContent = todoList.children.length;

    delBtn.addEventListener("click", () => {
        box.remove();
            count.textContent = todoList.children.length;

    });

    updBtn.addEventListener("click", () => {
        if (newInp.disabled) {
            newInp.disabled = false;
            newInp.focus();
            updBtn.textContent = "Save";
        } else {
            newInp.disabled = true;
            updBtn.textContent = "Update";
        }
    });
});

