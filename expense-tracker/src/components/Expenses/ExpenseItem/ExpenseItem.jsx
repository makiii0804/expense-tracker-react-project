import React from "react";
import { ExpenseDate } from "../ExpenseDate/ExpenseDate.jsx";
import { Card } from "../../Card/Card.jsx";

import "./ExpenseItem.css";


export const ExpenseItem = ({title, amount, date}) => {
 
  return (
    <Card className="expense-item">
      <ExpenseDate date={date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </Card>
  );
};
