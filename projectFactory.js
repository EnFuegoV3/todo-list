import { projects } from "./main"

export

const projectFactory = (name) => {
    
    projects.push(name);
    localStorage.setItem("project", JSON.stringify(projects));
    return {name}
}