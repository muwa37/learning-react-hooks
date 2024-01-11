import React from "react";
import useInput from "../hooks/useInput";

const Input = () => {
    const username = useInput('');
    const password = useInput('');
  
  

    return (
        <div>
            <input 
                {...username}
                type='text'
                placeholder="username"
            />
            <input 
                {...password}
                type='text'
                placeholder="password"
            />
        <button
            onClick={() => {
                console.log(username.value, password.value)
            }}
        >
            check
        </button>
        </div>
    );
};

export default Input;