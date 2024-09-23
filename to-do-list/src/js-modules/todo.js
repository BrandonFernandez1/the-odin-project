const todoModule = (function() {
    let projects;
    
    const initialize = (projectArray) => {
        projects = projectArray;
    }

    const createTodo = (title, priority, dueDate, description) => {
        return { title, priority, dueDate, description };
    }

    const addItem = () => {
        const todoDialog = document.querySelector('#todo-dialog');

        const todoTitle = document.querySelector('#title');
        const todoPriority = document.querySelector('#priority');
        const todoDueDate = document.querySelector('#due-date');
        const todoDescription = document.querySelector('textarea');
        const confirmButton = document.querySelector('#confirm-todo');
        const cancelButton = document.querySelector('#cancel-todo');

        const validateInputs = () => {
            let isValid = true;

            if (todoTitle.value.trim() === '') {
                isValid = false;
                todoTitle.classList.add('input-error')
            } else {
                todoTitle.classList.remove('input-error');
            }

            if (todoPriority === '') {
                isValid = false;
                todoPriority.classList.add('input-error');
            } else {
                todoPriority.classList.remove('input-error');
            }

            if (todoDueDate.value === '' || isNaN(new Date(todoDueDate).getTime())) {
                isValid = false;
                todoDueDate.classList.add('input-error');
            } else {
                todoDueDate.classList.remove('input-error');
            }

            if (todoDescription.value === '') {
                isValid = false;
                todoDescription.classList.add('input-error');
            } else {
                todoDescription.classList.remove('input-error');
            }
            return isValid;
        }

        const appendTodo = (item) => {
            const itemContainer = document.createElement('div');
            itemContainer.classList.add('todo-item');

            const titleElement = document.createElement('div');
            titleElement.textContent = item.title;
        }

        confirmButton.addEventListener('click', () => {
            if (validateInputs()) {
                const todoItem = createTodo(todoTitle.value, todoPriority.value, todoDueDate.value, todoDescription.value);
                projects.todos.push(todoItem);
                //appendItem(todoItem);
            }
        })
    }



    return { initialize }
})

export default todoModule;