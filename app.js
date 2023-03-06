const form2 = document.querySelector("#form2");
const pendent = document.querySelector("#pendent");
const completed = document.querySelector("#completed");
const pendentContainer = document.querySelector("#pendent-container>h2");
const completedContainer = document.querySelector("#completed-container>h2");
console.log(completedContainer);

if (pendent.classList.contains('list')) {
    pendentContainer.style.borderRadius = "10px 10px 0 0";
}

pendentContainer.addEventListener('click', () => {
    if (completed.classList.contains('list')) {
        completed.classList.remove('list');
        completedContainer.style.borderRadius = "10px 10px 10px 10px" 
    }

    if (!pendent.classList.contains("list")) {
        pendent.classList.add("list");
        pendentContainer.style.borderRadius = "10px 10px 0 0";
    }
});

completedContainer.addEventListener('click', () => {
    if (pendent.classList.contains('list')) {
        pendent.classList.remove('list');
        pendentContainer.style.borderRadius = "10px 10px 10px 10px";
    }

    if (!completed.classList.contains("list")) {
        completed.classList.add("list");
        completedContainer.style.borderRadius = "10px 10px 0 0";
    } else {
        completed.classList.remove("list");
        pendent.classList.add('list');
    }
});

form2.addEventListener('submit', (event) => {
    event.preventDefault();
    const newTaskInput2 = document.querySelector("#newtask2");
    const newTask2 = newTaskInput2.value.trim();

    if (newTaskInput2) {
        const p = document.createElement("p");
        const label = document.createElement("label");
        const input = document.createElement("input");
        const button = document.createElement("button");

        button.textContent = "X";
        input.setAttribute("type", "checkbox");
        input.addEventListener('click', () => {
            if (input.checked) {
                let garbageElement = p;
                p.remove();
                completed.append(garbageElement);
            } else {
                let garbageElement = p;
                p.remove();
                pendent.append(p);
            };
        });
        p.appendChild(label);
        label.append(input, newTask2, button);
        console.log(p);
        
        button.addEventListener('click', () => {
            let garbageElement = p;
            const undo = document.createElement("button");
            undo.setAttribute("class", "undo-btn")
            undo.textContent = "Undo";
            undo.addEventListener('click', () => {
                undo.replaceWith(garbageElement);
            });
            p.replaceWith(undo);
            setTimeout(() => {
                undo.remove();
            }, 5000)
        });

        pendent.append(p)
        newTaskInput2.value = "";
    };
});
