import { Link } from '@kobalte/core';
import { siteMetadata } from '../data/metadata';
import logo from '../assets/BA-logo.svg';

const Layout = ({ children, container = true, className = 'default-layout'}) => {
  return (
    <div class='wrapper' className={className}>
      <header class='navbar'>
        <div class="container">
          <a href="/" class="navbar-logo">
            <img src={logo} alt="Ben Adams Logo" />
          </a>
          
          <nav class='navbar-menu'>
            <Link.Root href='/'>My Work</Link.Root>
            <Link.Root href='/about'>About Me</Link.Root>
            <Link.Root href={`mailto:${siteMetadata?.email}?subject=benadams.io Website Inquiry`}>Contact</Link.Root>
          </nav>
        </div>
      </header>

      <main class={container ? 'container' : ''}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
