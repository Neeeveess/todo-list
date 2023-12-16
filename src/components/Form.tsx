import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent } from "react";

import style from './Form.module.css'

interface StatesProps {
  tasks: string[],
  setTasks: (task: string[]) => void,
  taskText: string,
  setTaskText: (taskText: string) => void
}

export function Form({tasks , setTasks,taskText,  setTaskText}:StatesProps){
 


  const handleNewTodoListChangeEvent = (e: ChangeEvent<HTMLInputElement>) =>{
    e.target.setCustomValidity('')
    setTaskText(e.target.value)    
  }

  const handleNewTodoList = (e: FormEvent) =>{
    e.preventDefault();

    setTasks([...tasks, taskText])
    setTaskText('')
  }

  return(
    <form className={style.form} onSubmit={handleNewTodoList}>
      <input 
        type="text" 
        name='todoList' 
        onChange={handleNewTodoListChangeEvent}
        value={taskText}
        placeholder="Adicione uma nova tarefa"
        required
      />
      <button type='submit'>Criar <PlusCircle size={18} weight="bold"/></button>
    </form>
  )
}