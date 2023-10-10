import { useState } from "react";
import { Message } from "./index";

const NewBudget = ({
  budget,
  setBudget,
  setIsValidBudget
}) => {

  const [message, setMessage] = useState('');

  const handleBudget = (e) => { 
    e.preventDefault();
    if(!budget || budget < 0){
      setMessage('Presupuesto no válido');
      setIsValidBudget(false);
      return;
    }
    setMessage('');
    setIsValidBudget(true)

  };


  return (
      <div className="bg-white p-4 rounded-md shadow-md w-11/12  m-auto absolute -bottom-20 md:w-1/2">
        {
          message !== '' && <Message type='error'>{message}</Message>
        }
          <form className="m-auto my-4" onSubmit={handleBudget}>
              <div className="flex flex-col text-center gap-2 mb-2">
                  <label className="text-md leading-6 text-teal-500  font-extrabold">Definir Presupuesto</label>
                  <input
                      className="w-full rounded-md border-0 py-1.5 pl-5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-200 sm:text-sm sm:leading-6"
                      type="number"
                      placeholder="añadir presupuesto"
                      value={budget}
                      onChange={ (e) => setBudget(Number(e.target.value))}
                      />
              </div>

              <input 
                type="submit"
                value="Añadir"
                className="w-full bg-teal-500 text-white p-1.5 rounded-md font-semibold uppercase"
              />
          </form>
      </div>
  )
}

export default NewBudget