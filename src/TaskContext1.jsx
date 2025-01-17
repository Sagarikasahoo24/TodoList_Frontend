import React, { createContext, useContext, useState } from "react";

const TaskContext1 = createContext();

// Wrapper component
export const TaskProvider = ({ children }) => {
    const [input, setInput] = useState("");
    const [tasks, setTasks] = useState([]);
    const [editId, setEditId] = useState(null);

    const addTask = () => {
        if (editId) {
            const updatedTask = tasks.map((ele) => {
                if (ele.id === editId) {
                    return { ...ele, task: input };
                }
                return ele;
            });
            setTasks(updatedTask);
            setEditId(null);
            setInput("");
        } else {
            if (input.trim()) {
                const newTask = {
                    id: Math.trunc(Math.random() * 1000),
                    task: input,
                };
                setTasks([...tasks, newTask]);
                setInput("");
            } else {
                alert("Task cannot be empty");
            }
        }
    };

    const deleteTask = (id) => {
        const updatedTasks = tasks.filter((ele) => ele.id !== id);
        setTasks(updatedTasks);
    };

    const editTask = (id) => {
        setEditId(id);
        const taskToEdit = tasks.find((ele) => ele.id === id);
        setInput(taskToEdit.task);
    };

    return (
        <TaskContext1.Provider
            value={{ tasks, input, setInput, addTask, deleteTask, editTask, editId }}
        >
            {children}
        </TaskContext1.Provider>
    );
};

// Custom hook for consuming the context
export const useTaskContext = () => useContext(TaskContext1);