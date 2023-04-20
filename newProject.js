import { projectFactory } from "./projectFactory";
import { projects } from "./main";

export

function newProject() {
    const proj = document.createElement('div');
    const projBtn = document.createElement('button')
    const view = document.querySelector('.view');
    const projList = document.querySelector('.project-list');
    let name = prompt("Enter Project Name");
    const project = projectFactory(name);
    
    
    proj.classList.add('project-view');
    proj.innerHTML = `
                <h3><input type="text" value="${name}" class="project-name"></h3>
                <button class="add-todo">&plus; Add new Todo</button>
            `
    view.appendChild(proj);
    
    projBtn.classList.add('project');
    projBtn.textContent = `${name}`
    projList.appendChild(projBtn);
    console.log(projects);
}


