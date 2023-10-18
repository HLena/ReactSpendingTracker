import { useEffect, useState } from "react";
import { ExpenseList, Header, Modal }from "./components/index";
import iconNewbudget from './img/nuevo-gasto.svg';
import { generateId } from "./helpers";

function App() {

  const [budget, setBudget] = useState('');
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expenses, setExpenses] = useState([]);

  const closeModal = () => setIsModalOpen(false);
  const openModal = () => setIsModalOpen(true);

  useEffect(() => {
    const total = expenses.reduce((total, expense) => total + Number(expense.quantity), 0);
    setTotalExpenses(total);
    
  }, [expenses]);

  const addExpense = (newExpense) => {
    setExpenses([
      ...expenses,
      {
        ...newExpense,
        id: generateId(),
        date: new Date()
      }
    ])
  }

  return (
    <>
      <Header 
        budget={budget}
        setBudget={setBudget}
        isValidBudget = {isValidBudget}
        setIsValidBudget = { setIsValidBudget }
        totalExpenses = {totalExpenses}
      />
      {
          isValidBudget && (
            <>
              <main className="mt-8 mx-auto w-11/12 md:w-1/2 ">
                <ExpenseList expenses = {expenses}/>
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
          onSaveExpense = {addExpense} 
          totalExpenses = { totalExpenses }
          budget = { budget }
        />
      }
    </>
  )
}

export default App
