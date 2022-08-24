import { ADDED, TOGGLED, DELETED, COLOR_SELECTED, ALL_COMPLETED, CLEAR_COMPLETED } from './actionTypes';


export const initialState = [
    {
        id: 1,
        text: 'Learn React',
        completed: true,
    },
    {
        id: 2,
        text: 'Learn Redux',
        completed: false,
        color: 'red',
    },
]


// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// this reducer() function called by Redux,
// when user dispatch an action creators from UI
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨


const reducer = (state = initialState, { type, payload }) => {

    switch (type) {

        // 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩

        case ADDED:

            return [
                ...state,
                {
                    id: state.length + 1,
                    text: payload,
                    completed: false,
                },
            ];

        // 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩

        case TOGGLED:
            // প্রতিটা [array of {object}] এর মধ্যে দিয়ে যেতে হবে .map() method এর মাধ্যমে 
            // এবং শুধু যে {object} টা change হবে তাকে খুঁজে বের করে, 
            // শুধুমাত্র সেই {object} এর property এর value change করেতে হবে... 
            return state.map(todo => todo.id === payload
                ? { ...todo, completed: !todo.completed }
                : todo
            );

        // 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩

        case DELETED:
            // যে গুলা id এর সমান সমান হবে না, শুধুমাত্র সেই গুলাই বের করে নিয়ে এনে...
            // নতুন [array] return করে দিবো
            return state.filter(todo => todo.id !== payload);

        // 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩

        case COLOR_SELECTED:

            const { todoId, color } = payload;

            return state.map(todo => todo.id === todoId
                ? { ...todo, color: color }
                : todo
            );

        // 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩

        case ALL_COMPLETED:

            return state.map(todo => ({ ...todo, completed: true }));

        // 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩

        case CLEAR_COMPLETED:

            return state.filter(todo => !todo.completed);

        // 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
        default:

            return state;
    }
}

export default reducer;