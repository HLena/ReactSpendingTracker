import { formatDate } from "../helpers";

import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';


const Expense = ({expense}) => {

  const { category, name, quantity, date} = expense;
  const image = `/src/img/icono_${category}.svg`;

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction 
        className="border"
        onClick={() => console.info('swipe action triggered')}>
        Editar
      </SwipeAction>
    </LeadingActions>
  );
  
  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction
        // destructive={true}
        className="border"
        onClick={() => console.info('swipe action triggered')}
      >
        Eliminar
      </SwipeAction>
    </TrailingActions>
  );

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className="bg-white p-4 rounded-md shadow-md grid grid-cols-6 gap-2 place-items-center mb-4">
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
      </SwipeableListItem>
    </SwipeableList>
  )
}

export default Expense