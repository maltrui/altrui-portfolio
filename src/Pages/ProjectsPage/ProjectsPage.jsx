import ProjectCard from "../../Components/ProjectCard/ProjectCard"

export default function ProjectsPage({projects}){

    return(
        <>
            {projects.map(project => <ProjectCard key={project.name} project={project}/>)}
        </>
    )
}