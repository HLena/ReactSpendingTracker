import { useEffect, useState } from "react";
import { ExpenseList, Header, Modal }from "./components/index";
import iconNewbudget from './img/nuevo-gasto.svg';
import { generateId } from "./helpers";
import Filter from "./components/Filter";

function App() {

  const [budget, setBudget] = useState(Number(localStorage.getItem('budget')) ?? 0);

  const [expenses, setExpenses] = useState(JSON.parse(localStorage.getItem('expenses')) || []);

  const [isValidBudget, setIsValidBudget] = useState(false);

  const [totalExpenses, setTotalExpenses] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editExpense, setEditExpense] = useState(null);
  const [deleteExpense, setDeleteExpense] = useState(null);
  const [porcent, setPorcent] = useState(0);
  const [filter, setFilter] = useState('');

  const closeModal = () =>{ 
    setIsModalOpen(false);
    setEditExpense(null)
  }
  
  const openModal = () => setIsModalOpen(true);

  useEffect(() => {
    const budgetLS = Number(localStorage.getItem('budget')) ?? 0;
    if(budgetLS > 0) setIsValidBudget(true);
  }, [])
  

  useEffect(() => {
    localStorage.setItem('budget', JSON.stringify(budget) ?? 0);
  }, [budget])

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses) ?? []);
  }, [expenses])
  

  useEffect(() => {
    if(expenses?.length > 0) {
      const total = expenses.reduce((total, expense) => total + Number(expense.quantity), 0);
      const newPorcent = ((total / budget) * 100).toFixed(2);
      setTotalExpenses(total);
      setPorcent(Number(newPorcent))
    }
  }, [expenses]);

  useEffect(() => {
    if(editExpense){
      openModal()
    } else if(deleteExpense) {
      onDeleteExpense()
    }
   
  },[editExpense, deleteExpense])

  const onAddExpense = (newExpense) => {
    setExpenses([
      ...expenses,
      {
        ...newExpense,
        id: generateId(),
        date: new Date()
      }
    ])
  }

  const onEditExpense = (values) => {
    setExpenses(expenses.map(expense => expense.id == values.id ? values : expense))
    setEditExpense(null)
  }

  const onDeleteExpense = () => {
    setExpenses(expenses.filter(expense => expense.id != deleteExpense ))
    setDeleteExpense(null)
  }

  return (
    <>
      <Header 
        budget={budget}
        setBudget={setBudget}
        isValidBudget = {isValidBudget}
        setIsValidBudget = { setIsValidBudget }
        totalExpenses = {totalExpenses}
        porcent = {porcent}
        setExpenses={ setExpenses }
      />
      {
          isValidBudget && (
            <>
              <main className="mt-8 mx-auto w-11/12 sm:w-3/4 max-w-md">
                <Filter setFilter = {setFilter} filter = {filter}/>
                <ExpenseList 
                  expenses = {expenses} 
                  setEditExpense = {setEditExpense}
                  setDeleteExpense = {setDeleteExpense}
                  filter = {filter}
                />
              </main>
              <div className="p-2 w-14 fixed right-0 bottom-0 hover: cursor-pointer" onClick={openModal}>
                <img src={iconNewbudget} alt="" />
              </div>
            </>
          )
      }
      {
        isModalOpen && 
        <Modal 
          onClose={closeModal} 
          onAddExpense = {onAddExpense} 
          onEditExpense = {onEditExpense} 
          totalExpenses = { totalExpenses }
          budget = { budget }
          editExpense = {editExpense}
        />
      }
    </>
  )
}

export default App
