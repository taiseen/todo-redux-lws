import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Todo from "./Todo";
import thunkFetchAllTodo from '../redux/todos/thunk/thunkFetchAllTodo';


export default function TodoList() {

    // data read form redux store...
    const todos = useSelector(state => state.todos);
    const filterTask = useSelector(state => state.filter);
    const { status, colors } = filterTask;

    const dispatch = useDispatch();

    // calling Thunk function for async tasks for data fetching from server...
    useEffect(() => {
        dispatch(thunkFetchAllTodo);
        // redux think, this is an action dispatch...
        // but inside it, we pass full thank fetchTodos function body
        // & thankMiddleware pass dispatch + getState function as parameter inside it...
    }, [dispatch]);


    const filterByStatus = todo => {
        // 2 Redux Store State are interacting here... by these condition...

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
        <div className="customScroll mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
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
