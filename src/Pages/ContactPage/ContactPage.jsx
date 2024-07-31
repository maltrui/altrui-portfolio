import "./ContactPage.css"
export default function ContactPage(){
    return(
        <>  
        <h2 className='contactP'>
            How To Contact Me:
        </h2>
        <div className='contactP'>
            <p>
                Email: michaelcaltrui@gmail.com
            </p>
            <p>
                Phone number:973-699-5502
            </p>
        </div>
        <h2 className='contactP'>
            Also Check Out:
        </h2>
            <p className='contactP'>
                My GitHub: <a href='https://github.com/maltrui' target="_blank"><button>GitHub</button></a>
            </p>
            <p className='contactP'>
                My LinkedIn: <a href='https://www.linkedin.com/in/michael-altrui' target="_blank"><button>LinkedIn</button></a>
            </p>
            <p className='contactP'>
                My Resume: <a href='https://docs.google.com/document/d/1uA1LyqqLQ8z1znlez03gOlMiDvu-i97l/edit?usp=sharing&ouid=111455401108678639432&rtpof=true&sd=true' target="_blank"><button>Resume</button></a>
            </p>
        </>
    )
}