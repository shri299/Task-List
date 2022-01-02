//define UI variables

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearbtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//load all event listners

loadEventListners();

function loadEventListners() {
    //add task event
    form.addEventListener('submit',addTask);
    //remove task event
    taskList.addEventListener('click',removeTask);
    //clear task event
    clearbtn.addEventListener('click',clearTasks);
}

function addTask(e) {
    if (taskInput.value==='') {
        alert('Add a task');
    }
    //create li
    const li = document.createElement('li');
    li.className='collection-item';
    //create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    //create link element
    const link = document.createElement('a');
    link.className=' delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    //append link to li
    li.appendChild(link);
    //append li to ul
    taskList.appendChild(li);

    //clear input
    taskInput.value='';
    e.preventDefault();
}

function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm("Are you sure???")) {
            e.target.parentElement.parentElement.remove();
        }
    }
}


function clearTasks(e) {
    //1st method
    //taskList.innerHTML = '';
    //2nd method
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
}