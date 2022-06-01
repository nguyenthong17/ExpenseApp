import { createContext, useReducer } from "react";

export const ExpenseContext = createContext({
  expense: [],
  addExpense: ({ description, date, amount }) => {},
  setExpense: (expense) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, date, amount }) => {},
});

function expenseReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [action.payload, ...state];
    case "SET":
      return action.payload.reverse();
    case "DELETE":
      return state.filter((expense) => {
        return expense.id !== action.payload.id;
      });
    case "UPDATE":
      const updatableDataIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableData = state[updatableDataIndex];
      const updatedItem = { ...updatableData, ...action.payload.data };
      const updatedExpense = [...state];
      updatedExpense[updatableDataIndex] = updatedItem;
      return updatedExpense;
    default:
      return state;
  }
}

function ExpenseContextProvider({ children }) {
  const [expenseState, dispatch] = useReducer(expenseReducer, []);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function setExpense(expense) {
    dispatch({ type: "SET", payload: expense });
  }
  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: { id } });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  const value = {
    expense: expenseState,
    addExpense: addExpense,
    setExpense: setExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
  );
}

export default ExpenseContextProvider;
