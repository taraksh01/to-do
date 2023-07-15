import { useState } from "react";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "../src/styles/App.css";

function App() {
  const [tasks, setTasks] = useState([
    { title: "Task 2", description: "Description 2", id: "1" },
    { title: "Task 1", description: "Description 1", id: "2" },
    { title: "Task 3", description: "Description 3", id: "3" },
    { title: "Task 4", description: "Description 4", id: "4" },
    { title: "Task 5", description: "Description 5", id: "5" },
  ]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="app">
      <Header />
      <div className="content">
        <SideBar addTask={addTask} />
        <Main tasks={tasks} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
