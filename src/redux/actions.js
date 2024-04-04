import { ADD_TODO, FILTER_TODOS, MARK_ALL_COMPLETED, MARK_COMPLETED, MARK_INCOMPLETE, REMOVE_TODO, TOGGLE_TODO, UPDATA_SEARCH_TERM } from "./actionTypes";

export const addTodo = (text) =>(
    {
        type: ADD_TODO,
        payload: {text}
    });

export  const toggle_dodo = (id)=>({
        type:TOGGLE_TODO,
        payload: {id}
    });

export const remove_todo = (id)=>({
    type:REMOVE_TODO,
    payload: {id}
});
export const mark_completed = (id)=>({
    type: MARK_COMPLETED,
    payload: {id}
});
export const mark_incompleted = (id)=>({
    type: MARK_INCOMPLETE,
    payload: {id}
});

export const filterTodos = (filter)=>({
    type: FILTER_TODOS,
    payload: {filter}
});
export const markAllCompleted = ()=>({
    type: MARK_ALL_COMPLETED,
});

export const updateSearchTerm = (searchTerm)=>({
    type: UPDATA_SEARCH_TERM,
    payload: {searchTerm}
});