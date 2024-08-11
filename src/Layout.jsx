import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <header >
        <h1>useReducer Study note</h1>
        <nav >
          <ul style={{ display: 'flex', flexDirection: 'row', gap: '30px'}}>
            <li><a href="/">Home</a></li>
            <li><Link to="/react-reducer/example">Example</Link></li>
            <li><Link to="/">More challenging example</Link></li>
            <li><Link to="/react-reducer/redux">Redux</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;