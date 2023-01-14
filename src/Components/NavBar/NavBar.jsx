import { Link } from 'react-router-dom';
import './NavBar.css';
export default function NavBar() {
  return (
    <nav >
      <Link className='navOption' to='/About'>About Me</Link>
      &nbsp; | &nbsp;
      <Link className='navOption' to='/Contact' >Contact Me</Link>
      &nbsp; | &nbsp;
      <Link className='navOption' to='/Projects' >Projects</Link>
    </nav>
  );
}