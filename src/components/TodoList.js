import { useSelector } from 'react-redux';
import Todo from "./Todo";


export default function TodoList() {

    // data read form redux store...
    const todos = useSelector(state => state.todos);
    const filterTask = useSelector(state => state.filter);
    const { status, colors } = filterTask;


    const filterByStatus = todo => {

        switch (status) {
            case 'Complete':
                return todo.completed;
            case 'Incomplete':
                return !todo.completed;
            default:
                return true;
        }
    }


    const filterByColor = todo => {

        if (colors.length > 0) {
            return colors.includes(todo?.color);
        }

        return true;
    }


    return (
        <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
            {
                todos.length
                    ? todos
                        .filter(filterByStatus)
                        .filter(filterByColor)
                        .map(todo => <Todo todo={todo} key={todo.id} />)
                    : <p className='text-center text-red-400 text-lg'>You have no todo...</p>
            }
        </div>
    );
}
