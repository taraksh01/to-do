import Task from "./Task";
import "../styles/Main.css";

const Main = ({ tasks }) => {
  return (
    <main>
      <div>
        {tasks.map((task) => {
          return <Task task={task} />;
        })}
      </div>
    </main>
  );
};

export default Main;
