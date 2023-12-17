import { useState } from 'react'
import style from './App.module.css'
import clipboard from './assets/images/clipboard.png'

import { Form } from './components/Form'
import { Header } from './components/Header'
import { Task } from './components/Task'

export function App() {
  const [tasks, setTasks] = useState<string[]>([]);

  const [taskText, setTaskText] = useState('')

  const [concludedTask, setConcludedTask] = useState(0)

  const deleteTask = (taskToDelete: string) => {
    const oldTask = tasks.filter(task => {
      return task !== taskToDelete
    })
    setTasks(oldTask)
  }

  

  return (
    <>
      <Header />
      <div className={style.wrapper}>
        <main>
          <Form 
            tasks={tasks} 
            setTasks={setTasks} 
            taskText={taskText} 
            setTaskText={setTaskText}
          />
          <div className={style.fullBoxContent}>
            <header>
              <div className={style.createdTasks}>
                <h3>Tarefas criadas</h3>
                <span>{tasks.length}</span>
              </div>
              <div className={style.completedTasks}>
                <h3>Concluidas</h3>
                <span>{concludedTask} de {tasks.length}</span>
              </div>
            </header>

            {
             tasks.length === 0 || (tasks.length === 1 && tasks[0].trim() === '') ? 
              (
                <section className={style.emptyContent}>
                  <img src={clipboard} alt="" />
                  <h2>
                    Você ainda não tem tarefas cadastradas <br />
                    <span>Crie tarefas e organize seus itens a fazer</span>
                  </h2>
                </section>
              )
               : (
                <section className={style.content}>
                  {tasks.map((task) => {
                    if (task.trim() !== '') {
                      return (
                        <Task 
                          key={task} 
                          content={task} 
                          deleteTask={deleteTask}
                          setConcludedTask={setConcludedTask}
                        />
                      )
                    }
                    return null;
                  })}
                </section>
              )
            }

           

            
          </div>
        </main>
      </div>
    </>
  )
}
