import { ControlBudget, NewBudget } from "./index";

const Header = ({
  budget,
  setBudget,
  isValidBudget,
  setIsValidBudget,
  totalExpenses,
  porcent,
  setExpenses
}) => {

  const resetApp = () => {
    setBudget(0);
    setIsValidBudget(false)
    setExpenses([])
  }

  return (
    <header className="bg-teal-500 h-3/4 sm:h-1/2 relative flex justify-center text-gray-700">
        <h1 className="py-12 text-2xl uppercase text-white">Planificador de gastos</h1>
        {
          !isValidBudget
          ?
            <NewBudget 
              budget={budget}
              setBudget={setBudget}
              setIsValidBudget = { setIsValidBudget }
            />
          : <ControlBudget 
              porcent = {porcent}
              budget={budget}  
              totalExpenses={totalExpenses}
              resetApp = {resetApp}
            />
        }
    </header>
  )
}

export default Header