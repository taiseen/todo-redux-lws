import { useSelector } from 'react-redux';
import Todo from "./Todo";


export default function TodoList() {

    const todos = useSelector(state => state.todos);

    return (
        <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
            {
                todos.length
                    ? todos.map(todo => <Todo todo={todo} key={todo.id} />)
                    : <p className='text-center text-red-400 text-lg'>You have no todo...</p>
            }
        </div>
    );
}
