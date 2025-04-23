const userInput = document.querySelector('#userlisttodo');
const button = document.querySelector("#addbtn");
const ul = document.querySelector("ul");
const refresh = document.querySelector('#refreshinput');
const search = document.querySelector('#searchinput');

button.addEventListener("click", () => {
    let inputText = userInput.value.trim();


    if (inputText === "") {
        alert("Please enter something before adding a task!");
        return;
    }

    let li = document.createElement("li");
    li.classList.add("ulTodoList");

    let span = document.createElement("span");
    span.innerText = inputText;
    span.classList.add("span");

    let buttonDelete = document.createElement("button");
    buttonDelete.innerHTML = "<i class='fa-solid fa-trash'></i>";
    buttonDelete.addEventListener("click", () => {
        li.remove();
    });
    buttonDelete.classList.add("deletebut");

        let buttonEdit = document.createElement("button");
        buttonEdit.innerHTML = "<i class='fa-solid fa-pen-to-square'></i>";
        buttonEdit.addEventListener("click", () => {
            let currentText = span.innerText;
            let updateText = prompt("Edit your task:" , currentText);
        if(updateText !== null && updateText.trim() !== "" ){
            span.innerText = updateText;
        }
    });
    buttonEdit.classList.add("editbutton");

let grpButton = document.createElement("div");
grpButton.append(buttonEdit, buttonDelete)
li.append(span, grpButton);
ul.append(li);

userInput.value = "";

});

search.addEventListener('input' , () => {
    const matchInput =  search.value.toLowerCase().trim(); 
    const ulListItem = document.querySelectorAll('li');
    ulListItem.forEach(ser => {
    const userListItem  =  ser.textContent.toLocaleLowerCase().trim();
    ser.style.display = userListItem.includes(matchInput) ? "flex" : "none";
});
});

refresh.addEventListener('click', () => {
    userInput.value = "";
    search.value ="";
    ul.innerText = "";
});













