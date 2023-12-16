import { FormEvent, useState } from 'react'
import { Trash } from 'phosphor-react'
import style from './Task.module.css'

import circle from '../assets/images/circle.svg'
import concludedTask from '../assets/images/concludedTask.svg'


interface TaskProps {
  content?: string,
}

export function Task({content = 'Conteudos'}: TaskProps){

  const [checked, setChecked] = useState(false);

  const handleClickButton = (e: FormEvent) => {
    e.preventDefault();
    setChecked(prevCheked => !prevCheked)
  }

  return(
    <article className={style.boxTask}>
      <button onClick={handleClickButton} className={style.checkbox}>
        <img src={checked ? concludedTask : circle} alt="" />
      </button>
      <p className={style.content}>
        {content}
      </p>
      <button className={style.btnTrash}><Trash/></button>
    </article>
  )
}