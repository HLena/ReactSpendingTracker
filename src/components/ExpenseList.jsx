import Expense from "./Expense"

const ExpenseList = ({ expenses, setEditExpense, setDeleteExpense, filter}) => {
  return (
    <>
        {
            expenses?.map((expense) => {
              if(filter == expense.category || filter == '') {
                return <Expense 
                  key={expense.id} 
                  expense={expense} 
                  setEditExpense={setEditExpense}
                  setDeleteExpense={setDeleteExpense}
                />
              } 
            }
            )
        }
    </>
  )
}

export default ExpenseList