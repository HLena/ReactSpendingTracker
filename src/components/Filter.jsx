
const Filter = ({filter, setFilter}) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md mb-4">
        <form className="flex gap-2 items-center">
        <label className="capitalize text-gray-500 font-bold"> Filtrar por</label>
        <select 
            name="category"
            id="category" className="border w-3/4 p-2 rounded-md bg-white text-gray-400 focus:outline-none focus:ring focus:border-blue-500"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
        >
            <option value="">Seleccione una categoría</option>
            <option value="food">Comida</option>
            <option value="house">Hogar</option>
            <option value="saving">Ahorro</option>
            <option value="expenses">Gastos</option>
            <option value="leisure">Ocio</option>
            <option value="health">Salud</option>
            <option value="suscriptions">Suscripciones</option>  
        </select>
        </form>
    </div>
  )
}

export default Filter