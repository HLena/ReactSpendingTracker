import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { formatQuantity } from '../helpers';

const ControlBudget = ({ budget, totalExpenses, porcent, resetApp}) => {

    return (
        <div className="absolute -bottom-5 p-4 bg-white rounded-md shadow-md w-11/12 sm:w-3/4 max-w-md flex gap-4 flex-col items-center md:flex-row mt-4">
            <div className='w-40 h-40'>
                <CircularProgressbar value={porcent} maxValue={100} text={`${porcent}%`}/>
            </div>
            <div className="text-left mx-auto">
                <button 
                    className='border p-1 w-full rounded-md cursor-pointer bg-sky-500 hover:bg-sky-600 text-white font-bold'
                    onClick={resetApp}>
                    Resetear App
                </button>
                <p className="my-2"><span className="text-teal-500 font-bold">Presupuesto:{' '}</span>{formatQuantity(budget)}</p>
                <p className="my-2"><span className="text-teal-500 font-bold">Disponible:{' '}</span>{formatQuantity(budget - totalExpenses)}</p>
                <p className="my-2"><span className="text-teal-500 font-bold">Gastado:{' '}</span>{formatQuantity(totalExpenses)}</p>
            </div>
        </div>
    )
}

export default ControlBudget