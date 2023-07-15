import { useState } from "react";
import "../styles/SideBar.css";

const SideBar = ({ addTask }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(formData);
    setFormData({
      title: "",
      description: "",
    });
  };

  return (
    <section className="side-bar">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          onChange={handleChange}
          name="title"
          value={formData.title}
        />

        <br />
        <textarea
          placeholder="Description"
          onChange={handleChange}
          name="description"
          value={formData.description}
        />
        <br />
        <button>Add Task</button>
      </form>
    </section>
  );
};

export default SideBar;
