import { addTodo, allComplete, clearComplete } from "../redux/todos/actionCreator";
import { useDispatch } from 'react-redux';
import { useState } from "react";
import tickImage from "../assets/images/double-tick.png";
import noteImage from "../assets/images/notes.png";
import plusImage from "../assets/images/plus.png";


export default function Header() {

    // Write Operation at Redux Store...
    const dispatch = useDispatch();

    const [taskInput, setTaskInput] = useState('')

    const handleClearCompleted = _ => dispatch(clearComplete())
    const handleCompleatAllTask = _ => dispatch(allComplete())

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addTodo(taskInput));
        setTaskInput('')
    }


    return (
        <div>
            <form
                className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
                onSubmit={handleSubmit}
            >
                <img src={noteImage} className="w-6 h-6" alt="Add todo" />
                <input
                    type="text"
                    value={taskInput}
                    placeholder="Type your todo"
                    onChange={e => setTaskInput(e.target.value)}
                    className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
                />
                <button
                    type="submit"
                    className={`appearance-none w-8 h-8 bg-[url('${plusImage}')] bg-no-repeat bg-contain`}
                ></button>
            </form>


            <ul className="flex justify-between my-4 text-xs text-gray-500">

                <li
                    className="flex space-x-1 cursor-pointer"
                    onClick={handleCompleatAllTask}
                >
                    <img className="w-4 h-4" src={tickImage} alt="Complete" />
                    <span>Complete All Tasks</span>
                </li>

                <li
                    className="cursor-pointer"
                    onClick={handleClearCompleted}
                >
                    Clear completed
                </li>
            </ul>
        </div>
    );
}