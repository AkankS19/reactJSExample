import React from 'react'

const login = () => {
    return (
        <div className="text">
            <span>Username</span><input type="text" />
            <span>Password</span><input type="password" />
            <button>Login</button>
        </div>
      
    )
}

export default login