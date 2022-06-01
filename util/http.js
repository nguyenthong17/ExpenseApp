import axios from "axios";

const DATABASE_URL =
  "https://react-native-course-b4a66-default-rtdb.asia-southeast1.firebasedatabase.app/expense.json";

export function postExpense(expenseData) {
  return axios
    .post(DATABASE_URL, expenseData)
    .then((response) => response.data.name);
}

export function getExpenses() {
  return axios.get(DATABASE_URL).then((response) => {
    const expense = [];
    for (const key in response.data) {
      const expenseObj = {
        id: key,
        amount: response.data[key].amount,
        date: new Date(response.data[key].date),
        description: response.data[key].description,
      };
      expense.push(expenseObj);
    }

    return expense;
  });
}
