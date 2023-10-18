import { ControlBudget, NewBudget } from "./index";

const Header = ({
  budget,
  setBudget,
  isValidBudget,
  setIsValidBudget,
  totalExpenses
}) => {
  return (
    <header className="bg-teal-500 h-3/6 relative flex justify-center text-gray-700">
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
              budget={budget}  
              totalExpenses={totalExpenses}/>
        }
    </header>
  )
}

export default Header