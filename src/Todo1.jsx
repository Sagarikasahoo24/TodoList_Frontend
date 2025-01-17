import React from "react";
import { useTaskContext } from "./TaskContext1";
import './Todo.css';

const Todo1 = () => {
    const { tasks, input, setInput, addTask, deleteTask, editTask, editId } = useTaskContext();

    return (
        <>
            <h1 style={{ textAlign: "center" }}>To-Do List</h1>
            <div id="first_div">
                <input
                    type="text"
                    placeholder="Write your task here"
                    id="input"
                    onChange={(e) => setInput(e.target.value)}
                    value={input}
                />
                <button id="btn1" onClick={addTask}>
                    {editId ? "UPDATE" : "ADD"}
                </button>
            </div>
            <div id="task-list">
                {tasks.map((ele) => (
                    <div id="second_div" key={ele.id}>
                        <h1 style={{ textAlign: "center" }}>{ele.task}</h1>
                        <button id="del" onClick={() => deleteTask(ele.id)}>
                            DELETE
                        </button>
                        <button id="edit" onClick={() => editTask(ele.id)}>
                            EDIT
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Todo1;