const userinput = document.querySelector('#userlisttodo');
const button = document.querySelector("button");
const ul = document.querySelector("ul");
const refresh = document.querySelector('#refresh');

button.addEventListener("click", () => {
    let inputText = userinput.value.trim();


    if (inputText === "") {
        alert("Please enter something before adding a task!");
        return;
    }

    let li = document.createElement("li");
    li.classList.add("ulTodoList");

    let span = document.createElement("span");
    span.innerText = inputText;


    let buttonDelete = document.createElement("button");
    buttonDelete.innerText = "Delete";
    buttonDelete.addEventListener("click", () => {
        li.remove();
    });
    buttonDelete.classList.add("deletebut");

    let buttonEdit = document.createElement("button");
    buttonEdit.innerText = "Edit";
    // buttonEdit.addEventListener("click", () => {
    //     li.remove();
    // });
    buttonEdit.classList.add("editbutton");

    let grpButton = document.createElement("div");
    grpButton.append(buttonEdit , buttonDelete)
    li.append(span , grpButton);
    ul.append(li);
});

refresh.addEventListener('click' , () => {
    userinput.value = "";
    ul.innerText = "";
});













