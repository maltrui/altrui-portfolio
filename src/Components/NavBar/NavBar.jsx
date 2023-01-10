import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
  
    <nav>
      <Link to='/About'>About Me</Link>
      &nbsp; | &nbsp;
      <Link to='/Projects'>Projects</Link>
    </nav>
  );
}