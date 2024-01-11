import React, { useEffect, useState, useRef, useCallback } from "react";
import useScroll from "../hooks/useScroll";
 
const List = () => {
    const [todos, setTodos] = useState([]);
    const [page, setPage] = useState(1);
    const parentRef = useRef();
    const childRef = useRef();
    const intersected = useScroll(parentRef, childRef, () => fetchTodos(page, limit))

    const limit = 20;

    function fetchTodos (page, limit) {
        fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`)
            .then(response => response.json())
            .then(json => {
                setTodos(prev => [...prev, ...json]);
                setPage(prev => prev + 1)
            })
    }

    return (
        <div 
            ref={parentRef}
            style={{height: '80vh', overflow: 'auto'}}
        >
            {todos.map(todo => 
                <div
                    style={{padding: 20, border: '2px solid orange'}}
                    key={todo.id}    
                >
                    {todo.id}. {todo.title}
                </div>    
            )}
            <div 
                ref={childRef} 
                style={{height: 20, background: 'teal'}}
            />
        </div>
    )
}

export default List;