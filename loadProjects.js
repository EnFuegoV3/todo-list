import { projects } from "./main";

export

function loadProject() {
    for(let n = 0; n < projects.length; n++) {
        const proj = document.createElement('div');
        const projBtn = document.createElement('button')
        const view = document.querySelector('.view');
        const projList = document.querySelector('.project-list');
        let name = projects[n];
        proj.classList.add('project-view');
        proj.innerHTML = `
                <h3><input type="text" value="${name}" class="project-name"></h3>
                <button class="add-todo">&plus; Add new Todo</button>
            `
        view.appendChild(proj);
    
        projBtn.classList.add('project');
        projBtn.textContent = name;
        projList.appendChild(projBtn);
        console.log([n]);
        console.log(projects);
    }
}




