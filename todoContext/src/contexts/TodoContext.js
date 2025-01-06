import { createContext,useContext } from "react";

export const TodoContext=createContext({
    todos:[{
        id:1,
        todo:"Todo msg",
        completed:"False"
    }],
    addTodo:(todo)=>{},
    updateTodo:(todo,id)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}
})

export const useTodo=()=>{
    return useContext(TodoContext)
}
 

export const  Todoprovider=TodoContext.Provider