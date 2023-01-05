import ProjectCard from "../../Components/ProjectCard/ProjectCard"
import proj2Home from "../../Imgs/Project2HomePage.png"
import proj2Posts from "../../Imgs/Project2Posts.png"
export default function ProjectsPage(){
    let testProject = {
        name: 'test name',
        about: 'test description',
        imgs: [proj2Home, proj2Posts],
        url: 'https://cryptic-depths-80147.herokuapp.com/',
        gitHub: 'https://github.com/maltrui/express-Project2-Dogs'
    }
    return(
        <>
            <ProjectCard project={testProject}/>
        </>
    )
}