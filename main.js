import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { newProject } from './newProject';
import { loadProject } from './loadProjects';

export const projects = JSON.parse(localStorage.getItem("project")) || [];




const addProject = document.querySelector('.add-project');


addProject.addEventListener('click', () => {

    newProject();
    
});



loadProject();
// console.log(projects);