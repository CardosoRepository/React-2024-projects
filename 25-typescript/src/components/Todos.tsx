import React from "react";
import Todo from "../models/todo";

const Todos: React.FC<{ items: Todo[] }> = (props) => {
    return (
        <ul>
            {props.items.map((item, index) => (
                <li key={item.id}>{item}</li>
            ))}
        </ul>
    );
};

export default Todos;
