import {Link} from "react-router-dom"

export default function ProjectCard({project}){

    return(
        <>
            <ul>
                <li>{project.name}</li>
                <li>{project.about}</li>
                {project.imgs.map(img => <li key={img}><img src={img}></img></li>)}
                <li><a href={`${project.url}`} target="_blank">Check out the Project!</a></li>
                <li><a href={`${project.gitHub}`} target="_blank">See the Code!</a></li>
            </ul>
        </>
    )
}