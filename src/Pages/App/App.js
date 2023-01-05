import './App.css';
import AboutMePage from '../AboutMe/AboutMePage';
import ProjectsPage from '../Projects/Projects';
import { Routes, Route} from 'react-router-dom';
import NavBar from '../../Components/NavBar/NavBar';
function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/About' element={<AboutMePage />}/>
        <Route path='/Projects' element={<ProjectsPage />}/>
      </Routes>
    </>
  );
}

export default App;
