import { FormEvent, useState } from 'react'
import { CheckCircle, Circle, Trash } from 'phosphor-react'
import style from './Task.module.css'



interface TaskProps {
  content?: string,
  deleteTask: (taskToDelete: string) => void,
  setConcludedTask: React.Dispatch<React.SetStateAction<number>>
}

export function Task({content = 'Conteudos', deleteTask, setConcludedTask }: TaskProps){

  const [checked, setChecked] = useState(false);
  

  const handleClickButton = (e: FormEvent) => {
    e.preventDefault();
    setChecked(prevCheked => !prevCheked)
    setConcludedTask((state) => (checked ? state - 1 : state + 1));
  }

  const handleDeleteTask = () => {
    deleteTask(content)
  }

  return(
    <article className={style.boxTask}>
      <button onClick={handleClickButton} className={style.checkbox}>
        {checked ? <CheckCircle size={24}  weight="fill" className={style.checkCircle} /> : <Circle size={24}/>}
      </button>
      <p className={checked ? style.contentChecked : style.content}>
        {content}
      </p>
      <button onClick={handleDeleteTask} className={style.btnTrash}><Trash size={24}/></button>
    </article>
  )
}