import React, {useState} from 'react';
import './App.css';
import TaskField from "./components/TaskField";
import ListItem from "./components/ListItem";

function App() {
  const [tasks,setTasks] = useState([
      {
        text:'Изучить React JS',
        completed: true
      },
      {
        text:'Разработать дизайн',
        completed: false
      },
      {
        text:'Купить молоко',
        completed: false
      },
      {
        text:'Купить хлеб',
        completed: false
      },
      {
        text:'Проверка автоматической загрузки',
        completed: false
      }
  ])

    const onToggleCompleted =(index)=>{
        setTasks(prevTask =>{
            return prevTask.map((task,curIdx)=>{
                if(index === curIdx){
                    return {
                        ...task,
                        completed: !task.completed
                    }
                }
                return task
            })
        })
    }

    const onRemoveTask = (index)=>{
      setTasks((prevState) =>(
          prevState.filter((_,curIdx)=>{
              if (index !== curIdx){
                  return true;
              }
              return false;
          })
          )
      )
    }

    const onAddTask =(text)=>{
      setTasks(prevState => [...prevState,{text,completed:false}])
    }


  return (
      <div className="todo">
        <div className="todo__header">
          <h4>Мои задач</h4>
        </div>
        <TaskField onAddTask={onAddTask} />
        <div className='todo__list'>
            {tasks.length !== 0 ? tasks.map((task,index) =>(
                    <ListItem  onRemoveTask={onRemoveTask} onToggleCompleted={onToggleCompleted} completed={task.completed} text={task.text} key={index} index={index} />
                )) : <h2 className='label'>Нет задач</h2>}

        </div>
      </div>
  )
}

export default App;
