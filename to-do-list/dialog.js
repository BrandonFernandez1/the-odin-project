import './style.css';
import plus from './images/svgs/plus.svg';
import edit from './images/svgs/edit.svg';
import trash from './images/svgs/trash.svg';

const projectHeader = document.querySelector('.project-header');
const plusSvg = document.createElement('img');
plusSvg.classList.add('icon');
plusSvg.src = plus;
plusSvg.id = 'open-project-dialog';
projectHeader.appendChild(plusSvg);

const projectModule = (function() {
    const initialize = () => {
        addProject();
    }

    const projects = [];

    const createProject = (name, todos = []) => {
        return { name, todos };
    } 

    const addProject = () => {
        const createNewProjectButton = document.querySelector('#create-new-project');
        const projectDialogElement = document.querySelector('#project-dialog');
        const nameInputElement = document.querySelector('#name-input');

        const confirmButton = document.querySelector('#project-confirm-button');
        const cancelButton = document.querySelector('#project-cancel-button');

        let editMode = false;

        createNewProjectButton.addEventListener('click', () => {
            editMode = false;
            confirmButton.textContent = 'Create';
            projectDialogElement.showModal();
        })

        confirmButton.addEventListener('click', () => {
            const projectName = nameInputElement.value;

            if (projectName) {
                const index = projects.length - 1;
                
                if (!editMode) {
                    const newProject = createProject(projectName);
                    projects.push(newProject);
                    appendProject(newProject, index);
                } else {
                    projects[index].name = projectName;
                    const nameElement = document.querySelector(`[data-index="${index}"]`);
                    nameElement.textContent = projectName;
                }
            }
        })

        const appendProject = (project, index) => {
            const projectSection = document.querySelector('.projects');
            const projectList = document.querySelector('.project-list');
            projectSection.appendChild(projectList);
            
            const projectItem = document.createElement('li');
            projectItem.textContent = project.name;
            projectList.appendChild(projectItem);

            const iconContainer = document.createElement('div');
            projectItem.appendChild(iconContainer);

            const editIcon = document.createElement('img');
            editIcon.classList.add('icon')
            editIcon.setAttribute('data-index', index);
            editIcon.src = edit;
            iconContainer.appendChild(editIcon);

            const deleteIcon = document.createElement('img');
            deleteIcon.classList.add('icon');
            deleteIcon.setAttribute('data-index', index);
            deleteIcon.src = trash;
            iconContainer.appendChild(deleteIcon);

            editIcon.addEventListener('click', () => {
                editMode = true;
                confirmButton.textContent = 'Edit';
                projectDialogElement.showModal();
            })
        }
    }

    return { initialize };
})();

document.addEventListener('DOMContentLoaded', () => {
    sidebar.initialize();
})