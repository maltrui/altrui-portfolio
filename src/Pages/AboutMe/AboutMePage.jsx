import MCAHeadshot from "../../Imgs/MCAHeadshot.png"
import './AboutMePage.css'
export default function AboutMePage(){
    return(
        <>
        <div className='aboutMe'>
        <h2>Michael Altrui: About Me</h2>
        </div>
        <div className='centerPhoto'>
        <img src={MCAHeadshot} className='headshot' ></img>
        </div>
        <p className='aboutMeP'>Hey there, I’m Michael Altrui, a software developer in the NYC area. I am extremely enthusiastic about my work and learning, and I am excited to get my career started. I am looking for a place where I can learn and grow my skill set, as I am very inquisitive and eager to learn. My ability to learn new skills is not only great, but my work ethic towards learning is excellent, which can be seen by the fact I graduated Magna Cum Laude from College. Being knowledgeable also lets me help other people. I was a peer tutor in college, and being able to assist others to the best of my ability is something that brings me the most joy.  I love being a part of and contributing towards a supportive team environment. Being a part of lacrosse teams, tutoring, and different social groups, the best experiences are the ones where I was able to get support from others when needed and able to support others when they needed help. I always want to be able to see someone else succeed, and I want to be a part of a team that allows me to do that. I want to be someone my teammates can rely on, that starts with my desire to learn and grow as a person, along with my commitment towards creating a friendly environment. </p>
        <div className='aboutMe'>
        <h4>Skills inlcude:</h4>
        <p>JavaScript, jQuery, HTML5, CSS3, React, Express, MongoDB, Mongoose, PostgreSQL, Python, Django REST framework</p>
        </div>
        </>
    )
}