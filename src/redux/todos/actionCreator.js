import { ADDED, TOGGLED, DELETED, COLOR_SELECTED, ALL_COMPLETED, CLEAR_COMPLETED } from './actionTypes';


// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// these action's creator's are ==> part of UI 
// these action's creator's are ==> called from UI / HTML 
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨


export const addTodo = todoText => {

    // UI থেকে এই function call এর মাধ্যমে, parameter এর সাহায্যে... 
    // এই payload property এর value টা আসবে...
    // যা redux store এর reducer function এর কাছে পৌঁছাবে...
    return {
        type: ADDED,
        payload: todoText,
    }
}

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩

export const toggle = todoId => {

    // UI থেকে এই function call এর মাধ্যমে, parameter এর সাহায্যে... 
    // এই payload property এর value টা আসবে...
    // যা redux store এর reducer function এর কাছে পৌঁছাবে...
    return {
        type: TOGGLED,
        payload: todoId,
    }
}

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩

export const deleteTodo = todoId => {

    // UI থেকে এই function call এর মাধ্যমে, parameter এর সাহায্যে... 
    // এই payload property এর value টা আসবে...
    // যা redux store এর reducer function এর কাছে পৌঁছাবে...
    return {
        type: DELETED,
        payload: todoId,
    }
}

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩

export const allComplete = _ => {
    return {
        type: ALL_COMPLETED,
    }
}

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩

export const clearComplete = _ => {
    return {
        type: CLEAR_COMPLETED,
    }
}

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩

export const colorSelected = (todoId, color) => {

    // UI থেকে এই function call এর মাধ্যমে, parameter এর সাহায্যে... 
    // এই payload property এর value গুলা আসবে...
    // যা redux store এর reducer function এর কাছে পৌঁছাবে...
    return {
        type: COLOR_SELECTED,
        payload: {
            todoId,
            color
        }
    }
}

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩