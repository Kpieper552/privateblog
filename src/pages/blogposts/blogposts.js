import React, { useEffect, useState }from 'react';
import { useHistory,} from 'react-router-dom';
import data from "../data/posts.json";



function BlogPosts() {

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
                    BLOG Nr. {post.id} <br/>
                    Title:  {post.title}<br/>
                    {post.date}<br/>
                    {post.content}<br/>
                </li>
            })}
        </ul>
    );
}

export default BlogPosts;





//this.state.map((blogToday) => {
//return (
//  <h1>{}</h1>
//);
//})}