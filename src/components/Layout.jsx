import { Link } from '@kobalte/core';

import logo from '../assets/BA-logo.svg';


const Layout = ({ children }) => {
  return (
    <div class='portfolio-wrapper'>
      <header class='navbar'>
        <div class="container">
          <a href="/" class="navbar-logo">
            <img src={logo} alt="Ben Adams Logo" />
          </a>
          
          <nav class='navbar-menu'>
            <Link.Root href='/'>Portfolio</Link.Root>
            <Link.Root href='/about'>About Me</Link.Root>
            <Link.Root href='/contact'>Contact</Link.Root>
          </nav>
        </div>
      </header>

      <main class="container">
        {children}
      </main>
    </div>
  );
};

export default Layout;
