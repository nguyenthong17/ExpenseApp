import { createContext, useReducer } from "react";

const someData = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2022-05-25"),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 159.99,
    date: new Date("2022-05-02"),
  },
  {
    id: "e3",
    description: "A pair of T-Shirt",
    amount: 19.99,
    date: new Date("2022-05-29"),
  },
  {
    id: "e4",
    description: "Books",
    amount: 70.0,
    date: new Date("2022-05-28"),
  },
  {
    id: "e5",
    description: "Gloves",
    amount: 129.99,
    date: new Date("2022-04-22"),
  },
  {
    id: "e6",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2022-05-01"),
  },
  {
    id: "e7",
    description: "A pair of trousers",
    amount: 159.99,
    date: new Date("2022-05-02"),
  },
  {
    id: "e8",
    description: "A pair of T-Shirt",
    amount: 19.99,
    date: new Date("2022-03-02"),
  },
  {
    id: "e9",
    description: "Books",
    amount: 70.0,
    date: new Date("2022-01-02"),
  },
  {
    id: "e10",
    description: "Gloves",
    amount: 129.99,
    date: new Date("2022-04-22"),
  },
];

export const ExpenseContext = createContext({
  expense: [],
  addExpense: ({ description, date, amount }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, date, amount }) => {},
});

function expenseReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id }, ...state];
    case "DELETE":
      return state.filter((expense) => {
        return expense.id !== action.payload.id;
      });
    case "UPDATE":
      const updatableDataIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableData = state[updatableDataIndex];
      const updatedItem = [...updatableData, ...action.payload.data];
      const updatedExpense = [...state];
      updatedExpense[updatableDataIndex] = updatedItem;
      return updatedExpense;
    default:
      return state;
  }
}

function ExpenseContextProvider({ children }) {
  const [expenseState, dispatch] = useReducer(expenseReducer, someData);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
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
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
  );
}

export default ExpenseContextProvider;
