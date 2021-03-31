import React from 'react';
import {
    useHistory,
} from 'react-router-dom';

function Login() {
    const history = useHistory();
    function HandleClick() {
        console.log("u wordt doorgestuurd naar overzichtspagina!");
        history.push('./blogpostpage');
    }

    return (
        <>
          <button onClick={HandleClick} type="button" id="click">Login</button>
        </>
    );
}

export default Login;

