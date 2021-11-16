import React from "react";
import { ExpenseForm } from "./ExpenseForm/ExpenseForm";

import "./NewExpense.css"

export const NewExpense = ({onAddExpense}) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        onAddExpense(expenseData);
    }
    return <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
}