import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  todo: JSON.parse(localStorage.getItem("todo")) || [],
};

const TodoSlice = createSlice({
  name: "Todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      let res = [...state.todo, action.payload];
      localStorage.setItem("todo", JSON.stringify(res));
      state.todo = res
    },
    deleteTodo: (state, action) => {
      state.todo = state.todo.filter((el) => el.id !== action.payload);
      localStorage.setItem("todo", JSON.stringify(state.todo));
    },
  },
});

export const { addTodo, deleteTodo } = TodoSlice.actions;
export default TodoSlice.reducer;
