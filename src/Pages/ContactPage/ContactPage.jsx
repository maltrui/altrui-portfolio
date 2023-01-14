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
                My Resume: <a href='https://drive.google.com/file/d/1ez3Sz776zZQeFdYQGwqukT7MkOJi_BKw/view?usp=sharing' target="_blank"><button>LinkedIn</button></a>
            </p>
            
            
        </>
    )
}