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

const sidebar = (function() {
    const projects = [];

    const initialize = () => {
        addProject();
    }

    const createProject = (name, todos = []) => {
        return { name, todos };
    }

    const addProject = () => {
        const openDialog = document.querySelector('#open-project-dialog');
        const projectDialogElement = document.querySelector('#project-dialog');
        const projectInput = document.querySelector('#project-input');

        const confirmButton = document.querySelector('#create-project');
        const cancelButton = document.querySelector('#cancel-project');

        openDialog.addEventListener('click', () => {
            projectDialogElement.showModal();

        })

        confirmButton.addEventListener('click', () => {
            const projectName = projectInput.value;
            
            if (projectName) {
                const newProject = createProject(projectName);
                projects.push(newProject);
                appendProject(newProject);

                //TODO: editProject function
                // if (isEditMode == false) appendProject(newProject);
                // else editProject(newProject);
            }
            
            projectInput.value = '';
            projectDialogElement.close();
            console.log(projects);
        });

        cancelButton.addEventListener('click', () => {
            projectDialogElement.close();
            projectInput.value = '';
        })

        const appendProject = (project) => {
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
            editIcon.src = edit;
            iconContainer.appendChild(editIcon);

            const deleteIcon = document.createElement('img');
            deleteIcon.classList.add('icon');
            deleteIcon.src = trash;
            iconContainer.appendChild(deleteIcon);

            editIcon.addEventListener('click', () => {
                //TODO: Open the modal but don't append, only change the text content.
            })
        }
    }

    return {initialize};
})();

document.addEventListener('DOMContentLoaded', () => {
    sidebar.initialize();
    console.log(sidebar.projects);
})

