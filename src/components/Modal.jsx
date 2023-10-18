import { useState } from 'react';
import { CgClose } from 'react-icons/cg';
import Message from './Message';

const Modal = ({
    onClose,
    onSaveExpense,
    totalExpenses,
    budget
}) => {

    const initialForm = {
        name: '',
        quantity: '',
        category: ''
    }

    const availableBudget = budget - totalExpenses;
    const [form, setForm] = useState(initialForm);
    const [message, setMessage] = useState('');

    const handleChange = ({target}) => {
        setForm({
            ...form,
            [target.name]: target.value
        })
    }

    const handleSubmit = (e) => {
        const {name, quantity, category} = form;
        e.preventDefault();
        if([name, quantity, category].includes('')){
            setMessage('Todos lo campos son obligatorios')
            return;
            
        } else if( availableBudget < form.quantity) {
            setMessage('La cantidad supera el presupuesto actual')
            return;
        } 
        onSaveExpense(form);
        setForm(initialForm);
        onClose();


    }

    return (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" >
    
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                    <div className="relative overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all ease-in-out delay-150 p-4 w-11/12 sm:max-w-lg">
                        <CgClose className='absolute right-3 top-3 cursor-pointer' onClick={onClose}/>
                        <legend className="text-base font-semibold leading-6 text-gray-900 mb-2" id="modal-title">Nuevo gasto</legend>
                        {
                            message &&
                                <Message type='error'>
                                    {message}
                                </Message>
                        }
                    
                        <form className="sm:text-left" onSubmit={handleSubmit}>
                            <fieldset className="flex flex-col gap-1 pt-2">
                                <label htmlFor="name">Nombre</label>
                                <input 
                                    className="border py-1 px-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                                    type="text" 
                                    placeholder="Añade el nombre del gasto" 
                                    name="name"
                                    onChange={handleChange}
                                    value={form.name}
                                    />
                            </fieldset>
                            <fieldset className="flex flex-col gap-1 pt-2">
                                <label htmlFor="quantity">Cantidad</label>
                                <input 
                                    className="border py-1 px-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                                    type="number" 
                                    placeholder="Añade cantidad del gasto. Ejm: 500" 
                                    name="quantity"
                                    onChange={handleChange}
                                    value={form.quantity}
                                    />
                            </fieldset>
                            <fieldset className="flex flex-col gap-1 pt-2">
                                <label htmlFor="category">Categoría</label>
                                <select name="category" id="category" className="border p-2 rounded-md bg-white text-gray-400 focus:outline-none focus:ring focus:border-blue-500"
                                    value={form.category}
                                    onChange={handleChange}
                                >
                                    <option value="">Seleccione una categoría</option>
                                    <option value="food">Comida</option>
                                    <option value="house">Hogar</option>
                                    <option value="saving">Ahorro</option>
                                    <option value="expenses">Gastos</option>
                                    <option value="leisure">Ocio</option>
                                    <option value="health">Salud</option>
                                    <option value="suscriptions">Suscriptiones</option>
                                </select>
                            </fieldset>
                            <input 
                                type="submit" 
                                value="Añadir gasto"
                                className="mt-2 rounded-md bg-teal-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-600 cursor-pointer  w-full sm:w-auto"
                                
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal