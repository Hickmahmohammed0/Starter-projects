const addTaskBtn = document.getElementById('addTaskBtn');
const tasksContainer = document.querySelector('.tasks-container');
const taskCountDisplay = document.querySelector('.task-count');

// Function to create a new task
function createTask(taskName = "New Task") {
    // Task container
    const taskItem = document.createElement('div');
    taskItem.classList.add('task-item');

    // Task title
    const taskTitle = document.createElement('span');
    taskTitle.classList.add('task-title');
    taskTitle.textContent = taskName;

    // Buttons container
    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('task-buttons');

    // Edit button
    const editBtn = document.createElement('button');
    editBtn.classList.add('edit-btn');
    editBtn.textContent = 'Edit';

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = 'Delete';

    // Append buttons to container
    buttonsContainer.appendChild(editBtn);
    buttonsContainer.appendChild(deleteBtn);

    // Append title and buttons to task item
    taskItem.appendChild(taskTitle);
    taskItem.appendChild(buttonsContainer);

    // Append task to the main container
    tasksContainer.appendChild(taskItem);

    // Animate task appearance
    setTimeout(() => {
        taskItem.style.opacity = '1';
        taskItem.style.transform = 'translateY(0)';
    }, 50);

    // Edit task functionality
    editBtn.addEventListener('click', () => {
        const newTitle = prompt("Edit your task:", taskTitle.textContent);
        if (newTitle) {
            taskTitle.textContent = newTitle;
        }
    });

    // Delete task functionality
    deleteBtn.addEventListener('click', () => {
        taskItem.style.opacity = '0';
        taskItem.style.transform = 'translateX(100%)';
        setTimeout(() => {
            taskItem.remove();
            updateTaskCount();
        }, 300); // Wait for animation
    });

    // Update task count
    updateTaskCount();
}

// Update the task count
function updateTaskCount() {
    const allTasks = document.querySelectorAll('.task-item').length;
    taskCountDisplay.textContent = allTasks;
}

// Add a new task on button click
addTaskBtn.addEventListener('click', () => {
    const taskName = prompt("Enter task name:");
    if (taskName) {
        createTask(taskName);
    }
});
   