import React, { useState } from "react";
import Header from "../header/Header";
import "./admin.css";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/slices/slices";
import { useNavigate } from "react-router-dom";

const Admin = () => {

  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState({
    name: "",
    lastName: "",
    image: "",
  });

  function addTask() {
    let newObj = {
      name: inputValue,
      lastName: inputValue,
      image: inputValue,
      id: Date.now(),
    };
    dispatch(addTodo(newObj));
  }
  return (
    <div>
      <Header />
      <div id="admin">
        <div className="container">
          <div className="admin">
            <div className="s"></div>
            <div className="b"></div>
            <div className="admin-text">
              <h1>Todo</h1>
              <input
                onChange={(e) => setInputValue(e.target.value)}
                type="text"
                placeholder="Name"
              />
              <input
                onChange={(e) => setInputValue(e.target.value)}
                type="text"
                placeholder="LastName"
              />
              <input
                onChange={(e) => setInputValue(e.target.value)}
                type="text"
                placeholder="IMG url"
              />
            </div>
            <div className="admin-btn">
              <button onClick={() => addTask()}>create</button>
              <button>open</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
