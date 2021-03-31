import React from 'react';
import {
    Link,
    useHistory,
} from 'react-router-dom';

function Login() {
    const history = useHistory();
    function HandleClick() {
        console.log("u wordt doorgestuurd naar overzichtspagina!");
        history.push('./blogpostpage');
    }

    return (
        <section>
         <button onClick={HandleClick} type="button" id="click">Login</button>
        </section>


    );
}


export default Login;

