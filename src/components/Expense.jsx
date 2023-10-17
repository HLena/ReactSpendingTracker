import { formatDate } from "../helpers";

const Expense = ({expense}) => {
    const { category, name, quantity, date} = expense;
    const image = `/src/img/icono_${category}.svg`;
  return (
    <div className="bg-white p-4 rounded-md shadow-md w-11/12 md:w-1/2 mx-auto grid grid-cols-6 gap-2 place-items-center mt-4">
        <img src={image} alt={category} className="w-16 text-center col-span-1"/>
        <div className="col-span-4 place-self-auto w-full">
            <small className="uppercase font-bold text-gray-400">{category}</small>
            <h4 className="capitalize text-gray-500 font-bold">{name}</h4>
            <span className="text-gray-500">{formatDate(date)}</span>
        </div>
        <div className="flex justify-end items-center">
          <strong>${quantity}</strong>
        </div>

    </div>
  )
}

export default Expense