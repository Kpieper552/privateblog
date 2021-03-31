import React, { useState, useEffect } from 'react';
import data from '../data/posts.json';
import {useHistory} from "react-router-dom";



function BlogPostPage() {
    const history = useHistory();
    function HandleClick() {
        console.log("Blog inhoud lezen");
        history.push('./blogposts');
    }

   const [posts, setPosts] = useState([]);
    console.log(data)

   useEffect( () => {
       setPosts(data);
   }, [])

    return (

     <ul>
     {posts.map((post) => {
        return <li id="posts" key={post.id}>
            <button onClick={HandleClick} key={post.id} id="blogclick">Blog {post.id}</button>BLOG Nr. {post.id} Title:  {post.title}
            </li>
      })}
     </ul>
    );
}
 export default BlogPostPage;