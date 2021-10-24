let todo=[];

function handleAdd(){
    // retrive input text
    const text = document.getElementById("input").value;
    if(!text){
        alert("type something!");
        return;
    }
    const payload = {
        title: text,
        status: false
    };
    todo.push(payload);
    localStorage.setItem("todos",JSON.stringify(todo));
    // update the UI
    const container = document.getElementById("task-list");
    displayTodos(todo,container);
}

function displayTodos(todos, container){
    let ul = document.createElement('ul');
    container.innerHTML = "";
    for(let i=0; i<todos.length; i++)
    {
        let li = document.createElement('li');
        li.textContent = `${todos[i].title}-${todos[i].status ?"DONE": "PENDING"}`;
        ul.append(li);
    }
    container.append(ul);
}

function handleLoad(){
    const data = JSON.parse(localStorage.getItem("todos"));
    const container = document.getElementById("task-list");
    if(data)
    {
        todo=data;
        displayTodos(data, container);
    }
}

window.addEventListener("load", function(){
    const addbtn = document.getElementById('add-btn');
    addbtn.addEventListener("click",handleAdd);
    const removeBtn = document.getElementById("remove-btn");
    removeBtn.addEventListener("click",handleRemove);

    handleLoad();
})

function handleRemove(){
    todo=[];
    localStorage.setItem("todos",JSON.stringify(todo));
    const container = document.getElementById('task-list');
    container.innerHTML="";
}