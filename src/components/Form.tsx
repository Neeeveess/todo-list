import { PlusCircle } from "phosphor-react";
import { FormEvent } from "react";

import style from './Form.module.css'

export function Form(){
  const handleNewTodoList = (e: FormEvent) =>{
    e.preventDefault();
  }

  return(
    <form className={style.form} onSubmit={handleNewTodoList}>
      <input type="text" name='todoList' placeholder="Adicione uma nova tarefa"/>
      <button type='submit'>Criar <PlusCircle size={18} weight="bold"/></button>
    </form>
  )
}