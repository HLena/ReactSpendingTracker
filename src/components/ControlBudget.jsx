
const ControlBudget = ({budget, totalExpenses}) => {

    const formatQuantity = (quantity) => {
        return quantity.toLocaleString('en-US',{
            style: 'currency',
            currency: 'USD'
        })
    };

    return (
        <div className="absolute -bottom-5 p-4 bg-white rounded-md shadow-md w-11/12 md:w-1/2 grid grid-cols-2 gap-2">
            <div>Grafica</div>
            <div className="text-left">
                <p className="my-2"><span className="text-teal-500 font-bold">Presupuesto:{' '}</span>{formatQuantity(budget)}</p>
                <p className="my-2"><span className="text-teal-500 font-bold">Disponible:{' '}</span>{formatQuantity(budget - totalExpenses)}</p>
                <p className="my-2"><span className="text-teal-500 font-bold">Gastado:{' '}</span>{formatQuantity(totalExpenses)}</p>
            </div>
        </div>
    )
}

export default ControlBudget