import React, { useState } from 'react';
import './App.css';
import posts from './pages/data/posts.json';
import Login from './pages/login/login.js';
import BlogPostPage from './pages/blogpostpage/blogpostpage.js';
import BlogPosts from './pages/blogposts/blogposts.js';
import {Switch, Route, NavLink, } from 'react-router-dom';

function App() {
  // We houden in de state bij of iemand is "ingelogd" (simpele versie)
  const [isAuthenticated, toggleIsAuthenticated ] = useState(false);
    console.log("blogpost datum" , posts);

  return (
  <>
        <ul>
          <li>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <NavLink to="/login" activeClassName="activelink">Login</NavLink>
          </li>
          <li>
            <NavLink to="/blogpostpage" activeClassName="activelink">Blogpost Page</NavLink>
          </li>
          <li>
            <NavLink to="/blogposts" activeClassName="activelink">Blogposts</NavLink>
          </li>
        </ul>
    <Switch>
    <Route exact path="/">Home
      <section>
        <h1>this is home page</h1>
        <p>Tijd om onze applicatie te beveiligen! Zorg ervoor dat de menu-navigatie de juiste items
         </p>
      </section>
    </Route>
    <Route path="/login">
      <section>
        <h1>Loginpage</h1>
      </section>
    <Login />
    </Route>
    <Route path="/blogpostpage">
      <section>
        <h1>Blogpostpage</h1>
      </section>
    <BlogPostPage />
    </Route>
    <Route path="/blogposts/">
    <BlogPosts />
    </Route>
    </Switch>

  </>


);
}

export default App;
