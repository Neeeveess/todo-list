import style from './App.module.css'
import clipboard from './assets/images/clipboard.png'

import { Form } from './components/Form'
import { Header } from './components/Header'
import { Task } from './components/Task'

export function App() {

  

  return (
    <>
      <Header />
      <div className={style.wrapper}>
        <main>
          <Form />
          <div className={style.fullBoxContent}>
            <header>
              <div className={style.createdTasks}>
                <h3>Tarefas criadas</h3>
                <span>0</span>
              </div>
              <div className={style.completedTasks}>
                <h3>Concluidas</h3>
                <span>0</span>
              </div>
            </header>

            <section className={style.content}>
              <Task />
            </section>

            <section className={style.emptyContent}>
              <img src={clipboard} alt="" />
              <h2>
                Você ainda não tem tarefas cadastradas <br />
                <span>Crie tarefas e organize seus itens a fazer</span>
              </h2>
            </section>
          </div>
        </main>
      </div>
    </>
  )
}
