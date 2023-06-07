import React from 'react';
import { useState } from "react";

function NewProfile(props) {
    const [username, setUsername] = useState('');
    const [quote, setQuote] = useState('');
    const [image, setImage] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const handleClick = (e) =>{
        //store stuff in firebase yay
    }
    
    return (
        <form onSubmit={handleSubmit} style = {{paddingTop: 25}}>
            <label for = "username">Username</label>
            <input value= {username} onChange = {(e) => setUsername(e.target.value)} type = "text" placeholder = "mystan101" id = "username" name= "username"/>
            <label for = "quote">Quote</label>
            <input value = {quote} onChange = {(e) => setQuote(e.target.value)} type = "text" placeholder = "I stan Lady Gaga" id = "quote" name= "quote"/>
            <label for = "file">Profile Image</label>
            <input type = "file" onChange = {(e) => setImage(e.target.value)} />
            <button onClick={handleClick}>Upload</button>
            <button onClick={() => props.setloggedIn(true)}>Login</button>
        </form>
    );
}

export default NewProfile;