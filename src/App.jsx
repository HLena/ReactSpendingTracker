import { useState } from "react";
import { Header, Modal }from "./components/index";
import iconNewbudget from './img/nuevo-gasto.svg';
import { generateId } from "./helpers";

function App() {

  const [budget, setBudget] = useState('');
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expenses, setExpenses] = useState([]);

  const closeModal = () => setIsModalOpen(false);
  const openModal = () => setIsModalOpen(true);

  const saveExpense = (newExpense) => {
    setExpenses([
      ...expenses,
      {
        ...newExpense,
        id: generateId()
      }
    ])
  }

  const availableBudget = () =>  expenses.reduce((total, expense) => total + Number(expense.quantity), 0)
   
  const spentBudget = () => budget - availableBudget();

  return (
    <>
      <Header 
        budget={budget}
        setBudget={setBudget}
        isValidBudget = {isValidBudget}
        setIsValidBudget = { setIsValidBudget }
        availableBudget = {availableBudget}
        spentBudget = {spentBudget}
      />
      {
          isValidBudget && (
            <div className="p-2 w-14 fixed right-0 bottom-0 hover: cursor-pointer" onClick={openModal}>
              <img src={iconNewbudget} alt="" />
            </div>
          )
      }
      {
        isModalOpen && <Modal onClose={closeModal} onSaveExpense = {saveExpense} availableBudget = { availableBudget }/>
      }
    </>
  )
}

export default App
