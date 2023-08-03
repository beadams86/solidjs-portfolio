/* @refresh reload */
import { render } from 'solid-js/web';
import { Router, Routes, Route } from '@solidjs/router';

import './index.scss';
import Home from './Home';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(() => (
  <Router>
    <Routes>
      <Route path="/" component={Home} />
      <Route path="/about" component={Home} />
    </Routes>
  </Router>
  ), root);
