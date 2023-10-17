import Expense from "./Expense"

const ExpenseList = ({ expenses }) => {
  return (
    <>
        {
            expenses.map((expense) => 
                <Expense key={expense.id} expense={expense}/>
            )
        }
    </>
  )
}

export default ExpenseList