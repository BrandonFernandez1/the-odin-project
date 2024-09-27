import projectModule from "./projects";

const todoModule = (function() {    
    const initialize = () => {
        addItem();
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
                todoTitle.classList.add('input-error');
                console.log('title error');
            } else {
                todoTitle.classList.remove('input-error');
            }

            if (todoPriority === '') {
                isValid = false;
                todoPriority.classList.add('input-error');
                console.log('priority error')
            } else {
                todoPriority.classList.remove('input-error');
            }

            if (todoDueDate.value === '' || isNaN(new Date(todoDueDate.value))) {
                isValid = false;
                todoDueDate.classList.add('input-error');
                console.log('due date error');
            } else {
                todoDueDate.classList.remove('input-error');
            }

            if (todoDescription.value === '') {
                isValid = false;
                todoDescription.classList.add('input-error');
                console.log('description error');
            } else {
                todoDescription.classList.remove('input-error');
            }
            return isValid;
        }

        const appendTodo = (item, index) => {
            const accordionParent = document.querySelector('.accordion');

            const accordionItem = document.createElement('div');
            accordionItem.classList.add('accordion-item');
            accordionParent.appendChild(accordionItem);

            const accordionHeader = document.createElement('h2');
            accordionHeader.classList.add('accordion-header');
            accordionHeader.id = `header-${index}`;
            accordionItem.appendChild(accordionHeader);

            const accordionButton = document.createElement('button');
            accordionButton.classList.add('accordion-button');
            accordionButton.setAttribute('type', 'button');
            accordionButton.setAttribute('data-bs-toggle', 'collapse');
            accordionButton.setAttribute('data-bs-target', `collapse-${index}`);
            accordionButton.setAttribute('aria-expanded', 'true');
            accordionButton.setAttribute('aria-controls', `collapse-${index}`);
            accordionButton.textContent = item.title;
            accordionHeader.appendChild(accordionButton);

            const accordionBodyContainer = document.createElement('div');
            accordionBodyContainer.id = `collapse-${index}`;
            accordionBodyContainer.classList.add('accordion-collapse', 'collapse');
            accordionBodyContainer.setAttribute('aria-labelledby', `heading-${index}`);
            accordionItem.appendChild(accordionBodyContainer);

            const accordionBody = document.createElement('div');
            accordionBody.classList.add('accordion-body');
            accordionBodyContainer.appendChild(accordionBody);

            const priorityHeader = document.createElement('div');
            priorityHeader.textContent = 'Priority';
            priorityHeader.classList.add('todo-header');
            accordionBody.appendChild(priorityHeader);

            const dueDateHeader = document.createElement('div');
            dueDateHeader.textContent = 'Due Date';
            dueDateHeader.classList.add('todo-header');
            accordionBody.appendChild(dueDateHeader);

            const descriptionHeader = document.createElement('div');
            descriptionHeader.textContent = 'Description';
            descriptionHeader.classList.add('todo-header');
            accordionBody.appendChild(descriptionHeader);

            const priority = document.createElement('div');
            priority.textContent = item.priority;
            priority.classList.add('todo-priority', item.priority);
            accordionBody.appendChild(priority);

            const dueDate = document.createElement('div');
            dueDate.classList.add('todo-due-date');
            dueDate.textContent = item.dueDate;
            accordionBody.appendChild(dueDate);
            
            const description = document.createElement('div');
            description.classList.add('todo-description');
            description.textContent = item.description;
            accordionBody.appendChild(description);

            return accordionParent;
        }

        confirmButton.addEventListener('click', () => {
            if (validateInputs()) {
                let projects = projectModule.getProjects();
                console.log(projects);
                console.log(typeof(projects));
                //Need a way to determine which project is selected to push new todo list items to...
                const todoItem = createTodo(todoTitle.value, todoPriority.value, todoDueDate.value, todoDescription.value);
                // projects.todos.push(todoItem);
                // index = projects.todos.length - 1;
                // const todoElements = appendTodo(todoItem, index);
                // document.body.appendChild(todoElements);
                console.log('hello');
            } else console.log('goodbye');
        })
    }



    return { initialize };
})();

export default todoModule;

let projects = projectModule.getProjects();
console.log(projects);