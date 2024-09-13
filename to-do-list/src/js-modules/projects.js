import plus from '../images/svgs/plus.svg';
import edit from '../images/svgs/edit.svg';
import trash from '../images/svgs/trash.svg';

const projectModule = (function() {
    const initialize = () => {
        addPlusIcon();
        addProject();
    }

    const addPlusIcon = () => {
        const projectHeader = document.querySelector('.project-header');
        const plusSvg = document.createElement('img');
        plusSvg.classList.add('icon');
        plusSvg.src = plus;
        plusSvg.id = 'create-new-project';
        projectHeader.appendChild(plusSvg);
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
            document.querySelector('#project-dialog-title').textContent = 'Create a new project';
            confirmButton.textContent = 'Create';
            projectDialogElement.showModal();
        })

        confirmButton.addEventListener('click', () => {
            const projectName = nameInputElement.value;

            if (projectName) {
                let index;
                if (!editMode) {
                    const newProject = createProject(projectName);
                    projects.push(newProject);
                    index = projects.length - 1;
                    appendProject(newProject, index);
                } else {
                    index = projects.length - 1;
                    editProject(projectName, index);
                }
                
                projectDialogElement.close();
                nameInputElement.value = '';
            }
        })

        cancelButton.addEventListener('click', () => {
            projectDialogElement.close();
            nameInputElement.value = '';
        })

        const appendProject = (project, index) => {
            const projectSection = document.querySelector('.projects');
            const projectList = document.querySelector('.project-list');
            projectSection.appendChild(projectList);
            
            const projectItem = document.createElement('li');
            projectItem.textContent = project.name;
            //Index used here to link to position in projects array
            projectItem.setAttribute('data-index', index);
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
                editMode = true;
                document.querySelector('#project-dialog-title').textContent = 'Edit Project Name';
                confirmButton.textContent = 'Edit';
                projectDialogElement.showModal();
            })

            deleteIcon.addEventListener('click', () => {
                projectItem.remove();
                projects.splice(index, 1);
            })
        }

        const editProject = (newName, index) => {
            const nameElement = document.querySelector(`[data-index="${index}"]`);
            projects[index].name = newName;
            //Only changing the text node! .textContent will replace all child nodes.
            nameElement.childNodes[0].nodeValue = newName;
        }
    }

    return { initialize };
})();

export default projectModule;