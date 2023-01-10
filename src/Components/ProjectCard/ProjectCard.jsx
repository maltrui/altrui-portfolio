import {Link} from "react-router-dom"
import './ProjectCard.css';
export default function ProjectCard({project}){

    return(
        <>
            <ul className='projectCard'>
                <li>{project.name}</li>
                <li>{project.about}</li>
                <li><img src={project.imgs[0]}></img></li>
                <li><Link to={`/Projects/Details/${project.name}`}>Details</Link></li>
                <li><a href={`${project.url}`} target="_blank">Check out the Project!</a></li>
                <li><a href={`${project.gitHub}`} target="_blank">See the Code!</a></li>
            </ul>
        </>
    )
}

