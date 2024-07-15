import {createContext,useContext} from 'react';

// Create layout of context
export const TodoContext=createContext({
  todos:[
    {
      id:1,
      todo:"Todo message",
      completed:false
    }
  ],
  addTodo:(todo)=>{},
  updateTodo:(id,todo)=>{},
  deleteTodo:(id)=>{},
  toggleComplete:(id)=>{}
});

// Function to use the context
export const useTodo=()=>{
  return useContext(TodoContext);
}

// export the provider
export const TodoProvider=TodoContext.Provider;