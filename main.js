const tasksList = [];
const doneTasks = [];

const form = document.querySelector('form');
const ulDone = document.querySelector('.done-tasks ul');
const ul = document.querySelector('.tasks ul');
const inputTask = document.querySelector('.input');
const inputSearch = document.querySelector('.search');
const tasksNumber = document.querySelector('h3 span');
const tasksListItems = document.getElementsByClassName('task');
const task = document.createElement('li');


const addTask = (e) => {
    e.preventDefault();
    const titleTask = inputTask.value;
    if (titleTask === "") return;
    let task = document.createElement('li');
    task.className = 'task';
    task.innerHTML = titleTask + '<button type="button" class="btn btn-light btn-sm not-focusable">usuń</button>';
    tasksList.push(task)
    renderList();
    ul.appendChild(task);
    inputTask.value = "";
    tasksNumber.textContent = tasksListItems.length;
    task.querySelector('button').addEventListener('click', removeTask);
    return tasksList;
}


const removeTask = (e) => {
    e.target.parentNode.remove();
    const index = e.target.parentNode.dataset.key;
    tasksList.splice(index, 1);
    // tasksList[index].style.textDecoration = 'line-through';
    tasksNumber.textContent = tasksListItems.length;
    renderList();
    doneTasks.push(task[index]);
    ulDone.appendChild(task);
    const titleTask = task.innerHTML;
    task.className = "done-task";

    task.innerHTML = index.value + '<button type="button" class="btn btn-light btn-sm not-focusable">usuń</button>';

}

const renderList = () => {
    ul.textContent = "";
    tasksList.forEach((singleTask, key) => {
        singleTask.dataset.key = key;
        ul.appendChild(singleTask);

    })
}

const searchTask = (e) => {
    const searchText = e.target.value.toLowerCase();
    const liElements = document.querySelectorAll('li');
    // let tasks = [...liElements]
    // console.log(tasks);
    tasks = tasksList.filter(li => li.textContent.toLowerCase().includes(searchText));
    ul.textContent = "";
    tasks.forEach(li => ul.appendChild(li))
    tasksNumber.textContent = tasksListItems.length;

}

inputSearch.addEventListener('input', searchTask);
form.addEventListener('submit', addTask)