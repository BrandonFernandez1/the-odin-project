import './style.css';
import projectModule from './js-modules/projects.js';
import todoModule from './js-modules/todo.js';

document.addEventListener('DOMContentLoaded', () => {
    projectModule.initialize();
    todoModule.initialize(projectModule.projects);
})