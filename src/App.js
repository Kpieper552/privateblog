import React, { useState } from 'react';
import './App.css';
import posts from './pages/data/posts.json';
import Login from './pages/login/login.js';
import Logout from "./pages/logout/logout";
import BlogPostPage from './pages/blogpostpage/blogpostpage.js';
import BlogPosts from './pages/blogposts/blogposts.js';
import {Switch, Route, Redirect, NavLink, } from 'react-router-dom';

function App() {
  // We houden in de state bij of iemand is "ingelogd" (simpele versie)
  const [isAuthenticated, toggleIsAuthenticated ] = useState(false);
    console.log("blogpost datum" , posts);

  return (
      <>
         <ul id="balk">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
           {isAuthenticated === false &&
           <li>
             <NavLink to="/login" activeClassName="activelink">Login</NavLink>
           </li>
           } : {isAuthenticated === true &&
         <li>
           <NavLink to="/logout" activeClassName="activelink">Logout</NavLink>
         </li>
         }
         {isAuthenticated === true &&
           <li>
             <NavLink to="/blogpostpage" activeClassName="activelink">Blogpost Page</NavLink>
           </li>}
           {isAuthenticated === true &&
           <li>
             <NavLink to="/blogposts" activeClassName="activelink">Blogposts</NavLink>
           </li>
           }
        </ul>
    <Switch>
    <Route exact path="/">
      <section>
        <h1>Welkom op de BLOG homepage</h1>
        <p>Login voor toegang!</p>
        <p>Deze inlog gebeurt fictief via de isAuthenticated op true te zetten in App.js.</p>
        <p>Succes en veel leesplezier!</p>
        <p>Wanneer je ingelogd bent, log je uit op de logout pagina met de knop logout.</p>
        <p>Fictief in App.js naar false!</p>
      </section>
    </Route>
    <Route path="/login">
      <section>
        <h1>Loginpage</h1>
      </section>
        <Login />
    </Route>
      <Route path="/logout">
        <section>
          <h1>Logoutpage</h1>
        </section>
        <Logout />
      </Route>
      <Route path="/blogpostpage/">
        <section><h1>Blogpostpage</h1></section>
        {isAuthenticated ? (<BlogPostPage />) : (<Redirect to="./"/>)}
    </Route>
    <Route path="/blogposts/">
      <section><h1>Blogpostpage</h1></section>
      {isAuthenticated ? (<BlogPosts />)  : (<Redirect to="./"/>)}
    </Route>
    </Switch>


</>

);
}

export default App;
