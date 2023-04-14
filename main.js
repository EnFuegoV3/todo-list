import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { newProject } from './newProject';


const projects = []


const addProject = document.querySelector('.add-project');


addProject.addEventListener('click', () => {
    newProject();
});