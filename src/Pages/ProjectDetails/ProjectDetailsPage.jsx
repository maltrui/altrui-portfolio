import { useParams } from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';
import "./ProjectDetails.css"

export default function ProjectDetails({projects}){
    const [selectedProject, setSelectedProject] = useState({
    name: 'test name',
    about: 'test description',
    imgs: [''],
    url: 'https://cryptic-depths-80147.herokuapp.com/',
    gitHub: 'https://github.com/maltrui/express-Project2-Dogs'
})
    let name = useParams().projectName
    useEffect(()=> {projects.map(project => {if(project.name === name){
        setSelectedProject(project)
    }})})
    return(
        <>
            <ul className="projectDetails">
                <div className='details'> 
                    <li>{selectedProject.name}</li>
                </div>
                <div className='details'>
                    <li>{selectedProject.about}</li>
                </div>
                <div className='details'>
                    <li>{selectedProject.details}</li>
                </div>

                {selectedProject.imgs.map(img => <div className='details'> <li key={img}><img src={img}></img></li></div>)}
                <div className='details'>
                {selectedProject.url !== '' ? <li>{<a href={`${selectedProject.url}`} target="_blank">Check out the Project!</a>}</li> : null }
                <li><a href={`${selectedProject.gitHub}`} target="_blank">See the Code!</a></li>
                </div>
                

            </ul>
        </>
    )
}