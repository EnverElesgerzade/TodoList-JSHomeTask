// let inp = document.querySelector("#addInp");
// let btn = document.querySelector("#addBtn");
// let count = document.querySelector("#count");
// let todoList = document.createElement("div");
// document.body.append(todoList);
// btn.addEventListener("click", () => {
//     let inpvalue = inp.value;
//     inp.value = "";

//     let newInp = document.createElement("input");
//     newInp.value = inpvalue;
//     newInp.disabled = true;

// newInp.style.width = "330px";
// newInp.style.height = "30px";

//     let delBtn = document.createElement("button");
//     let updBtn = document.createElement("button");
//     let box = document.createElement("div");
// box.style.gap = "10px";
// box.style.display = "flex";
//   delBtn.textContent = "🗑️";
// updBtn.textContent = "✏️";

//     box.append(newInp, delBtn, updBtn);
    // todoList.append(box);
//     count.textContent = todoList.children.length;

//     delBtn.addEventListener("click", () => {
//         box.remove();
//             count.textContent = todoList.children.length;

//     });

//     updBtn.addEventListener("click", () => {
//         if (newInp.disabled) {
//             newInp.disabled = false;
//             newInp.focus();
//             updBtn.textContent = "Save";
//         } else {
//             newInp.disabled = true;
//             updBtn.textContent = "Update";
//         }
//     });
// });






let inp = document.querySelector("#addInp");
let btn = document.querySelector("#addBtn");
let count = document.querySelector("#count");

btn.addEventListener("click", () => {
    let inpvalue = inp.value.trim();

    if (inpvalue === "") {
        return;
    }

    inp.value = "";

    let delBtn = document.createElement("button");
    let updBtn = document.createElement("button");
    let newInp = document.createElement("input");
    let box = document.createElement("div");

    newInp.value = inpvalue;
    newInp.disabled = true;

    delBtn.textContent = "🗑️";
    updBtn.textContent = "✏️";

    box.append(newInp, delBtn, updBtn);
    document.body.append(box);

    
    let todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.push(inpvalue);
    localStorage.setItem("todos", JSON.stringify(todos));

    count.textContent = todos.length;

    delBtn.addEventListener("click", () => {
        box.remove();

        let todos = JSON.parse(localStorage.getItem("todos")) || [];
        todos.splice(todos.indexOf(newInp.value), 1);

        localStorage.setItem("todos", JSON.stringify(todos));
        count.textContent = todos.length;
    });

    updBtn.addEventListener("click", () => {
        if (newInp.disabled) {
            newInp.disabled = false;
            newInp.focus();
            updBtn.textContent = "💾";
        } else {
            if (newInp.value.trim() === "") {
                return;
            }

            newInp.disabled = true;
            updBtn.textContent = "✏️";

            let todos = JSON.parse(localStorage.getItem("todos")) || [];
            let index = todos.indexOf(inpvalue);

            if (index !== -1) {
                todos[index] = newInp.value;
                localStorage.setItem("todos", JSON.stringify(todos));
            }

            inpvalue = newInp.value;
        }
    });
});




// let inp = document.querySelector("#addInp");
// let btn = document.querySelector("#addBtn");
// let count = document.querySelector("#count");

// let todos = JSON.parse(localStorage.getItem("todos")) || [];

// function showTodos() {
//     document.querySelectorAll(".todo").forEach(box => box.remove());

//     todos.forEach((item, index) => {
//         let delBtn = document.createElement("button");
//         let updBtn = document.createElement("button");
//         let newInp = document.createElement("input");
//         let box = document.createElement("div");

//         box.className = "todo";

//         newInp.value = item;
//         newInp.disabled = true;

//         delBtn.textContent = "🗑️";
//         updBtn.textContent = "✏️";

//         box.append(newInp, delBtn, updBtn);
//         document.body.append(box);

//         delBtn.addEventListener("click", () => {
//             todos.splice(index, 1);
//             localStorage.setItem("todos", JSON.stringify(todos));
//             showTodos();
//         });

//         updBtn.addEventListener("click", () => {
//             if (newInp.disabled) {
//                 newInp.disabled = false;
//                 newInp.focus();
//                 updBtn.textContent = "💾";
//             } else {
//                 if (newInp.value.trim() === "") {
//                     return;
//                 }

//                 todos[index] = newInp.value.trim();
//                 localStorage.setItem("todos", JSON.stringify(todos));

//                 newInp.disabled = true;
//                 updBtn.textContent = "✏️";
//             }
//         });
//     });

//     count.textContent = todos.length;
// }

// btn.addEventListener("click", () => {
//     let inpvalue = inp.value.trim();

//     if (inpvalue === "") {
//         return;
//     }

//     todos.push(inpvalue);

//     localStorage.setItem("todos", JSON.stringify(todos));

//     inp.value = "";

//     showTodos();
// });

// // Sehife acilanda evvelki TODO-lari goster
// showTodos();
