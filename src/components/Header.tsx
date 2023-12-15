import logo from '../assets/images/rocket.svg'
import style from './Header.module.css'

export function Header(){
  return (
    <>
      <header className={style.header}>
        <img className={style.iconeLogo} src={logo} alt="Icone da logo" />
        <h1 className={style.titulo}>to<span>do</span></h1>
      </header>
    </>
  )
}