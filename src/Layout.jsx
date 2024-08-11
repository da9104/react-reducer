import React from 'react';
import { Outlet } from 'react-router-dom';
import App from './App'

function Layout() {
  return (
    <div>
      <header >
        <h1>useReducer Study note</h1>
        <nav >
          <ul style={{ display: 'flex', flexDirection: 'row', gap: '30px'}}>
            <li><a href="/">Home</a></li>
            <li><a href="/">Example</a></li>
            <li><a href="/">Redux-Redux Toolkits</a></li>
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