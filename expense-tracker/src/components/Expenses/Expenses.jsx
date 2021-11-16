import React, {useState} from "react";
import { ExpenseItem } from "./ExpenseItem/ExpenseItem.jsx";
import { Card } from "../Card/Card.jsx";
import { ExpensesFilter } from "./ExpensesFilter/ExpensesFilter.jsx";
import './Expenses.css';

export const Expenses = ({items}) => {
    const [filteredYear, setFilteredYear] = useState("2021");

    const filterChangeHandler = selectedYear => {
      setFilteredYear(selectedYear);
    }

    return (
        <Card className="expenses">
          <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>

        {
          items.map((item, index) => ( <ExpenseItem key={index} title={items[index].title} amount={items[index].amount} date={items[index].date} />))
        }

        {/*<ExpenseItem
          title={items[0].title}
          amount={items[0].amount}
          date={items[0].date}
        />
        <ExpenseItem
          title={items[1].title}
          amount={items[1].amount}
          date={items[1].date}
        />
        <ExpenseItem
          title={items[2].title}
          amount={items[2].amount}
          date={items[2].date}
        />
        <ExpenseItem
          title={items[3].title}
          amount={items[3].amount}
          date={items[3].date}
        />*/}
      </Card>
    )
}