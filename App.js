import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";
import { FaTeamspeak } from "react-icons/fa";

function App() {
  const [name, setName] = useState(""); //forms
  const [list, setList] = useState([]); // list for local storage
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(); //which item is being edited
  const [alert, setAlert] = useState({ show: false, message: "", type: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      // display alert
    } else if (name && isEditing) {
      // deal with edit
    } else {
      // show alter
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
    }
  };
  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert />}
        <h3>Grocery List</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g eggs"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className="submit-btn" stype="submit">
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>
      <div className="grocery-container">
        <List items={list} />
        <button className="btn">clear items</button>
      </div>
    </section>
  );
}

export default App;
