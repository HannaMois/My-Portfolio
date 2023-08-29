import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <nav>
        <NavLink to={'/home'}>Home</NavLink>
        <NavLink to={'/projects'}>Works</NavLink>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://drive.google.com/file/d/1xo2qCwIO2J_jzsiay5d2ZgGhaPc1Offq/view?usp=sharing"
        >
          Resume
        </a>
      </nav>
    </div>
  );
};

export default Header;
