
const NewBudget = () => {
  return (
    <div className="relative border-2 h-3/6 flex justify-center">
      <div className="bg-white p-4 rounded-md shadow-md w-11/12  m-auto absolute -top-20 md:w-1/2">
          <form className="m-auto my-4">
              <div className="flex flex-col text-center gap-2 mb-2">
                  <label className="text-md leading-6 text-teal-500  font-extrabold">Definir Presupuesto</label>
                  <input
                      className="w-full rounded-md border-0 py-1.5 pl-5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-200 sm:text-sm sm:leading-6"
                      type="text"
                      placeholder="añadir presupuesto"
                      />
              </div>

              <input type="submit" value="Añadir" className="w-full bg-teal-500 text-white p-1.5 rounded-md font-semibold"/>
          </form>
      </div>
    </div>
  )
}

export default NewBudget