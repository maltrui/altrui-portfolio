import styles from './App.css';
import AboutMePage from '../AboutMe/AboutMePage';
import ProjectsPage from '../ProjectsPage/ProjectsPage';
import ProjectDetails from '../ProjectDetails/ProjectDetailsPage';
import ContactPage from '../ContactPage/ContactPage'
import { Routes, Route} from 'react-router-dom';
import NavBar from '../../Components/NavBar/NavBar';
import proj2Home from "../../Imgs/Project2HomePage.png"
import proj2Posts from "../../Imgs/Project2Posts.png"
import proj1App from "../../Imgs/Project1Application.png"
import finchCollectorDetails from "../../Imgs/FinchCollectorDetails.png"
import finchCollectorCreate from "../../Imgs/FinchCollectorCreate.png"
import proj3Products from "../../Imgs/Project3Products.png"
import proj3Cart from "../../Imgs/Project3Cart.png"
import header from "../../Imgs/header.jpeg"
import { useState } from 'react';

function App() {
  const [projects, setProjects] = useState([{
    name: 'RatingDogs',
    about: 'Node, Express, MongoDB (Full-stack CRUD Application)',
    details: 'This application is focused on the ability to create posts and comments about cute Dog pictures, gifs, and videos. The app has OAuth authentication, along with using a 3rd Party API in order to access the Dogs.',
    imgs: [proj2Home, proj2Posts],
    url: 'https://cryptic-depths-80147.herokuapp.com/',
    gitHub: 'https://github.com/maltrui/express-Project2-Dogs'
},
{
  name: 'Online-Shopping Application',
  about: 'MERN-stack Application',
  details: 'This app is a basic online shopping application. It has Sign-In, Product Display, and a shopping cart functionality. This uses a third party API in order to get a product list. A special challenge, and learning point, to this project was the security of 3rd party APIs. An unknown individual was able to change the categorie names into giberish and add new categories that did not exist the day before this project was due. I was able to find a work around by manually getting the caetgories from the products and getting the unique instances of them.',
  imgs: [proj3Products, proj3Cart],
  url: 'https://ancient-tundra-23286.herokuapp.com/',
  gitHub: 'https://github.com/maltrui/react-mern-stack'
},
{
  name: 'Checkers',
  about: 'JavaScript, CSS, and HTML',
  details: 'This application is a game browser-based JavaScript game of Checkers',
  imgs: [proj1App],
  url: 'https://maltrui.github.io/project1/',
  gitHub: 'https://github.com/maltrui/project1'
},
{
  name: 'Finch Collector',
  about: 'Full-stack Django App',
  details: 'This application is a baisc "thing" collector, which a Finch theme. The user has the abiity to input, edit, and delete FInch and Stick entries, along with being able to show which Finch owns a certain type of stick.',
  imgs: [finchCollectorDetails, finchCollectorCreate],
  url: 'https://stormy-bayou-90809.herokuapp.com/',
  gitHub: 'https://github.com/maltrui/finchcollector'
}
])
  return (
    <>
  <div className='header'>
    <NavBar />
 
      <Routes>
        <Route path={process.env.PUBLIC_URL + '/'} element={<AboutMePage />}/>
        <Route path='/About' element={<AboutMePage />}/>
        <Route path='/Projects' element={<ProjectsPage projects={projects}/>}/>
        <Route path='/Projects/Details/:projectName' element={<ProjectDetails projects={projects}/>}/>
        <Route path='/Contact' element={<ContactPage />}/>
      </Routes>
    </div>
    </>
  );
}

export default App;
