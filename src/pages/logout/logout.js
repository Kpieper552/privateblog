import React from 'react';
import {
    useHistory,
} from 'react-router-dom';

function Logout() {
    const history = useHistory();
    function HandleClick() {
        console.log("u wordt uitgelogd!");
        history.push('./');
    }

    return (
        <>

            <button onClick={HandleClick} type="button" id="click">Logout</button>
        </>
    );
}

export default Logout;

