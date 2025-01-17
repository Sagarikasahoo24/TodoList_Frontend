import React from "react";
import { TaskProvider } from "./TaskContext1";
import Todo1 from "./Todo1";

function App() {
  return (
    <TaskProvider>
      <Todo1 />
    </TaskProvider>
  );
}

export default App;