import { useDispatch, useSelector } from "react-redux";
import { COLOR_ADDED, COLOR_REMOVED } from "../redux/filters/actionTypes";
import { colorChange, statusChange } from "../redux/filters/actionCreator";


const numberOfTaskRemain = (numberOfTask) => {

    switch (numberOfTask) {
        case 0:
            return 'No task';
        case 1:
            return '1 task';
        default:
            return `${numberOfTask} task's`;
    }
}


export default function Footer() {

    const dispatch = useDispatch()

    const All = 'All'
    const Incomplete = 'Incomplete'
    const Complete = 'Complete'

    
    // Read data from Redux Store - State...
    const todos = useSelector(state => state.todos);
    const taskRemaining = todos.filter(todo => !todo.completed).length;


    // Read data from Redux Store - State...
    const filterTask = useSelector(state => state.filter);
    const { status, colors } = filterTask;


    // Write data at Redux Store - State...
    const handleStatusChange = status => dispatch(statusChange(status));

    const handleColorChange = color => {

        if (colors.includes(color)) {
            dispatch(colorChange(color, COLOR_REMOVED));
        } else {
            dispatch(colorChange(color, COLOR_ADDED));
        }

    }


    return (
        <div className="mt-4 flex justify-between text-xs text-gray-500">

            <p>{numberOfTaskRemain(taskRemaining)} left</p>

            <ul className="flex space-x-1 items-center text-xs">

                <li
                    className={`cursor-pointer ${status === All && 'font-bold'} `}
                    onClick={() => handleStatusChange(All)}
                >
                    {All}
                </li>

                <li>|</li>

                <li
                    className={`cursor-pointer ${status === Incomplete && 'font-bold'} `}
                    onClick={() => handleStatusChange(Incomplete)}
                >
                    {Incomplete}
                </li>

                <li>|</li>

                <li
                    className={`cursor-pointer ${status === Complete && 'font-bold'} `}
                    onClick={() => handleStatusChange(Complete)}
                >
                    {Complete}
                </li>

                <li></li>
                <li></li>

                <li
                    className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${colors.includes('green') && 'bg-green-500'}`}
                    onClick={() => handleColorChange('green')}
                ></li>

                <li
                    className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${colors.includes('red') && 'bg-red-500'}`}
                    onClick={() => handleColorChange('red')}
                ></li>

                <li
                    className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${colors.includes('yellow') && 'bg-yellow-500'}`}
                    onClick={() => handleColorChange('yellow')}
                ></li>
            </ul>
        </div>
    );
}
