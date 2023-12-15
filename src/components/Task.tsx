import { Trash } from 'phosphor-react'
import style from './Task.module.css'

export function Task({content}){
  return(
    <article className={style.boxTask}>
      <input className={style.checkbox} type="checkbox"/>
      <p className={style.content}>
        Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
      </p>
      <button className={style.btnTrash}><Trash/></button>
    </article>
  )
}