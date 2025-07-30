import React, { useState } from 'react';

export default function Login() {
    const [user, setUser] = useState({
        name: '',
        email: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("User data submitted:", user);
    
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input 
                type="text" 
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })} 
            />
            <br />
            <label>Email:</label>
            <input 
                type="email" 
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })} 
            />
            
            <h2>Name: {user.name}</h2>
            <h2>Email: {user.email}</h2>

            <button type="submit">OK</button>
        </form>
    );
}