import React from "react";
import Header from "../header/Header";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../../store/slices/slices";

const Menu = () => {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.slices.todo);
  console.log(todo);
  return (
    <div>
      <Header />
      <div>
        <div id="menu">
          <div className="container">
            <div className="menu">
              {todo.length > 0 ? (
                todo.map((el, idx) => (
                  <div key={idx}>
                    <h1>{el.name}</h1>
                    <h1>{el.lastName}</h1>
                    <img src={el.image} alt="" />
                    <button onClick={() => dispatch(deleteTodo(el.id))}>
                      del
                    </button>
                  </div>
                ))
              ) : (
                <h1>Loading...</h1>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
