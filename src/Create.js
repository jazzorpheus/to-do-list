import { useState } from "react";
import { useNavigate } from "react-router-dom";

import dateFormat from "dateformat";

const Create = () => {
  const [text, setText] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const toDo = { text };

    // ************************************************** DATE-TIME

    const now = new Date();
    toDo.time = dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");

    fetch("https://violet-moth-hose.cyclic.app/toDos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(toDo),
    }).then(() => {
      navigate("/to-do-list");
    });
  };

  return (
    <div className="create">
      <h2>Create A New To-Do</h2>
      <form onSubmit={handleSubmit}>
        <label>To-Do:</label>
        <input
          type="text"
          required
          value={text}
          onChange={(event) => {
            setText(event.target.value);
          }}
        />
        <button>Create New To-Do!</button>
      </form>
    </div>
  );
};

export default Create;
